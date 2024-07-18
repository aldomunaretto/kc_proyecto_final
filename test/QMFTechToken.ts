import hre from "hardhat";
import assert from "assert";

// Hardcoded values for deployments.

const HARDCODED_WALLETS = [
  "MASTER",
  "ECOSYSTEM_TEAM",
  "PARTNERS_MARKETS",
  "COMMUNITY",
] as const;

const HARDCODED_ADDRESSES = {
  MASTER: "0x2FFBAb7B2c0bce0668c86164F7a25d018B623920",
  ECOSYSTEM_TEAM: "0xfe9bbBB444af5eAC7c5CAbB8cc597f068e090945",
  PARTNERS_MARKETS: "0x2B357E26a3E4A39A0E7FCE274061923a33A1259f",
  COMMUNITY: "0xb491B6F43Ca6d58D2cB894eDe9bEb07Ba33a207A",
} as const;

const MINT_AMOUNTS = {
  MASTER: BigInt(32_000_000) * BigInt(10 ** 18),
  ECOSYSTEM_TEAM:
    BigInt(13_000_000) * BigInt(10 ** 18) +
    BigInt(10_000_000) * BigInt(10 ** 18),
  PARTNERS_MARKETS: BigInt(30_000_000) * BigInt(10 ** 18),
  COMMUNITY: BigInt(15_000_000) * BigInt(10 ** 18),
} as const;

// Mocks.

const PEER_EID = 40109;
const PEER_ADDRESS = "0xa1C1Be04451c295d797C4B6A3Bc713a8E825F5fC";

// Helper functions.

function encodeAddressAsBytes32(address: `0x${string}`) {
  return ("0x" +
    address.slice(2).padStart(64, "0").toLowerCase()) as `0x${string}`;
}

function encodeSendMessage(address: `0x${string}`, amount: bigint) {
  const parsedAmount = amount / BigInt(10 ** 12);
  return (encodeAddressAsBytes32(address) +
    parsedAmount.toString(16).padStart(16, "0")) as `0x${string}`;
}

async function expectReverts(promise: Promise<any>, reason: string) {
  try {
    await promise;
    throw new Error("Not thrown");
  } catch (e) {
    assert(e instanceof Error);
    assert(e.message.includes(reason), e.message);
  }
}

// Test suites.
//
// Only custom logic is tested here, as the rest of the contract is inherited from
// OpenZeppelin 5.0.2 ERC20 implementation and LayerZero 2.1.8 OFT implementation.
//
// Audits can be found at:
// - https://github.com/OpenZeppelin/openzeppelin-contracts/blob/dbb6104ce834628e473d2173bbc9d47f81a9eec3/audits/2023-10-v5.0.pdf
// - https://github.com/LayerZero-Labs/Audits/tree/2da528e3765229303a9e24bfdebc00dfcd0df4a6/audits

describe("BaseQMFTechToken", function () {
  async function deploy() {
    const lzEndpointV2 = await hre.viem.deployContract(
      "LayerZeroEndpointV2Mock",
      [],
    );
    const token = await hre.viem.deployContract("BaseQMFTechToken", [
      lzEndpointV2.address,
    ]);
    await token.write.setPeer([PEER_EID, encodeAddressAsBytes32(PEER_ADDRESS)]);
    return { lzEndpointV2, token };
  }

  describe("deployment", function () {
    it("should deploy", async function () {
      await deploy();
    });

    it("should set LZ endpoint on deploy", async function () {
      const { lzEndpointV2, token } = await deploy();
      const endpoint = await token.read.endpoint();
      assert.equal(endpoint.toLowerCase(), lzEndpointV2.address.toLowerCase());
    });

    it("should not mint anything", async function () {
      const { token } = await deploy();
      const totalSupply = await token.read.totalSupply();
      assert.equal(totalSupply, BigInt(0));
    });
  });

  describe("receive", function () {
    it("should mint tokens to receiver", async function () {
      const [owner, receiver] = await hre.viem.getWalletClients();
      const { lzEndpointV2, token } = await deploy();
      const sendAmount = BigInt(10 * 10 ** 18);
      await lzEndpointV2.write.lzReceive([
        {
          srcEid: 40109,
          sender:
            "0x000000000000000000000000a1c1be04451c295d797c4b6a3bc713a8e825f5fc",
          nonce: 1n,
        },
        token.address,
        "0x068fd11dde7a2a0a9f6ca34ca5fc02fa10fc9fa4bc84671c0f9b96d3af5172a1",
        encodeSendMessage(receiver.account.address, sendAmount),
        "0x",
      ]);
      const balance = await token.read.balanceOf([receiver.account.address]);
      assert.equal(balance, sendAmount);
    });

    it("should revert if sending more than max supply", async function () {
      const [owner, receiver] = await hre.viem.getWalletClients();
      const { lzEndpointV2, token } = await deploy();
      const maxSupply = await token.read.MAX_SUPPLY();
      const sendAmount = 2n * maxSupply;
      await expectReverts(
        lzEndpointV2.write.lzReceive([
          {
            srcEid: 40109,
            sender:
              "0x000000000000000000000000a1c1be04451c295d797c4b6a3bc713a8e825f5fc",
            nonce: 1n,
          },
          token.address,
          "0x068fd11dde7a2a0a9f6ca34ca5fc02fa10fc9fa4bc84671c0f9b96d3af5172a1",
          encodeSendMessage(receiver.account.address, sendAmount),
          "0x",
        ]),
        "MaxSupplyExceeded",
      );
    });
  });

  describe("send", function () {});
});

describe("NativeQMFTechToken", function () {
  async function deploy() {
    const lzEndpointV2 = await hre.viem.deployContract(
      "LayerZeroEndpointV2Mock",
      [],
    );
    const token = await hre.viem.deployContract("NativeQMFTechToken", [
      lzEndpointV2.address,
    ]);
    await token.write.setPeer([PEER_EID, encodeAddressAsBytes32(PEER_ADDRESS)]);
    return { lzEndpointV2, token };
  }

  describe("deployment", function () {
    it("should deploy", async function () {
      await deploy();
    });

    it("should set LZ endpoint on deploy", async function () {
      const { lzEndpointV2, token } = await deploy();
      const endpoint = await token.read.endpoint();
      assert.equal(endpoint.toLowerCase(), lzEndpointV2.address.toLowerCase());
    });

    it("should set max supply on deploy", async function () {
      const { token } = await deploy();
      const maxSupply = await token.read.MAX_SUPPLY();
      assert.equal(maxSupply, BigInt(100_000_000) * BigInt(10 ** 18));
    });

    it("should mint exactly max supply", async function () {
      const { token } = await deploy();
      const maxSupply = await token.read.MAX_SUPPLY();
      const totalSupply = await token.read.totalSupply();
      assert.equal(maxSupply, totalSupply);
    });

    it("should have correct hardcoded addresses", async function () {
      const { token } = await deploy();
      for (const wallet of HARDCODED_WALLETS) {
        const address = await token.read[`${wallet}_ADDRESS`]();
        assert.equal(
          address.toLowerCase(),
          HARDCODED_ADDRESSES[wallet].toLowerCase(),
        );
      }
    });

    it("should mint correct amounts to hardcoded addresses", async function () {
      const { token } = await deploy();
      for (const wallet of HARDCODED_WALLETS) {
        const balance = await token.read.balanceOf([
          HARDCODED_ADDRESSES[wallet],
        ]);
        assert.equal(balance, MINT_AMOUNTS[wallet]);
      }
    });
  });

  describe("burn", function () {
    let deployment: Awaited<ReturnType<typeof deploy>>;

    before(async function () {
      deployment = await deploy();
      const { token } = deployment;
      const [owner] = await hre.viem.getWalletClients();
      // Impersonate and send tokens from hardcoded addresses to owner to have funds.
      const testClient = await hre.viem.getTestClient({ mode: "hardhat" });
      await testClient.impersonateAccount({
        address: HARDCODED_ADDRESSES.MASTER,
      });
      await owner.sendTransaction({
        to: HARDCODED_ADDRESSES.MASTER,
        value: BigInt(10 ** 18),
      });
      await token.write.transfer([owner.account.address, MINT_AMOUNTS.MASTER], {
        account: HARDCODED_ADDRESSES.MASTER,
      });
      await testClient.impersonateAccount({
        address: HARDCODED_ADDRESSES.PARTNERS_MARKETS,
      });
      await owner.sendTransaction({
        to: HARDCODED_ADDRESSES.PARTNERS_MARKETS,
        value: BigInt(10 ** 18),
      });
      await token.write.transfer(
        [owner.account.address, MINT_AMOUNTS.PARTNERS_MARKETS],
        {
          account: HARDCODED_ADDRESSES.PARTNERS_MARKETS,
        },
      );
    });

    it("should decrease owner balance", async function () {
      const [owner] = await hre.viem.getWalletClients();
      const burnAmount = BigInt(1);
      const { token } = deployment;
      const initialBalance = await token.read.balanceOf([
        owner.account.address,
      ]);
      await token.write.burn([burnAmount]);
      const finalBalance = await token.read.balanceOf([owner.account.address]);
      assert.equal(finalBalance, initialBalance - burnAmount);
    });

    it("should decrease total supply", async function () {
      const burnAmount = BigInt(1);
      const { token } = deployment;
      const initialTotalSupply = await token.read.totalSupply();
      await token.write.burn([burnAmount]);
      const finalTotalSupply = await token.read.totalSupply();
      assert.equal(finalTotalSupply, initialTotalSupply - burnAmount);
    });

    it("should increase total burned count", async function () {
      const burnAmount = BigInt(1);
      const { token } = deployment;
      const initialBurnedTokens = await token.read.burnedTokens();
      await token.write.burn([burnAmount]);
      const finalBurnedTokens = await token.read.burnedTokens();
      assert.equal(finalBurnedTokens, initialBurnedTokens + burnAmount);
    });

    it("should revert if not accessed by owner", async function () {
      const [owner, notOwner] = await hre.viem.getWalletClients();
      const { token } = deployment;
      await token.write.transfer([notOwner.account.address, BigInt(1)]);
      await expectReverts(
        token.write.burn([BigInt(1)], { account: notOwner.account }),
        "OwnableUnauthorizedAccount",
      );
    });

    it("should revert if burning more than balance", async function () {
      const [owner, notOwner] = await hre.viem.getWalletClients();
      const { token } = deployment;
      const balance = await token.read.balanceOf([owner.account.address]);
      await token.write.transfer([
        notOwner.account.address,
        balance - BigInt(1),
      ]);
      await expectReverts(
        token.write.burn([BigInt(2)]),
        "ERC20InsufficientBalance",
      );
    });

    it("should revert if burning more than burning threshold", async function () {
      const [owner] = await hre.viem.getWalletClients();
      const { token } = deployment;
      const burningThreshold = await token.read.BURNING_THRESHOLD();
      await expectReverts(
        token.write.burn([burningThreshold + BigInt(1)]),
        "BurningThresholdExceeded",
      );
    });
  });
});
