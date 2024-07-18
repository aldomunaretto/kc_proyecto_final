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

//crear un arbol de merkle a partir de una lista de direcciones TEST_ADRESSES
const TEST_ADRESSES = [
"0x1HckjUpRGcrrRAtFaaCAUaGjsPx9oYmLaZ623920",
"0x1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa623920",
"0x1BoatSLRHtKNngkdXEeobR76b53LETtpyT623920",
"0x1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3623920",
"0x1PMycacnJaSqwwJqjawXBErnLsZ7RkXUAs623920",
"0x1AGNa15ZQXAZUgFiqJ3i7Z2DPU2J6hW62r090945",
"0x1Ez69SnzzmePmZX3WpEzMKTrcBF2gpNQ55090945",
"0x1JryTePceSiWVzziDcMiB3RAA4E3x7BBMP090945",
"0x1MN3JsSk5viQmMBo8zNGTmAz85j4Qhx3eYA1259f",
"0x1A3Ndhi3F8xq5ra3nYeJsyRH5Fx3J6iEcYA1259f",
]

const merkleTreeRoot = "846b834dfed9964bdb193c2a12a7db13170aba067c4945e05c347def08a47a4d";

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

// Test suites

// describe("BaseQMFTechToken", function () {
//     async function deploy() {
//       const lzEndpointV2 = await hre.viem.deployContract(
//         "LayerZeroEndpointV2Mock",
//         [],
//       );
//       const token = await hre.viem.deployContract("BaseQMFTechToken", [
//         lzEndpointV2.address,
//       ]);
//       await token.write.setPeer([PEER_EID, encodeAddressAsBytes32(PEER_ADDRESS)]);
//       return { lzEndpointV2, token };
//     }
  
//     describe("deployment", function () {
//       it("should deploy", async function () {
//         await deploy();
//       });
  
//       it("should set LZ endpoint on deploy", async function () {
//         const { lzEndpointV2, token } = await deploy();
//         const endpoint = await token.read.endpoint();
//         assert.equal(endpoint.toLowerCase(), lzEndpointV2.address.toLowerCase());
//       });
  
//       it("should not mint anything", async function () {
//         const { token } = await deploy();
//         const totalSupply = await token.read.totalSupply();
//         assert.equal(totalSupply, BigInt(0));
//       });
//     });

// });

// describe("NativeQMFTechToken", function () {
//     async function deploy() {
//       const lzEndpointV2 = await hre.viem.deployContract(
//         "LayerZeroEndpointV2Mock",
//         [],
//       );
//       const token = await hre.viem.deployContract("NativeQMFTechToken", [
//         lzEndpointV2.address,
//       ]);
//       await token.write.setPeer([PEER_EID, encodeAddressAsBytes32(PEER_ADDRESS)]);
//       return { lzEndpointV2, token };
//     }
  
//     describe("deployment", function () {
//       it("should deploy", async function () {
//         await deploy();
//       });
  
//       it("should set LZ endpoint on deploy", async function () {
//         const { lzEndpointV2, token } = await deploy();
//         const endpoint = await token.read.endpoint();
//         assert.equal(endpoint.toLowerCase(), lzEndpointV2.address.toLowerCase());
//       });
  
//       it("should set max supply on deploy", async function () {
//         const { token } = await deploy();
//         const maxSupply = await token.read.MAX_SUPPLY();
//         assert.equal(maxSupply, BigInt(100_000_000) * BigInt(10 ** 18));
//       });
  
//       it("should mint exactly max supply", async function () {
//         const { token } = await deploy();
//         const maxSupply = await token.read.MAX_SUPPLY();
//         const totalSupply = await token.read.totalSupply();
//         assert.equal(maxSupply, totalSupply);
//       });
  
//       it("should have correct hardcoded addresses", async function () {
//         const { token } = await deploy();
//         for (const wallet of HARDCODED_WALLETS) {
//           const address = await token.read[`${wallet}_ADDRESS`]();
//           assert.equal(
//             address.toLowerCase(),
//             HARDCODED_ADDRESSES[wallet].toLowerCase(),
//           );
//         }
//       });
  
//       it("should mint correct amounts to hardcoded addresses", async function () {
//         const { token } = await deploy();
//         for (const wallet of HARDCODED_WALLETS) {
//           const balance = await token.read.balanceOf([
//             HARDCODED_ADDRESSES[wallet],
//           ]);
//           assert.equal(balance, MINT_AMOUNTS[wallet]);
//         }
//       });
//     });

// });

describe("AirDropQMF", function () {
    async function deploy() {
      const lzEndpointV2 = await hre.viem.deployContract(
        "LayerZeroEndpointV2Mock",
        [],
      );
      const token = await hre.viem.deployContract("NativeQMFTechToken", [
        lzEndpointV2.address,
      ]);
      
      const airdrop = await hre.viem.deployContract("AirDropQMF", [
        token.address,
        BigInt(10 ** 18),
        BigInt(10 ** 19),
      ]);
      await token.write.setPeer([PEER_EID, encodeAddressAsBytes32(PEER_ADDRESS)]);
      await airdrop.write.addMerkleRoot("846b834dfed9964bdb193c2a12a7db13170aba067c4945e05c347def08a47a4d");
      return { lzEndpointV2, token, airdrop };
    }
  
    describe("deployment", function () {
      it("should deploy", async function () {
        await deploy();
      });
  
    //   it("should set LZ endpoint on deploy", async function () {
    //     const { lzEndpointV2, airdrop } = await deploy();
    //     const endpoint = await airdrop.read.endpoint();
    //     assert.equal(endpoint.toLowerCase(), lzEndpointV2.address.toLowerCase());
    //   });
  
    //   it("should set token address on deploy", async function () {
    //     const { token, airdrop } = await deploy();
    //     const address = await airdrop.read.token();
    //     assert.equal(address.toLowerCase(), token.address.toLowerCase());
    //   });
  
    //   it("should set reward amount on deploy", async function () {
    //     const { airdrop } = await deploy();
    //     const rewardAmount = await airdrop.read.rewardAmount();
    //     assert.equal(rewardAmount, BigInt(10 ** 18));
    //   });
  
    //   it("should set max reward amount on deploy", async function () {
    //     const { airdrop } = await deploy();
    //     const maxRewardAmount = await airdrop.read.totalAirdropSupply();
    //     assert.equal(maxRewardAmount, BigInt(10 ** 19));
    //   });
  
    //   it("should not allow to claim without proof", async function () {
    //     const { airdrop } = await deploy();
    //     await expectReverts(
    //       airdrop.write.claim([]),
    //       "AirDropQMF: invalid proof",
    //     );
    //   });
  
    // it("should not allow to claim with invalid proof", async function () {
    //     const { airdrop } = await deploy();
    //     await expectReverts(
    //     airdrop.write.claim(["0x1234"]),
    //     "AirDropQMF: invalid proof",
    //     );
    // });

    // it("should allow to claim with valid proof", async function () {
    //     const { airdrop } = await deploy();
    //     await airdrop.write.claim(["0x1234"]);
    // });

    // it("should not allow to claim twice", async function () {
    //     const { airdrop } = await deploy();
    //     await airdrop.write.claim(["0x1234"]);
    //     await expectReverts(
    //     airdrop.write.claim(["0x1234"]),
    //     "AirDropQMF: already claimed",
    //     );
    // });
    });
});














// describe("AirDropQMF", function () {
//   let token: NativeQMFTechToken;
//   let airdrop: AirDropQMF;
//   let owner: Signer;
//   let user: Signer;
//   let merkleRoot: string; // Asumir que tenemos una raíz de Merkle válida
//   let proof: string[]; // Asumir que tenemos una prueba válida para `user`

//   beforeEach(async function () {
//     [owner, user] = await ethers.getSigners();
//     const TokenFactory = await ethers.getContractFactory("NativeQMFTechToken");
//     token = (await TokenFactory.deploy()) as NativeQMFTechToken;
//     await token.deployed();

//     const AirDropFactory = await ethers.getContractFactory("AirDropQMF");
//     airdrop = (await AirDropFactory.deploy(token.address, ethers.utils.parseEther("1000"), ethers.utils.parseEther("10000"))) as AirDropQMF;
//     await airdrop.deployed();

//     // Asumir configuración inicial aquí, como transferir tokens al contrato de airdrop si es necesario
//   });

//   describe("Deployment", function () {
//     it("should set the right owner", async function () {
//       expect(await airdrop.owner()).to.equal(await owner.getAddress());
//     });

//     it("should set the right token address", async function () {
//       expect(await airdrop.token()).to.equal(token.address);
//     });

//     // Más pruebas sobre el estado inicial aquí
//   });

//   describe("Functionality", function () {
//     it("should allow owner to add Merkle root", async function () {
//       await expect(airdrop.addMerkleRoot(merkleRoot)).to.not.be.reverted;
//       expect(await airdrop.merkleRoots(0)).to.equal(merkleRoot);
//     });

//     it("should allow users to claim their reward with valid proof", async function () {
//       // Primero, el propietario añade una raíz de Merkle válida
//       await airdrop.addMerkleRoot(merkleRoot);

//       // El usuario reclama su recompensa
//       await expect(airdrop.connect(user).claim(proof)).to.not.be.reverted;
//       expect(await token.balanceOf(await user.getAddress())).to.equal(ethers.utils.parseEther("1000"));
//     });

//     // Más pruebas aquí
//   });

//   // Pruebas adicionales para `setRewardAmount`, `recoverTokens`, etc.
// });