import { Chain } from "viem";

export type Peer = {
  // viem chain.
  chain: Chain;
  // Token address for the chain.
  address: `0x${string}`;
  // LayerZero endpoint ID for the chain.
  // https://docs.layerzero.network/contracts/endpoint-addresses
  eid: number;
};
