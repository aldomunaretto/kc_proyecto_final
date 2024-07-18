// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {OFT} from "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFT.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract BaseQMFTechToken is OFT {
    uint256 public constant MAX_SUPPLY = 100_000_000 * 10 ** 18;

    error MaxSupplyExceeded();

    /**
     * @param _layerZeroEndpoint LayerZero endpoint address for the deployed chain.
     */
    constructor(
        address _layerZeroEndpoint
    )
        OFT("QMF Tech", "QMFT", _layerZeroEndpoint, _msgSender())
        Ownable(_msgSender())
    {}

    /**
     * @dev Override to ensure that the chain supply does not exceed the maximum supply.
     * @inheritdoc OFT
     */
    function _credit(
        address _to,
        uint256 _amountLD,
        uint32 /*_srcEid*/
    ) internal virtual override returns (uint256 amountReceivedLD) {
        if (totalSupply() + _amountLD > MAX_SUPPLY) {
            revert MaxSupplyExceeded();
        }
        return super._credit(_to, _amountLD, 0);
    }
}

contract NativeQMFTechToken is BaseQMFTechToken {
    uint256 public constant BURNING_THRESHOLD = 50_000_000 * 10 ** 18;

    uint256 public burnedTokens = 0;

    error BurningThresholdExceeded();

    address public constant MASTER_ADDRESS =
        0x2FFBAb7B2c0bce0668c86164F7a25d018B623920;
    address public constant ECOSYSTEM_TEAM_ADDRESS =
        0xfe9bbBB444af5eAC7c5CAbB8cc597f068e090945;
    address public constant PARTNERS_MARKETS_ADDRESS =
        0x2B357E26a3E4A39A0E7FCE274061923a33A1259f;
    address public constant COMMUNITY_ADDRESS =
        0xb491B6F43Ca6d58D2cB894eDe9bEb07Ba33a207A;

    constructor(
        address _layerZeroEndpoint
    ) BaseQMFTechToken(_layerZeroEndpoint) {
        // Master wallet.
        _mint(MASTER_ADDRESS, 32_000_000 * 10 ** 18);
        // Ecosystem and team wallet.
        _mint(
            ECOSYSTEM_TEAM_ADDRESS,
            13_000_000 * 10 ** 18 + 10_000_000 * 10 ** 18
        );
        // Parners and markets address.
        _mint(PARTNERS_MARKETS_ADDRESS, 30_000_000 * 10 ** 18);
        // Community address.
        _mint(COMMUNITY_ADDRESS, 15_000_000 * 10 ** 18);
    }

    /**
     * @notice Burn tokens only by owner.
     * @dev Burning will only happen in one chain to maintain one source of truth for
     * the total burned tokens.
     * @param amount Quantity of owner funds to burn.
     */
    function burn(uint256 amount) public onlyOwner {
        if (burnedTokens + amount > BURNING_THRESHOLD) {
            revert BurningThresholdExceeded();
        }
        burnedTokens += amount;
        _burn(_msgSender(), amount);
    }
}
