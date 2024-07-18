import { http, createPublicClient, createWalletClient, Chain } from "viem";
import { privateKeyToAccount } from "viem/accounts";

export const account = privateKeyToAccount(
  (process.env.PRIVATE_KEY || "0x" + "0".repeat(64)) as `0x${string}`,
);

export function getPublicClient(chain: Chain) {
  return createPublicClient({
    chain,
    transport: http(),
  });
}

export function getWalletClient(chain: Chain) {
  return createWalletClient({
    chain,
    transport: http(),
  });
}
