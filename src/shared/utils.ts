import { Chain, encodeFunctionData } from "viem";
import { Peer } from "./types";
import { getPublicClient } from "./config";
import { BaseQMFTechToken } from "./contracts";

export function encodeAddressAsBytes32(address: `0x${string}`) {
  return ("0x" +
    address.slice(2).padStart(64, "0").toLowerCase()) as `0x${string}`;
}

export function getPayload(peer: Peer) {
  return encodeFunctionData({
    abi: BaseQMFTechToken.abi,
    functionName: "setPeer",
    args: [peer.eid, encodeAddressAsBytes32(peer.address)],
  });
}

export async function isPeer(
  originChain: Chain,
  originToken: `0x${string}`,
  peer: Peer,
) {
  return await getPublicClient(originChain).readContract({
    abi: BaseQMFTechToken.abi,
    address: originToken,
    functionName: "isPeer",
    args: [peer.eid, encodeAddressAsBytes32(peer.address)],
  });
}

export async function getPeerStatuses(peer: Peer, peers: Peer[]) {
  const checks = await Promise.all(
    peers.map(async (p) => await isPeer(peer.chain, peer.address, p)),
  );
  const alreadyPeers = peers.filter((_, i) => checks[i]);
  const nonPeers = peers.filter((_, i) => !checks[i]);
  return { alreadyPeers, nonPeers };
}
