// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {OFT} from "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFT.sol";
import {Origin} from "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFTCore.sol";

contract LayerZeroEndpointV2Mock {
    function setDelegate(address) public {}

    function lzReceive(
        Origin calldata _origin,
        address _receiver,
        bytes32 _guid,
        bytes calldata _message,
        bytes calldata _extraData
    ) external {
        OFT(_receiver).lzReceive(
            _origin,
            _guid,
            _message,
            msg.sender,
            _extraData
        );
    }
}
