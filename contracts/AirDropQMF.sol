// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./QMFTechToken.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AirDropQMF is Ownable {
    NativeQMFTechToken public token;
    bytes32[] public merkleRoots;
    uint256 public rewardAmount;
    uint256 public totalAirdropSupply;
    uint256 public totalRewarded;

    mapping(address => bool) public claimed;

    constructor(address tokenAddress, uint256 _rewardAmount, uint256 _totalAirdropSupply) Ownable(msg.sender) {
        token = NativeQMFTechToken(tokenAddress);
        rewardAmount = _rewardAmount;
        totalAirdropSupply = _totalAirdropSupply;
        totalRewarded = 0;

        require(token.owner() == msg.sender, "Caller is not token owner");

    }

    function setAirdropBatch(bytes32 _merkleRoot, uint256 numberOfLeaves) external onlyOwner {
        merkleRoots.push(_merkleRoot);

        uint256 requiredTokens = numberOfLeaves * rewardAmount;
        require(requiredTokens <= totalAirdropSupply - totalRewarded, "Not enough tokens allocated for airdrop");

        uint256 allowance = token.allowance(msg.sender, address(this));
        require(allowance >= totalAirdropSupply, "Contract not approved for enough tokens");
        require(token.transferFrom(msg.sender, address(this), totalAirdropSupply), "Failed to transfer tokens to AirDrop contract");
    }

    function setRewardAmount(uint256 _rewardAmount) external onlyOwner {
        rewardAmount = _rewardAmount;
    }

    function recoverTokens() external onlyOwner {
        uint256 remainingTokens = totalAirdropSupply - totalRewarded;

        token.transfer(owner(), remainingTokens);
    }

    function claim(bytes32[] calldata proof) external {
        require(!claimed[msg.sender], "Already claimed");
        require(totalRewarded + rewardAmount <= totalAirdropSupply, "Insufficient tokens available");
        
        bool valid = false;
        for (uint i = 0; i < merkleRoots.length; i++) {
            bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
            if (MerkleProof.verify(proof, merkleRoots[i], leaf)) {
                valid = true;
                break;
            }
        }

        require(valid, "Invalid proof");
        claimed[msg.sender] = true;
        totalRewarded += rewardAmount;
        token.transfer(msg.sender, rewardAmount);
    }
}