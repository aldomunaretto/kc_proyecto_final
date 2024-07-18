export const NativeQMFTechToken = {
  _format: "hh-sol-artifact-1",
  contractName: "NativeQMFTechToken",
  sourceName: "contracts/QMFTechToken.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "_layerZeroEndpoint",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "target",
          type: "address",
        },
      ],
      name: "AddressEmptyCode",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "AddressInsufficientBalance",
      type: "error",
    },
    {
      inputs: [],
      name: "BurningThresholdExceeded",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "allowance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientAllowance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientBalance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ERC20InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC20InvalidReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSpender",
      type: "error",
    },
    {
      inputs: [],
      name: "FailedInnerCall",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidDelegate",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidEndpointCall",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidLocalDecimals",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "options",
          type: "bytes",
        },
      ],
      name: "InvalidOptions",
      type: "error",
    },
    {
      inputs: [],
      name: "LzTokenUnavailable",
      type: "error",
    },
    {
      inputs: [],
      name: "MaxSupplyExceeded",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
      ],
      name: "NoPeer",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "msgValue",
          type: "uint256",
        },
      ],
      name: "NotEnoughNative",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "OnlyEndpoint",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "sender",
          type: "bytes32",
        },
      ],
      name: "OnlyPeer",
      type: "error",
    },
    {
      inputs: [],
      name: "OnlySelf",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "SafeERC20FailedOperation",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "result",
          type: "bytes",
        },
      ],
      name: "SimulationResult",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountLD",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minAmountLD",
          type: "uint256",
        },
      ],
      name: "SlippageExceeded",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "eid",
              type: "uint32",
            },
            {
              internalType: "uint16",
              name: "msgType",
              type: "uint16",
            },
            {
              internalType: "bytes",
              name: "options",
              type: "bytes",
            },
          ],
          indexed: false,
          internalType: "struct EnforcedOptionParam[]",
          name: "_enforcedOptions",
          type: "tuple[]",
        },
      ],
      name: "EnforcedOptionSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "inspector",
          type: "address",
        },
      ],
      name: "MsgInspectorSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "guid",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint32",
          name: "srcEid",
          type: "uint32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "toAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amountReceivedLD",
          type: "uint256",
        },
      ],
      name: "OFTReceived",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "guid",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint32",
          name: "dstEid",
          type: "uint32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "fromAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amountSentLD",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amountReceivedLD",
          type: "uint256",
        },
      ],
      name: "OFTSent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "peer",
          type: "bytes32",
        },
      ],
      name: "PeerSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "preCrimeAddress",
          type: "address",
        },
      ],
      name: "PreCrimeSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "BURNING_THRESHOLD",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "COMMUNITY_ADDRESS",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "ECOSYSTEM_TEAM_ADDRESS",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MASTER_ADDRESS",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_SUPPLY",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PARTNERS_MARKETS_ADDRESS",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "SEND",
      outputs: [
        {
          internalType: "uint16",
          name: "",
          type: "uint16",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "SEND_AND_CALL",
      outputs: [
        {
          internalType: "uint16",
          name: "",
          type: "uint16",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "srcEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "sender",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
          ],
          internalType: "struct Origin",
          name: "origin",
          type: "tuple",
        },
      ],
      name: "allowInitializePath",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "approvalRequired",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "burnedTokens",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "_eid",
          type: "uint32",
        },
        {
          internalType: "uint16",
          name: "_msgType",
          type: "uint16",
        },
        {
          internalType: "bytes",
          name: "_extraOptions",
          type: "bytes",
        },
      ],
      name: "combineOptions",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "composeMsgSender",
      outputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimalConversionRate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "endpoint",
      outputs: [
        {
          internalType: "contract ILayerZeroEndpointV2",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
        {
          internalType: "uint16",
          name: "msgType",
          type: "uint16",
        },
      ],
      name: "enforcedOptions",
      outputs: [
        {
          internalType: "bytes",
          name: "enforcedOption",
          type: "bytes",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "_eid",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "_peer",
          type: "bytes32",
        },
      ],
      name: "isPeer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "srcEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "sender",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
          ],
          internalType: "struct Origin",
          name: "_origin",
          type: "tuple",
        },
        {
          internalType: "bytes32",
          name: "_guid",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "_message",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "_executor",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_extraData",
          type: "bytes",
        },
      ],
      name: "lzReceive",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "uint32",
                  name: "srcEid",
                  type: "uint32",
                },
                {
                  internalType: "bytes32",
                  name: "sender",
                  type: "bytes32",
                },
                {
                  internalType: "uint64",
                  name: "nonce",
                  type: "uint64",
                },
              ],
              internalType: "struct Origin",
              name: "origin",
              type: "tuple",
            },
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "guid",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "executor",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "message",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "extraData",
              type: "bytes",
            },
          ],
          internalType: "struct InboundPacket[]",
          name: "_packets",
          type: "tuple[]",
        },
      ],
      name: "lzReceiveAndRevert",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "srcEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "sender",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
          ],
          internalType: "struct Origin",
          name: "_origin",
          type: "tuple",
        },
        {
          internalType: "bytes32",
          name: "_guid",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "_message",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "_executor",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_extraData",
          type: "bytes",
        },
      ],
      name: "lzReceiveSimulate",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "msgInspector",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "nextNonce",
      outputs: [
        {
          internalType: "uint64",
          name: "nonce",
          type: "uint64",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "oApp",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "oAppVersion",
      outputs: [
        {
          internalType: "uint64",
          name: "senderVersion",
          type: "uint64",
        },
        {
          internalType: "uint64",
          name: "receiverVersion",
          type: "uint64",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "oftVersion",
      outputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
        {
          internalType: "uint64",
          name: "version",
          type: "uint64",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
      ],
      name: "peers",
      outputs: [
        {
          internalType: "bytes32",
          name: "peer",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "preCrime",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "amountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "extraOptions",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "composeMsg",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "oftCmd",
              type: "bytes",
            },
          ],
          internalType: "struct SendParam",
          name: "_sendParam",
          type: "tuple",
        },
      ],
      name: "quoteOFT",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxAmountLD",
              type: "uint256",
            },
          ],
          internalType: "struct OFTLimit",
          name: "oftLimit",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "int256",
              name: "feeAmountLD",
              type: "int256",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
          ],
          internalType: "struct OFTFeeDetail[]",
          name: "oftFeeDetails",
          type: "tuple[]",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "amountSentLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountReceivedLD",
              type: "uint256",
            },
          ],
          internalType: "struct OFTReceipt",
          name: "oftReceipt",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "amountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "extraOptions",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "composeMsg",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "oftCmd",
              type: "bytes",
            },
          ],
          internalType: "struct SendParam",
          name: "_sendParam",
          type: "tuple",
        },
        {
          internalType: "bool",
          name: "_payInLzToken",
          type: "bool",
        },
      ],
      name: "quoteSend",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "nativeFee",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lzTokenFee",
              type: "uint256",
            },
          ],
          internalType: "struct MessagingFee",
          name: "msgFee",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "amountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "extraOptions",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "composeMsg",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "oftCmd",
              type: "bytes",
            },
          ],
          internalType: "struct SendParam",
          name: "_sendParam",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "nativeFee",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lzTokenFee",
              type: "uint256",
            },
          ],
          internalType: "struct MessagingFee",
          name: "_fee",
          type: "tuple",
        },
        {
          internalType: "address",
          name: "_refundAddress",
          type: "address",
        },
      ],
      name: "send",
      outputs: [
        {
          components: [
            {
              internalType: "bytes32",
              name: "guid",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "nativeFee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lzTokenFee",
                  type: "uint256",
                },
              ],
              internalType: "struct MessagingFee",
              name: "fee",
              type: "tuple",
            },
          ],
          internalType: "struct MessagingReceipt",
          name: "msgReceipt",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "amountSentLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountReceivedLD",
              type: "uint256",
            },
          ],
          internalType: "struct OFTReceipt",
          name: "oftReceipt",
          type: "tuple",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_delegate",
          type: "address",
        },
      ],
      name: "setDelegate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "eid",
              type: "uint32",
            },
            {
              internalType: "uint16",
              name: "msgType",
              type: "uint16",
            },
            {
              internalType: "bytes",
              name: "options",
              type: "bytes",
            },
          ],
          internalType: "struct EnforcedOptionParam[]",
          name: "_enforcedOptions",
          type: "tuple[]",
        },
      ],
      name: "setEnforcedOptions",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_msgInspector",
          type: "address",
        },
      ],
      name: "setMsgInspector",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "_eid",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "_peer",
          type: "bytes32",
        },
      ],
      name: "setPeer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_preCrime",
          type: "address",
        },
      ],
      name: "setPreCrime",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "sharedDecimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "token",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x60c06040526000600a553480156200001657600080fd5b50604051620065633803806200656383398181016040528101906200003c9190620007fc565b806040518060400160405280600881526020017f514d4620546563680000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f514d46540000000000000000000000000000000000000000000000000000000081525082620000ba620003f460201b60201c565b8383620000cc620003fc60201b60201c565b848481818181620000e2620003f460201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001575760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016200014e91906200083f565b60405180910390fd5b62000168816200040560201b60201c565b508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000204576040517fb586360400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60805173ffffffffffffffffffffffffffffffffffffffff1663ca5eb5e1826040518263ffffffff1660e01b81526004016200024191906200083f565b600060405180830381600087803b1580156200025c57600080fd5b505af115801562000271573d6000803e3d6000fd5b505050505050505062000289620004c960201b60201c565b60ff168360ff161015620002c9576040517f1e9714b000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b620002d9620004c960201b60201c565b83620002e6919062000898565b600a620002f4919062000a32565b60a0818152505050505081600890816200030f919062000cf3565b50806009908162000321919062000cf3565b50505050505050506200035a732ffbab7b2c0bce0668c86164f7a25d018b6239206a1a784379d99db420000000620004d260201b60201c565b6200038b73fe9bbbb444af5eac7c5cabb8cc597f068e0909456a1306707f94695977000000620004d260201b60201c565b620003bc732b357e26a3e4a39a0e7fce274061923a33a1259f6a18d0bf423c03d8de000000620004d260201b60201c565b620003ed73b491b6f43ca6d58d2cb894ede9beb07ba33a207a6a0c685fa11e01ec6f000000620004d260201b60201c565b5062000e80565b600033905090565b60006012905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006006905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620005475760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016200053e91906200083f565b60405180910390fd5b6200055b600083836200055f60201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620005b5578060076000828254620005a8919062000dda565b925050819055506200068d565b6000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101562000645578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016200063c9392919062000e26565b60405180910390fd5b818103600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620006d8578060076000828254039250508190555062000726565b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000785919062000e63565b60405180910390a3505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620007c48262000797565b9050919050565b620007d681620007b7565b8114620007e257600080fd5b50565b600081519050620007f681620007cb565b92915050565b60006020828403121562000815576200081462000792565b5b60006200082584828501620007e5565b91505092915050565b6200083981620007b7565b82525050565b60006020820190506200085660008301846200082e565b92915050565b600060ff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620008a5826200085c565b9150620008b2836200085c565b9250828203905060ff811115620008ce57620008cd62000869565b5b92915050565b60008160011c9050919050565b6000808291508390505b600185111562000933578086048111156200090b576200090a62000869565b5b60018516156200091b5780820291505b80810290506200092b85620008d4565b9450620008eb565b94509492505050565b6000826200094e576001905062000a21565b816200095e576000905062000a21565b81600181146200097757600281146200098257620009b8565b600191505062000a21565b60ff84111562000997576200099662000869565b5b8360020a915084821115620009b157620009b062000869565b5b5062000a21565b5060208310610133831016604e8410600b8410161715620009f25782820a905083811115620009ec57620009eb62000869565b5b62000a21565b62000a018484846001620008e1565b9250905081840481111562000a1b5762000a1a62000869565b5b81810290505b9392505050565b6000819050919050565b600062000a3f8262000a28565b915062000a4c836200085c565b925062000a7b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200093c565b905092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000b0557607f821691505b60208210810362000b1b5762000b1a62000abd565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830262000b857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000b46565b62000b91868362000b46565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000bd462000bce62000bc88462000a28565b62000ba9565b62000a28565b9050919050565b6000819050919050565b62000bf08362000bb3565b62000c0862000bff8262000bdb565b84845462000b53565b825550505050565b600090565b62000c1f62000c10565b62000c2c81848462000be5565b505050565b5b8181101562000c545762000c4860008262000c15565b60018101905062000c32565b5050565b601f82111562000ca35762000c6d8162000b21565b62000c788462000b36565b8101602085101562000c88578190505b62000ca062000c978562000b36565b83018262000c31565b50505b505050565b600082821c905092915050565b600062000cc86000198460080262000ca8565b1980831691505092915050565b600062000ce3838362000cb5565b9150826002028217905092915050565b62000cfe8262000a83565b67ffffffffffffffff81111562000d1a5762000d1962000a8e565b5b62000d26825462000aec565b62000d3382828562000c58565b600060209050601f83116001811462000d6b576000841562000d56578287015190505b62000d62858262000cd5565b86555062000dd2565b601f19841662000d7b8662000b21565b60005b8281101562000da55784890151825560018201915060208501945060208101905062000d7e565b8683101562000dc5578489015162000dc1601f89168262000cb5565b8355505b6001600288020188555050505b505050505050565b600062000de78262000a28565b915062000df48362000a28565b925082820190508082111562000e0f5762000e0e62000869565b5b92915050565b62000e208162000a28565b82525050565b600060608201905062000e3d60008301866200082e565b62000e4c602083018562000e15565b62000e5b604083018462000e15565b949350505050565b600060208201905062000e7a600083018462000e15565b92915050565b60805160a05161567062000ef3600039600081816113900152818161299f015281816129c001528181612a6a0152612de8015260008181610dab015281816111a801528181611a8101528181611f00015281816123cf015281816126c601528181612eda0152612fd501526156706000f3fe6080604052600436106102c95760003560e01c80637d25a05e11610175578063b98bd070116100dc578063d045a0dc11610095578063dd62ed3e1161006f578063dd62ed3e14610b0b578063f2fde38b14610b48578063fc0c546a14610b71578063ff7bd03d14610b9c576102c9565b8063d045a0dc14610a9b578063d3f189bd14610ab7578063d424388514610ae2576102c9565b8063b98bd07014610982578063bb0b6a53146109ab578063bc70b354146109e8578063bd815db014610a25578063c7c7f5b314610a41578063ca5eb5e114610a72576102c9565b80639f68b9641161012e5780639f68b9641461086e578063a9059cbb14610899578063afd3bcb7146108d6578063b731ea0a14610901578063b926e0391461092c578063b92d0eff14610957576102c9565b80637d25a05e1461075a578063857749b0146107975780638c28055f146107c25780638da5cb5b146107ed57806395d89b4114610818578063963efcaa14610843576102c9565b8063313ce5671161023457806352ae2879116101ed5780635e280f11116101c75780635e280f11146106b25780636fc1b31e146106dd57806370a0823114610706578063715018a614610743576102c9565b806352ae28791461060d5780635535d461146106385780635a0dfe4d14610675576102c9565b8063313ce567146104fd57806332cb6b0c146105285780633400288b146105535780633b6f743b1461057c57806342966c68146105b957806347b5dd54146105e2576102c9565b8063156a0d0f11610286578063156a0d0f146103e757806317442b701461041357806318160ddd1461043f5780631f5e13341461046a57806323b872dd146104955780632c15d997146104d2576102c9565b806306fdde03146102ce578063095ea7b3146102f95780630d35b41514610336578063111ecdad1461037557806313137d65146103a0578063134d4f25146103bc575b600080fd5b3480156102da57600080fd5b506102e3610bd9565b6040516102f091906134d7565b60405180910390f35b34801561030557600080fd5b50610320600480360381019061031b91906135a1565b610c6b565b60405161032d91906135fc565b60405180910390f35b34801561034257600080fd5b5061035d6004803603810190610358919061363b565b610c8e565b60405161036c93929190613853565b60405180910390f35b34801561038157600080fd5b5061038a610d6c565b60405161039791906138a0565b60405180910390f35b6103ba60048036038101906103b59190613975565b610d92565b005b3480156103c857600080fd5b506103d1610eb4565b6040516103de9190613a4e565b60405180910390f35b3480156103f357600080fd5b506103fc610eb9565b60405161040a929190613ac7565b60405180910390f35b34801561041f57600080fd5b50610428610ee7565b604051610436929190613af0565b60405180910390f35b34801561044b57600080fd5b50610454610ef5565b6040516104619190613b28565b60405180910390f35b34801561047657600080fd5b5061047f610eff565b60405161048c9190613a4e565b60405180910390f35b3480156104a157600080fd5b506104bc60048036038101906104b79190613b43565b610f04565b6040516104c991906135fc565b60405180910390f35b3480156104de57600080fd5b506104e7610f33565b6040516104f491906138a0565b60405180910390f35b34801561050957600080fd5b50610512610f4b565b60405161051f9190613bb2565b60405180910390f35b34801561053457600080fd5b5061053d610f54565b60405161054a9190613b28565b60405180910390f35b34801561055f57600080fd5b5061057a60048036038101906105759190613c09565b610f63565b005b34801561058857600080fd5b506105a3600480360381019061059e9190613c75565b610fcc565b6040516105b09190613d00565b60405180910390f35b3480156105c557600080fd5b506105e060048036038101906105db9190613d1b565b611038565b005b3480156105ee57600080fd5b506105f76110bf565b6040516106049190613b28565b60405180910390f35b34801561061957600080fd5b506106226110c5565b60405161062f91906138a0565b60405180910390f35b34801561064457600080fd5b5061065f600480360381019061065a9190613d74565b6110cd565b60405161066c9190613e09565b60405180910390f35b34801561068157600080fd5b5061069c60048036038101906106979190613c09565b61117a565b6040516106a991906135fc565b60405180910390f35b3480156106be57600080fd5b506106c76111a6565b6040516106d49190613e8a565b60405180910390f35b3480156106e957600080fd5b5061070460048036038101906106ff9190613ea5565b6111ca565b005b34801561071257600080fd5b5061072d60048036038101906107289190613ea5565b61124d565b60405161073a9190613b28565b60405180910390f35b34801561074f57600080fd5b50610758611296565b005b34801561076657600080fd5b50610781600480360381019061077c9190613c09565b6112aa565b60405161078e9190613ed2565b60405180910390f35b3480156107a357600080fd5b506107ac6112b2565b6040516107b99190613bb2565b60405180910390f35b3480156107ce57600080fd5b506107d76112bb565b6040516107e491906138a0565b60405180910390f35b3480156107f957600080fd5b506108026112d3565b60405161080f91906138a0565b60405180910390f35b34801561082457600080fd5b5061082d6112fc565b60405161083a91906134d7565b60405180910390f35b34801561084f57600080fd5b5061085861138e565b6040516108659190613b28565b60405180910390f35b34801561087a57600080fd5b506108836113b2565b60405161089091906135fc565b60405180910390f35b3480156108a557600080fd5b506108c060048036038101906108bb91906135a1565b6113b7565b6040516108cd91906135fc565b60405180910390f35b3480156108e257600080fd5b506108eb6113da565b6040516108f89190613b28565b60405180910390f35b34801561090d57600080fd5b506109166113e9565b60405161092391906138a0565b60405180910390f35b34801561093857600080fd5b5061094161140f565b60405161094e91906138a0565b60405180910390f35b34801561096357600080fd5b5061096c611427565b60405161097991906138a0565b60405180910390f35b34801561098e57600080fd5b506109a960048036038101906109a49190613f43565b61142f565b005b3480156109b757600080fd5b506109d260048036038101906109cd9190613f90565b6115b2565b6040516109df9190613fcc565b60405180910390f35b3480156109f457600080fd5b50610a0f6004803603810190610a0a9190613fe7565b6115ca565b604051610a1c9190613e09565b60405180910390f35b610a3f6004803603810190610a3a91906140b1565b611794565b005b610a5b6004803603810190610a56919061411d565b61196d565b604051610a6992919061421b565b60405180910390f35b348015610a7e57600080fd5b50610a996004803603810190610a949190613ea5565b611a77565b005b610ab56004803603810190610ab09190613975565b611b0d565b005b348015610ac357600080fd5b50610acc611b8a565b604051610ad991906138a0565b60405180910390f35b348015610aee57600080fd5b50610b096004803603810190610b049190613ea5565b611ba2565b005b348015610b1757600080fd5b50610b326004803603810190610b2d9190614244565b611c25565b604051610b3f9190613b28565b60405180910390f35b348015610b5457600080fd5b50610b6f6004803603810190610b6a9190613ea5565b611cac565b005b348015610b7d57600080fd5b50610b86611d32565b604051610b9391906138a0565b60405180910390f35b348015610ba857600080fd5b50610bc36004803603810190610bbe9190614284565b611d3a565b604051610bd091906135fc565b60405180910390f35b606060088054610be8906142e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610c14906142e0565b8015610c615780601f10610c3657610100808354040283529160200191610c61565b820191906000526020600020905b815481529060010190602001808311610c4457829003601f168201915b5050505050905090565b600080610c76611d7b565b9050610c83818585611d83565b600191505092915050565b610c966133ab565b6060610ca06133c5565b60008067ffffffffffffffff801690506040518060400160405280838152602001828152509450600067ffffffffffffffff811115610ce257610ce1614311565b5b604051908082528060200260200182016040528015610d1b57816020015b610d086133df565b815260200190600190039081610d005790505b509350600080610d46886040013589606001358a6000016020810190610d419190613f90565b611d95565b915091506040518060400160405280838152602001828152509450505050509193909250565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610e2257336040517f91ac5e4f000000000000000000000000000000000000000000000000000000008152600401610e1991906138a0565b60405180910390fd5b8660200135610e42886000016020810190610e3d9190613f90565b611df5565b14610e9c57866000016020810190610e5a9190613f90565b87602001356040517fc26bebcc000000000000000000000000000000000000000000000000000000008152600401610e9392919061434f565b60405180910390fd5b610eab87878787878787611e6a565b50505050505050565b600281565b6000807f02e49c2c000000000000000000000000000000000000000000000000000000006001915091509091565b600080600180915091509091565b6000600754905090565b600181565b600080610f0f611d7b565b9050610f1c858285612000565b610f27858585612094565b60019150509392505050565b732ffbab7b2c0bce0668c86164f7a25d018b62392081565b60006012905090565b6a52b7d2dcc80cd2e400000081565b610f6b612188565b80600160008463ffffffff1663ffffffff168152602001908152602001600020819055507f238399d427b947898edb290f5ff0f9109849b1c3ba196a42e35f00c50a54b98b8282604051610fc092919061434f565b60405180910390a15050565b610fd46133f9565b6000610ffb84604001358560600135866000016020810190610ff69190613f90565b611d95565b91505060008061100b868461220f565b9150915061102d8660000160208101906110259190613f90565b8383886123c5565b935050505092915050565b611040612188565b6a295be96e6406697200000081600a5461105a91906143a7565b1115611092576040517f1436e24800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600a60008282546110a491906143a7565b925050819055506110bc6110b6611d7b565b826124a8565b50565b600a5481565b600030905090565b60036020528160005260406000206020528060005260406000206000915091505080546110f9906142e0565b80601f0160208091040260200160405190810160405280929190818152602001828054611125906142e0565b80156111725780601f1061114757610100808354040283529160200191611172565b820191906000526020600020905b81548152906001019060200180831161115557829003601f168201915b505050505081565b600081600160008563ffffffff1663ffffffff1681526020019081526020016000205414905092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6111d2612188565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff0be4f1e87349231d80c36b33f9e8639658eeaf474014dee15a3e6a4d44141978160405161124291906138a0565b60405180910390a150565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61129e612188565b6112a8600061252a565b565b600092915050565b60006006905090565b732b357e26a3e4a39a0e7fce274061923a33a1259f81565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606009805461130b906142e0565b80601f0160208091040260200160405190810160405280929190818152602001828054611337906142e0565b80156113845780601f1061135957610100808354040283529160200191611384565b820191906000526020600020905b81548152906001019060200180831161136757829003601f168201915b5050505050905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b600090565b6000806113c2611d7b565b90506113cf818585612094565b600191505092915050565b6a295be96e6406697200000081565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b73fe9bbbb444af5eac7c5cabb8cc597f068e09094581565b600030905090565b611437612188565b60005b828290508110156115745761148183838381811061145b5761145a6143db565b5b905060200281019061146d9190614419565b806040019061147c9190614441565b6125ee565b828282818110611494576114936143db565b5b90506020028101906114a69190614419565b80604001906114b59190614441565b600360008686868181106114cc576114cb6143db565b5b90506020028101906114de9190614419565b60000160208101906114f09190613f90565b63ffffffff1663ffffffff168152602001908152602001600020600086868681811061151f5761151e6143db565b5b90506020028101906115319190614419565b602001602081019061154391906144a4565b61ffff1661ffff168152602001908152602001600020918261156692919061467e565b50808060010191505061143a565b507fbe4864a8e820971c0247f5992e2da559595f7bf076a21cb5928d443d2a13b67482826040516115a692919061499b565b60405180910390a15050565b60016020528060005260406000206000915090505481565b60606000600360008763ffffffff1663ffffffff16815260200190815260200160002060008661ffff1661ffff1681526020019081526020016000208054611611906142e0565b80601f016020809104026020016040519081016040528092919081815260200182805461163d906142e0565b801561168a5780601f1061165f5761010080835404028352916020019161168a565b820191906000526020600020905b81548152906001019060200180831161166d57829003601f168201915b5050505050905060008151036116e75783838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091505061178c565b600084849050036116fb578091505061178c565b6002848490501061174d5761171084846125ee565b8084846002908092611724939291906149c9565b60405160200161173693929190614a65565b60405160208183030381529060405291505061178c565b83836040517f9a6d49cd000000000000000000000000000000000000000000000000000000008152600401611783929190614ab8565b60405180910390fd5b949350505050565b60005b828290508110156118bc57368383838181106117b6576117b56143db565b5b90506020028101906117c89190614adc565b90506117f08160000160000160208101906117e39190613f90565b826000016020013561117a565b6117fa57506118af565b3073ffffffffffffffffffffffffffffffffffffffff1663d045a0dc8260c00135836000018460a00135858061010001906118359190614441565b8760e00160208101906118489190613ea5565b888061012001906118599190614441565b6040518963ffffffff1660e01b815260040161187b9796959493929190614bb9565b6000604051808303818588803b15801561189457600080fd5b505af11580156118a8573d6000803e3d6000fd5b5050505050505b8080600101915050611797565b503373ffffffffffffffffffffffffffffffffffffffff16638e9e70996040518163ffffffff1660e01b8152600401600060405180830381865afa158015611908573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906119319190614d10565b6040517f8351eea70000000000000000000000000000000000000000000000000000000081526004016119649190613e09565b60405180910390fd5b611975613413565b61197d6133c5565b6000806119a5876040013588606001358960000160208101906119a09190613f90565b612668565b915091506000806119b6898461220f565b915091506119e98960000160208101906119d09190613f90565b83838b8036038101906119e39190614dae565b8b612690565b955060405180604001604052808581526020018481525094503373ffffffffffffffffffffffffffffffffffffffff1686600001517f85496b760a4b7f8d66384b9df21b381f5d1b1e79f229a47aaf4c232edc2fe59a8b6000016020810190611a529190613f90565b8787604051611a6393929190614ddb565b60405180910390a350505050935093915050565b611a7f612188565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ca5eb5e1826040518263ffffffff1660e01b8152600401611ad891906138a0565b600060405180830381600087803b158015611af257600080fd5b505af1158015611b06573d6000803e3d6000fd5b5050505050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611b72576040517f14d4a4e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b81878787878787876127ac565b50505050505050565b73b491b6f43ca6d58d2cb894ede9beb07ba33a207a81565b611baa612188565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd48d879cef83a1c0bdda516f27b13ddb1b3f8bbac1c9e1511bb2a659c242776081604051611c1a91906138a0565b60405180910390a150565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b611cb4612188565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611d265760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401611d1d91906138a0565b60405180910390fd5b611d2f8161252a565b50565b600030905090565b6000816020013560016000846000016020810190611d589190613f90565b63ffffffff1663ffffffff16815260200190815260200160002054149050919050565b600033905090565b611d9083838360016127c4565b505050565b600080611da18561299b565b915081905083811015611ded5780846040517f71c4efed000000000000000000000000000000000000000000000000000000008152600401611de4929190614e12565b60405180910390fd5b935093915050565b600080600160008463ffffffff1663ffffffff1681526020019081526020016000205490506000801b8103611e6157826040517ff6ff4fb7000000000000000000000000000000000000000000000000000000008152600401611e589190614e3b565b60405180910390fd5b80915050919050565b6000611e7e611e7987876129fb565b612a27565b90506000611eb082611e98611e938a8a612a34565b612a66565b8b6000016020810190611eab9190613f90565b612aa5565b9050611ebc8787612b13565b15611f92576000611efc8a6040016020810190611ed99190614e56565b8b6000016020810190611eec9190613f90565b84611ef78c8c612b27565b612b8a565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637cb59012848b6000856040518563ffffffff1660e01b8152600401611f5e9493929190614ebe565b600060405180830381600087803b158015611f7857600080fd5b505af1158015611f8c573d6000803e3d6000fd5b50505050505b8173ffffffffffffffffffffffffffffffffffffffff16887fefed6d3500546b29533b128a29e3a94d70788727f0507505ac12eaf2e578fd9c8b6000016020810190611fde9190613f90565b84604051611fed929190614f0a565b60405180910390a3505050505050505050565b600061200c8484611c25565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461208e578181101561207e578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161207593929190614f33565b60405180910390fd5b61208d848484840360006127c4565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036121065760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016120fd91906138a0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036121785760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161216f91906138a0565b60405180910390fd5b612183838383612bbc565b505050565b612190611d7b565b73ffffffffffffffffffffffffffffffffffffffff166121ae6112d3565b73ffffffffffffffffffffffffffffffffffffffff161461220d576121d1611d7b565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161220491906138a0565b60405180910390fd5b565b606080600061227d856020013561222586612de4565b878060a001906122359190614441565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612e19565b8092508194505050600081612293576001612296565b60025b90506122c48660000160208101906122ae9190613f90565b828880608001906122bf9190614441565b6115ca565b9250600073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146123bc57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663043a78eb85856040518363ffffffff1660e01b8152600401612379929190614f6a565b602060405180830381865afa158015612396573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ba9190614fb6565b505b50509250929050565b6123cd6133f9565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ddc28c586040518060a001604052808863ffffffff16815260200161242989611df5565b8152602001878152602001868152602001851515815250306040518363ffffffff1660e01b815260040161245e9291906150a8565b6040805180830381865afa15801561247a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061249e919061513d565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361251a5760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161251191906138a0565b60405180910390fd5b61252682600083612bbc565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008282600090600292612604939291906149c9565b9061260f9190615196565b60f01c9050600361ffff168161ffff16146126635782826040517f9a6d49cd00000000000000000000000000000000000000000000000000000000815260040161265a929190614ab8565b60405180910390fd5b505050565b600080612676858585611d95565b809250819350505061268833836124a8565b935093915050565b612698613413565b60006126a78460000151612e88565b90506000846020015111156126c4576126c38460200151612ed6565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632637a450826040518060a001604052808b63ffffffff1681526020016127218c611df5565b81526020018a815260200189815260200160008960200151111515815250866040518463ffffffff1660e01b815260040161275d9291906150a8565b60806040518083038185885af115801561277b573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906127a09190615283565b91505095945050505050565b6127bb87878787878787611e6a565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036128365760006040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161282d91906138a0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036128a85760006040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161289f91906138a0565b60405180910390fd5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015612995578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161298c9190613b28565b60405180910390a35b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000836129ea91906152df565b6129f49190615310565b9050919050565b60008282600090602060ff1692612a14939291906149c9565b90612a1f9190615352565b905092915050565b60008160001c9050919050565b60008282602060ff1690602860ff1692612a50939291906149c9565b90612a5b91906153dd565b60c01c905092915050565b60007f00000000000000000000000000000000000000000000000000000000000000008267ffffffffffffffff16612a9e9190615310565b9050919050565b60006a52b7d2dcc80cd2e400000083612abc610ef5565b612ac691906143a7565b1115612afe576040517f8a164f6300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612b0a84846000613020565b90509392505050565b6000602860ff168383905011905092915050565b60608282602860ff16908092612b3f939291906149c9565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905092915050565b606084848484604051602001612ba394939291906154c9565b6040516020818303038152906040529050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612c0e578060076000828254612c0291906143a7565b92505081905550612ce3565b6000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015612c9b578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401612c9293929190614f33565b60405180910390fd5b818103600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612d2c5780600760008282540392505081905550612d7a565b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612dd79190613b28565b60405180910390a3505050565b60007f000000000000000000000000000000000000000000000000000000000000000082612e1291906152df565b9050919050565b6060600080835111905080612e4f578484604051602001612e3b929190615534565b604051602081830303815290604052612e7e565b8484612e5a33613036565b85604051602001612e6e9493929190615560565b6040516020818303038152906040525b9150935093915050565b6000813414612ece57346040517f9f704120000000000000000000000000000000000000000000000000000000008152600401612ec59190613b28565b60405180910390fd5b819050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4fe1d946040518163ffffffff1660e01b8152600401602060405180830381865afa158015612f43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f6791906155bf565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612fcf576040517f5373352a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61301c337f0000000000000000000000000000000000000000000000000000000000000000848473ffffffffffffffffffffffffffffffffffffffff16613059909392919063ffffffff16565b5050565b600061302c84846130db565b8290509392505050565b60008173ffffffffffffffffffffffffffffffffffffffff1660001b9050919050565b6130d5848573ffffffffffffffffffffffffffffffffffffffff166323b872dd86868660405160240161308e939291906155ec565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061315d565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361314d5760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161314491906138a0565b60405180910390fd5b61315960008383612bbc565b5050565b6000613188828473ffffffffffffffffffffffffffffffffffffffff166131f490919063ffffffff16565b905060008151141580156131ad5750808060200190518101906131ab9190614fb6565b155b156131ef57826040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016131e691906138a0565b60405180910390fd5b505050565b60606132028383600061320a565b905092915050565b60608147101561325157306040517fcd78605900000000000000000000000000000000000000000000000000000000815260040161324891906138a0565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16848660405161327a9190615623565b60006040518083038185875af1925050503d80600081146132b7576040519150601f19603f3d011682016040523d82523d6000602084013e6132bc565b606091505b50915091506132cc8683836132d7565b925050509392505050565b6060826132ec576132e782613366565b61335e565b60008251148015613314575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561335657836040517f9996b31500000000000000000000000000000000000000000000000000000000815260040161334d91906138a0565b60405180910390fd5b81905061335f565b5b9392505050565b6000815111156133795780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001606081525090565b604051806040016040528060008152602001600081525090565b604051806060016040528060008019168152602001600067ffffffffffffffff1681526020016134416133f9565b81525090565b600081519050919050565b600082825260208201905092915050565b60005b83811015613481578082015181840152602081019050613466565b60008484015250505050565b6000601f19601f8301169050919050565b60006134a982613447565b6134b38185613452565b93506134c3818560208601613463565b6134cc8161348d565b840191505092915050565b600060208201905081810360008301526134f1818461349e565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006135388261350d565b9050919050565b6135488161352d565b811461355357600080fd5b50565b6000813590506135658161353f565b92915050565b6000819050919050565b61357e8161356b565b811461358957600080fd5b50565b60008135905061359b81613575565b92915050565b600080604083850312156135b8576135b7613503565b5b60006135c685828601613556565b92505060206135d78582860161358c565b9150509250929050565b60008115159050919050565b6135f6816135e1565b82525050565b600060208201905061361160008301846135ed565b92915050565b600080fd5b600060e0828403121561363257613631613617565b5b81905092915050565b60006020828403121561365157613650613503565b5b600082013567ffffffffffffffff81111561366f5761366e613508565b5b61367b8482850161361c565b91505092915050565b61368d8161356b565b82525050565b6040820160008201516136a96000850182613684565b5060208201516136bc6020850182613684565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b613701816136ee565b82525050565b600082825260208201905092915050565b600061372382613447565b61372d8185613707565b935061373d818560208601613463565b6137468161348d565b840191505092915050565b600060408301600083015161376960008601826136f8565b50602083015184820360208601526137818282613718565b9150508091505092915050565b600061379a8383613751565b905092915050565b6000602082019050919050565b60006137ba826136c2565b6137c481856136cd565b9350836020820285016137d6856136de565b8060005b8581101561381257848403895281516137f3858261378e565b94506137fe836137a2565b925060208a019950506001810190506137da565b50829750879550505050505092915050565b60408201600082015161383a6000850182613684565b50602082015161384d6020850182613684565b50505050565b600060a0820190506138686000830186613693565b818103604083015261387a81856137af565b90506138896060830184613824565b949350505050565b61389a8161352d565b82525050565b60006020820190506138b56000830184613891565b92915050565b6000606082840312156138d1576138d0613617565b5b81905092915050565b6000819050919050565b6138ed816138da565b81146138f857600080fd5b50565b60008135905061390a816138e4565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261393557613934613910565b5b8235905067ffffffffffffffff81111561395257613951613915565b5b60208301915083600182028301111561396e5761396d61391a565b5b9250929050565b600080600080600080600060e0888a03121561399457613993613503565b5b60006139a28a828b016138bb565b97505060606139b38a828b016138fb565b965050608088013567ffffffffffffffff8111156139d4576139d3613508565b5b6139e08a828b0161391f565b955095505060a06139f38a828b01613556565b93505060c088013567ffffffffffffffff811115613a1457613a13613508565b5b613a208a828b0161391f565b925092505092959891949750929550565b600061ffff82169050919050565b613a4881613a31565b82525050565b6000602082019050613a636000830184613a3f565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613a9e81613a69565b82525050565b600067ffffffffffffffff82169050919050565b613ac181613aa4565b82525050565b6000604082019050613adc6000830185613a95565b613ae96020830184613ab8565b9392505050565b6000604082019050613b056000830185613ab8565b613b126020830184613ab8565b9392505050565b613b228161356b565b82525050565b6000602082019050613b3d6000830184613b19565b92915050565b600080600060608486031215613b5c57613b5b613503565b5b6000613b6a86828701613556565b9350506020613b7b86828701613556565b9250506040613b8c8682870161358c565b9150509250925092565b600060ff82169050919050565b613bac81613b96565b82525050565b6000602082019050613bc76000830184613ba3565b92915050565b600063ffffffff82169050919050565b613be681613bcd565b8114613bf157600080fd5b50565b600081359050613c0381613bdd565b92915050565b60008060408385031215613c2057613c1f613503565b5b6000613c2e85828601613bf4565b9250506020613c3f858286016138fb565b9150509250929050565b613c52816135e1565b8114613c5d57600080fd5b50565b600081359050613c6f81613c49565b92915050565b60008060408385031215613c8c57613c8b613503565b5b600083013567ffffffffffffffff811115613caa57613ca9613508565b5b613cb68582860161361c565b9250506020613cc785828601613c60565b9150509250929050565b604082016000820151613ce76000850182613684565b506020820151613cfa6020850182613684565b50505050565b6000604082019050613d156000830184613cd1565b92915050565b600060208284031215613d3157613d30613503565b5b6000613d3f8482850161358c565b91505092915050565b613d5181613a31565b8114613d5c57600080fd5b50565b600081359050613d6e81613d48565b92915050565b60008060408385031215613d8b57613d8a613503565b5b6000613d9985828601613bf4565b9250506020613daa85828601613d5f565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000613ddb82613db4565b613de58185613dbf565b9350613df5818560208601613463565b613dfe8161348d565b840191505092915050565b60006020820190508181036000830152613e238184613dd0565b905092915050565b6000819050919050565b6000613e50613e4b613e468461350d565b613e2b565b61350d565b9050919050565b6000613e6282613e35565b9050919050565b6000613e7482613e57565b9050919050565b613e8481613e69565b82525050565b6000602082019050613e9f6000830184613e7b565b92915050565b600060208284031215613ebb57613eba613503565b5b6000613ec984828501613556565b91505092915050565b6000602082019050613ee76000830184613ab8565b92915050565b60008083601f840112613f0357613f02613910565b5b8235905067ffffffffffffffff811115613f2057613f1f613915565b5b602083019150836020820283011115613f3c57613f3b61391a565b5b9250929050565b60008060208385031215613f5a57613f59613503565b5b600083013567ffffffffffffffff811115613f7857613f77613508565b5b613f8485828601613eed565b92509250509250929050565b600060208284031215613fa657613fa5613503565b5b6000613fb484828501613bf4565b91505092915050565b613fc6816138da565b82525050565b6000602082019050613fe16000830184613fbd565b92915050565b6000806000806060858703121561400157614000613503565b5b600061400f87828801613bf4565b945050602061402087828801613d5f565b935050604085013567ffffffffffffffff81111561404157614040613508565b5b61404d8782880161391f565b925092505092959194509250565b60008083601f84011261407157614070613910565b5b8235905067ffffffffffffffff81111561408e5761408d613915565b5b6020830191508360208202830111156140aa576140a961391a565b5b9250929050565b600080602083850312156140c8576140c7613503565b5b600083013567ffffffffffffffff8111156140e6576140e5613508565b5b6140f28582860161405b565b92509250509250929050565b60006040828403121561411457614113613617565b5b81905092915050565b60008060006080848603121561413657614135613503565b5b600084013567ffffffffffffffff81111561415457614153613508565b5b6141608682870161361c565b9350506020614171868287016140fe565b925050606061418286828701613556565b9150509250925092565b614195816138da565b82525050565b6141a481613aa4565b82525050565b6040820160008201516141c06000850182613684565b5060208201516141d36020850182613684565b50505050565b6080820160008201516141ef600085018261418c565b506020820151614202602085018261419b565b50604082015161421560408501826141aa565b50505050565b600060c08201905061423060008301856141d9565b61423d6080830184613824565b9392505050565b6000806040838503121561425b5761425a613503565b5b600061426985828601613556565b925050602061427a85828601613556565b9150509250929050565b60006060828403121561429a57614299613503565b5b60006142a8848285016138bb565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806142f857607f821691505b60208210810361430b5761430a6142b1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61434981613bcd565b82525050565b60006040820190506143646000830185614340565b6143716020830184613fbd565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006143b28261356b565b91506143bd8361356b565b92508282019050808211156143d5576143d4614378565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b6000823560016060038336030381126144355761443461440a565b5b80830191505092915050565b6000808335600160200384360303811261445e5761445d61440a565b5b80840192508235915067ffffffffffffffff8211156144805761447f61440f565b5b60208301925060018202360383131561449c5761449b614414565b5b509250929050565b6000602082840312156144ba576144b9613503565b5b60006144c884828501613d5f565b91505092915050565b600082905092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261453e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614501565b6145488683614501565b95508019841693508086168417925050509392505050565b600061457b6145766145718461356b565b613e2b565b61356b565b9050919050565b6000819050919050565b61459583614560565b6145a96145a182614582565b84845461450e565b825550505050565b600090565b6145be6145b1565b6145c981848461458c565b505050565b5b818110156145ed576145e26000826145b6565b6001810190506145cf565b5050565b601f82111561463257614603816144dc565b61460c846144f1565b8101602085101561461b578190505b61462f614627856144f1565b8301826145ce565b50505b505050565b600082821c905092915050565b600061465560001984600802614637565b1980831691505092915050565b600061466e8383614644565b9150826002028217905092915050565b61468883836144d1565b67ffffffffffffffff8111156146a1576146a0614311565b5b6146ab82546142e0565b6146b68282856145f1565b6000601f8311600181146146e557600084156146d3578287013590505b6146dd8582614662565b865550614745565b601f1984166146f3866144dc565b60005b8281101561471b578489013582556001820191506020850194506020810190506146f6565b868310156147385784890135614734601f891682614644565b8355505b6001600288020188555050505b50505050505050565b600082825260208201905092915050565b6000819050919050565b60006147786020840184613bf4565b905092915050565b61478981613bcd565b82525050565b600061479e6020840184613d5f565b905092915050565b6147af81613a31565b82525050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126147e1576147e06147bf565b5b83810192508235915060208301925067ffffffffffffffff821115614809576148086147b5565b5b60018202360383131561481f5761481e6147ba565b5b509250929050565b600082825260208201905092915050565b82818337600083830152505050565b60006148538385614827565b9350614860838584614838565b6148698361348d565b840190509392505050565b6000606083016148876000840184614769565b6148946000860182614780565b506148a2602084018461478f565b6148af60208601826147a6565b506148bd60408401846147c4565b85830360408701526148d0838284614847565b925050508091505092915050565b60006148ea8383614874565b905092915050565b60008235600160600383360303811261490e5761490d6147bf565b5b82810191505092915050565b6000602082019050919050565b6000614933838561474e565b9350836020840285016149458461475f565b8060005b8781101561498957848403895261496082846148f2565b61496a85826148de565b94506149758361491a565b925060208a01995050600181019050614949565b50829750879450505050509392505050565b600060208201905081810360008301526149b6818486614927565b90509392505050565b600080fd5b600080fd5b600080858511156149dd576149dc6149bf565b5b838611156149ee576149ed6149c4565b5b6001850283019150848603905094509492505050565b600081905092915050565b6000614a1a82613db4565b614a248185614a04565b9350614a34818560208601613463565b80840191505092915050565b6000614a4c8385614a04565b9350614a59838584614838565b82840190509392505050565b6000614a718286614a0f565b9150614a7e828486614a40565b9150819050949350505050565b6000614a978385613dbf565b9350614aa4838584614838565b614aad8361348d565b840190509392505050565b60006020820190508181036000830152614ad3818486614a8b565b90509392505050565b60008235600161014003833603038112614af957614af861440a565b5b80830191505092915050565b6000614b1460208401846138fb565b905092915050565b614b2581613aa4565b8114614b3057600080fd5b50565b600081359050614b4281614b1c565b92915050565b6000614b576020840184614b33565b905092915050565b60608201614b706000830183614769565b614b7d6000850182614780565b50614b8b6020830183614b05565b614b98602085018261418c565b50614ba66040830183614b48565b614bb3604085018261419b565b50505050565b600060e082019050614bce600083018a614b5f565b614bdb6060830189613fbd565b8181036080830152614bee818789614a8b565b9050614bfd60a0830186613891565b81810360c0830152614c10818486614a8b565b905098975050505050505050565b600080fd5b614c2c8261348d565b810181811067ffffffffffffffff82111715614c4b57614c4a614311565b5b80604052505050565b6000614c5e6134f9565b9050614c6a8282614c23565b919050565b600067ffffffffffffffff821115614c8a57614c89614311565b5b614c938261348d565b9050602081019050919050565b6000614cb3614cae84614c6f565b614c54565b905082815260208101848484011115614ccf57614cce614c1e565b5b614cda848285613463565b509392505050565b600082601f830112614cf757614cf6613910565b5b8151614d07848260208601614ca0565b91505092915050565b600060208284031215614d2657614d25613503565b5b600082015167ffffffffffffffff811115614d4457614d43613508565b5b614d5084828501614ce2565b91505092915050565b600080fd5b600060408284031215614d7457614d73614d59565b5b614d7e6040614c54565b90506000614d8e8482850161358c565b6000830152506020614da28482850161358c565b60208301525092915050565b600060408284031215614dc457614dc3613503565b5b6000614dd284828501614d5e565b91505092915050565b6000606082019050614df06000830186614340565b614dfd6020830185613b19565b614e0a6040830184613b19565b949350505050565b6000604082019050614e276000830185613b19565b614e346020830184613b19565b9392505050565b6000602082019050614e506000830184614340565b92915050565b600060208284031215614e6c57614e6b613503565b5b6000614e7a84828501614b33565b91505092915050565b6000819050919050565b6000614ea8614ea3614e9e84614e83565b613e2b565b613a31565b9050919050565b614eb881614e8d565b82525050565b6000608082019050614ed36000830187613891565b614ee06020830186613fbd565b614eed6040830185614eaf565b8181036060830152614eff8184613dd0565b905095945050505050565b6000604082019050614f1f6000830185614340565b614f2c6020830184613b19565b9392505050565b6000606082019050614f486000830186613891565b614f556020830185613b19565b614f626040830184613b19565b949350505050565b60006040820190508181036000830152614f848185613dd0565b90508181036020830152614f988184613dd0565b90509392505050565b600081519050614fb081613c49565b92915050565b600060208284031215614fcc57614fcb613503565b5b6000614fda84828501614fa1565b91505092915050565b6000614fee82613db4565b614ff88185614827565b9350615008818560208601613463565b6150118161348d565b840191505092915050565b615025816135e1565b82525050565b600060a0830160008301516150436000860182614780565b506020830151615056602086018261418c565b506040830151848203604086015261506e8282614fe3565b915050606083015184820360608601526150888282614fe3565b915050608083015161509d608086018261501c565b508091505092915050565b600060408201905081810360008301526150c2818561502b565b90506150d16020830184613891565b9392505050565b6000815190506150e781613575565b92915050565b60006040828403121561510357615102614d59565b5b61510d6040614c54565b9050600061511d848285016150d8565b6000830152506020615131848285016150d8565b60208301525092915050565b60006040828403121561515357615152613503565b5b6000615161848285016150ed565b91505092915050565b60007fffff00000000000000000000000000000000000000000000000000000000000082169050919050565b60006151a283836144d1565b826151ad813561516a565b925060028210156151ed576151e87fffff00000000000000000000000000000000000000000000000000000000000083600203600802614501565b831692505b505092915050565b600081519050615204816138e4565b92915050565b60008151905061521981614b1c565b92915050565b60006080828403121561523557615234614d59565b5b61523f6060614c54565b9050600061524f848285016151f5565b60008301525060206152638482850161520a565b6020830152506040615277848285016150ed565b60408301525092915050565b60006080828403121561529957615298613503565b5b60006152a78482850161521f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006152ea8261356b565b91506152f58361356b565b925082615305576153046152b0565b5b828204905092915050565b600061531b8261356b565b91506153268361356b565b92508282026153348161356b565b9150828204841483151761534b5761534a614378565b5b5092915050565b600061535e83836144d1565b8261536981356138da565b925060208210156153a9576153a47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83602003600802614501565b831692505b505092915050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b60006153e983836144d1565b826153f481356153b1565b925060088210156154345761542f7fffffffffffffffff00000000000000000000000000000000000000000000000083600803600802614501565b831692505b505092915050565b60008160c01b9050919050565b60006154548261543c565b9050919050565b61546c61546782613aa4565b615449565b82525050565b60008160e01b9050919050565b600061548a82615472565b9050919050565b6154a261549d82613bcd565b61547f565b82525050565b6000819050919050565b6154c36154be8261356b565b6154a8565b82525050565b60006154d5828761545b565b6008820191506154e58286615491565b6004820191506154f582856154b2565b6020820191506155058284614a0f565b915081905095945050505050565b6000819050919050565b61552e615529826138da565b615513565b82525050565b6000615540828561551d565b602082019150615550828461545b565b6008820191508190509392505050565b600061556c828761551d565b60208201915061557c828661545b565b60088201915061558c828561551d565b60208201915061559c8284614a0f565b915081905095945050505050565b6000815190506155b98161353f565b92915050565b6000602082840312156155d5576155d4613503565b5b60006155e3848285016155aa565b91505092915050565b60006060820190506156016000830186613891565b61560e6020830185613891565b61561b6040830184613b19565b949350505050565b600061562f8284614a0f565b91508190509291505056fea2646970667358221220def9f7e5c94b5637c63af478ba283d93da4707acdbee4f10436c0b39763e222d64736f6c63430008180033",
  deployedBytecode:
    "0x6080604052600436106102c95760003560e01c80637d25a05e11610175578063b98bd070116100dc578063d045a0dc11610095578063dd62ed3e1161006f578063dd62ed3e14610b0b578063f2fde38b14610b48578063fc0c546a14610b71578063ff7bd03d14610b9c576102c9565b8063d045a0dc14610a9b578063d3f189bd14610ab7578063d424388514610ae2576102c9565b8063b98bd07014610982578063bb0b6a53146109ab578063bc70b354146109e8578063bd815db014610a25578063c7c7f5b314610a41578063ca5eb5e114610a72576102c9565b80639f68b9641161012e5780639f68b9641461086e578063a9059cbb14610899578063afd3bcb7146108d6578063b731ea0a14610901578063b926e0391461092c578063b92d0eff14610957576102c9565b80637d25a05e1461075a578063857749b0146107975780638c28055f146107c25780638da5cb5b146107ed57806395d89b4114610818578063963efcaa14610843576102c9565b8063313ce5671161023457806352ae2879116101ed5780635e280f11116101c75780635e280f11146106b25780636fc1b31e146106dd57806370a0823114610706578063715018a614610743576102c9565b806352ae28791461060d5780635535d461146106385780635a0dfe4d14610675576102c9565b8063313ce567146104fd57806332cb6b0c146105285780633400288b146105535780633b6f743b1461057c57806342966c68146105b957806347b5dd54146105e2576102c9565b8063156a0d0f11610286578063156a0d0f146103e757806317442b701461041357806318160ddd1461043f5780631f5e13341461046a57806323b872dd146104955780632c15d997146104d2576102c9565b806306fdde03146102ce578063095ea7b3146102f95780630d35b41514610336578063111ecdad1461037557806313137d65146103a0578063134d4f25146103bc575b600080fd5b3480156102da57600080fd5b506102e3610bd9565b6040516102f091906134d7565b60405180910390f35b34801561030557600080fd5b50610320600480360381019061031b91906135a1565b610c6b565b60405161032d91906135fc565b60405180910390f35b34801561034257600080fd5b5061035d6004803603810190610358919061363b565b610c8e565b60405161036c93929190613853565b60405180910390f35b34801561038157600080fd5b5061038a610d6c565b60405161039791906138a0565b60405180910390f35b6103ba60048036038101906103b59190613975565b610d92565b005b3480156103c857600080fd5b506103d1610eb4565b6040516103de9190613a4e565b60405180910390f35b3480156103f357600080fd5b506103fc610eb9565b60405161040a929190613ac7565b60405180910390f35b34801561041f57600080fd5b50610428610ee7565b604051610436929190613af0565b60405180910390f35b34801561044b57600080fd5b50610454610ef5565b6040516104619190613b28565b60405180910390f35b34801561047657600080fd5b5061047f610eff565b60405161048c9190613a4e565b60405180910390f35b3480156104a157600080fd5b506104bc60048036038101906104b79190613b43565b610f04565b6040516104c991906135fc565b60405180910390f35b3480156104de57600080fd5b506104e7610f33565b6040516104f491906138a0565b60405180910390f35b34801561050957600080fd5b50610512610f4b565b60405161051f9190613bb2565b60405180910390f35b34801561053457600080fd5b5061053d610f54565b60405161054a9190613b28565b60405180910390f35b34801561055f57600080fd5b5061057a60048036038101906105759190613c09565b610f63565b005b34801561058857600080fd5b506105a3600480360381019061059e9190613c75565b610fcc565b6040516105b09190613d00565b60405180910390f35b3480156105c557600080fd5b506105e060048036038101906105db9190613d1b565b611038565b005b3480156105ee57600080fd5b506105f76110bf565b6040516106049190613b28565b60405180910390f35b34801561061957600080fd5b506106226110c5565b60405161062f91906138a0565b60405180910390f35b34801561064457600080fd5b5061065f600480360381019061065a9190613d74565b6110cd565b60405161066c9190613e09565b60405180910390f35b34801561068157600080fd5b5061069c60048036038101906106979190613c09565b61117a565b6040516106a991906135fc565b60405180910390f35b3480156106be57600080fd5b506106c76111a6565b6040516106d49190613e8a565b60405180910390f35b3480156106e957600080fd5b5061070460048036038101906106ff9190613ea5565b6111ca565b005b34801561071257600080fd5b5061072d60048036038101906107289190613ea5565b61124d565b60405161073a9190613b28565b60405180910390f35b34801561074f57600080fd5b50610758611296565b005b34801561076657600080fd5b50610781600480360381019061077c9190613c09565b6112aa565b60405161078e9190613ed2565b60405180910390f35b3480156107a357600080fd5b506107ac6112b2565b6040516107b99190613bb2565b60405180910390f35b3480156107ce57600080fd5b506107d76112bb565b6040516107e491906138a0565b60405180910390f35b3480156107f957600080fd5b506108026112d3565b60405161080f91906138a0565b60405180910390f35b34801561082457600080fd5b5061082d6112fc565b60405161083a91906134d7565b60405180910390f35b34801561084f57600080fd5b5061085861138e565b6040516108659190613b28565b60405180910390f35b34801561087a57600080fd5b506108836113b2565b60405161089091906135fc565b60405180910390f35b3480156108a557600080fd5b506108c060048036038101906108bb91906135a1565b6113b7565b6040516108cd91906135fc565b60405180910390f35b3480156108e257600080fd5b506108eb6113da565b6040516108f89190613b28565b60405180910390f35b34801561090d57600080fd5b506109166113e9565b60405161092391906138a0565b60405180910390f35b34801561093857600080fd5b5061094161140f565b60405161094e91906138a0565b60405180910390f35b34801561096357600080fd5b5061096c611427565b60405161097991906138a0565b60405180910390f35b34801561098e57600080fd5b506109a960048036038101906109a49190613f43565b61142f565b005b3480156109b757600080fd5b506109d260048036038101906109cd9190613f90565b6115b2565b6040516109df9190613fcc565b60405180910390f35b3480156109f457600080fd5b50610a0f6004803603810190610a0a9190613fe7565b6115ca565b604051610a1c9190613e09565b60405180910390f35b610a3f6004803603810190610a3a91906140b1565b611794565b005b610a5b6004803603810190610a56919061411d565b61196d565b604051610a6992919061421b565b60405180910390f35b348015610a7e57600080fd5b50610a996004803603810190610a949190613ea5565b611a77565b005b610ab56004803603810190610ab09190613975565b611b0d565b005b348015610ac357600080fd5b50610acc611b8a565b604051610ad991906138a0565b60405180910390f35b348015610aee57600080fd5b50610b096004803603810190610b049190613ea5565b611ba2565b005b348015610b1757600080fd5b50610b326004803603810190610b2d9190614244565b611c25565b604051610b3f9190613b28565b60405180910390f35b348015610b5457600080fd5b50610b6f6004803603810190610b6a9190613ea5565b611cac565b005b348015610b7d57600080fd5b50610b86611d32565b604051610b9391906138a0565b60405180910390f35b348015610ba857600080fd5b50610bc36004803603810190610bbe9190614284565b611d3a565b604051610bd091906135fc565b60405180910390f35b606060088054610be8906142e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610c14906142e0565b8015610c615780601f10610c3657610100808354040283529160200191610c61565b820191906000526020600020905b815481529060010190602001808311610c4457829003601f168201915b5050505050905090565b600080610c76611d7b565b9050610c83818585611d83565b600191505092915050565b610c966133ab565b6060610ca06133c5565b60008067ffffffffffffffff801690506040518060400160405280838152602001828152509450600067ffffffffffffffff811115610ce257610ce1614311565b5b604051908082528060200260200182016040528015610d1b57816020015b610d086133df565b815260200190600190039081610d005790505b509350600080610d46886040013589606001358a6000016020810190610d419190613f90565b611d95565b915091506040518060400160405280838152602001828152509450505050509193909250565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610e2257336040517f91ac5e4f000000000000000000000000000000000000000000000000000000008152600401610e1991906138a0565b60405180910390fd5b8660200135610e42886000016020810190610e3d9190613f90565b611df5565b14610e9c57866000016020810190610e5a9190613f90565b87602001356040517fc26bebcc000000000000000000000000000000000000000000000000000000008152600401610e9392919061434f565b60405180910390fd5b610eab87878787878787611e6a565b50505050505050565b600281565b6000807f02e49c2c000000000000000000000000000000000000000000000000000000006001915091509091565b600080600180915091509091565b6000600754905090565b600181565b600080610f0f611d7b565b9050610f1c858285612000565b610f27858585612094565b60019150509392505050565b732ffbab7b2c0bce0668c86164f7a25d018b62392081565b60006012905090565b6a52b7d2dcc80cd2e400000081565b610f6b612188565b80600160008463ffffffff1663ffffffff168152602001908152602001600020819055507f238399d427b947898edb290f5ff0f9109849b1c3ba196a42e35f00c50a54b98b8282604051610fc092919061434f565b60405180910390a15050565b610fd46133f9565b6000610ffb84604001358560600135866000016020810190610ff69190613f90565b611d95565b91505060008061100b868461220f565b9150915061102d8660000160208101906110259190613f90565b8383886123c5565b935050505092915050565b611040612188565b6a295be96e6406697200000081600a5461105a91906143a7565b1115611092576040517f1436e24800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600a60008282546110a491906143a7565b925050819055506110bc6110b6611d7b565b826124a8565b50565b600a5481565b600030905090565b60036020528160005260406000206020528060005260406000206000915091505080546110f9906142e0565b80601f0160208091040260200160405190810160405280929190818152602001828054611125906142e0565b80156111725780601f1061114757610100808354040283529160200191611172565b820191906000526020600020905b81548152906001019060200180831161115557829003601f168201915b505050505081565b600081600160008563ffffffff1663ffffffff1681526020019081526020016000205414905092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6111d2612188565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff0be4f1e87349231d80c36b33f9e8639658eeaf474014dee15a3e6a4d44141978160405161124291906138a0565b60405180910390a150565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61129e612188565b6112a8600061252a565b565b600092915050565b60006006905090565b732b357e26a3e4a39a0e7fce274061923a33a1259f81565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606009805461130b906142e0565b80601f0160208091040260200160405190810160405280929190818152602001828054611337906142e0565b80156113845780601f1061135957610100808354040283529160200191611384565b820191906000526020600020905b81548152906001019060200180831161136757829003601f168201915b5050505050905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b600090565b6000806113c2611d7b565b90506113cf818585612094565b600191505092915050565b6a295be96e6406697200000081565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b73fe9bbbb444af5eac7c5cabb8cc597f068e09094581565b600030905090565b611437612188565b60005b828290508110156115745761148183838381811061145b5761145a6143db565b5b905060200281019061146d9190614419565b806040019061147c9190614441565b6125ee565b828282818110611494576114936143db565b5b90506020028101906114a69190614419565b80604001906114b59190614441565b600360008686868181106114cc576114cb6143db565b5b90506020028101906114de9190614419565b60000160208101906114f09190613f90565b63ffffffff1663ffffffff168152602001908152602001600020600086868681811061151f5761151e6143db565b5b90506020028101906115319190614419565b602001602081019061154391906144a4565b61ffff1661ffff168152602001908152602001600020918261156692919061467e565b50808060010191505061143a565b507fbe4864a8e820971c0247f5992e2da559595f7bf076a21cb5928d443d2a13b67482826040516115a692919061499b565b60405180910390a15050565b60016020528060005260406000206000915090505481565b60606000600360008763ffffffff1663ffffffff16815260200190815260200160002060008661ffff1661ffff1681526020019081526020016000208054611611906142e0565b80601f016020809104026020016040519081016040528092919081815260200182805461163d906142e0565b801561168a5780601f1061165f5761010080835404028352916020019161168a565b820191906000526020600020905b81548152906001019060200180831161166d57829003601f168201915b5050505050905060008151036116e75783838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091505061178c565b600084849050036116fb578091505061178c565b6002848490501061174d5761171084846125ee565b8084846002908092611724939291906149c9565b60405160200161173693929190614a65565b60405160208183030381529060405291505061178c565b83836040517f9a6d49cd000000000000000000000000000000000000000000000000000000008152600401611783929190614ab8565b60405180910390fd5b949350505050565b60005b828290508110156118bc57368383838181106117b6576117b56143db565b5b90506020028101906117c89190614adc565b90506117f08160000160000160208101906117e39190613f90565b826000016020013561117a565b6117fa57506118af565b3073ffffffffffffffffffffffffffffffffffffffff1663d045a0dc8260c00135836000018460a00135858061010001906118359190614441565b8760e00160208101906118489190613ea5565b888061012001906118599190614441565b6040518963ffffffff1660e01b815260040161187b9796959493929190614bb9565b6000604051808303818588803b15801561189457600080fd5b505af11580156118a8573d6000803e3d6000fd5b5050505050505b8080600101915050611797565b503373ffffffffffffffffffffffffffffffffffffffff16638e9e70996040518163ffffffff1660e01b8152600401600060405180830381865afa158015611908573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906119319190614d10565b6040517f8351eea70000000000000000000000000000000000000000000000000000000081526004016119649190613e09565b60405180910390fd5b611975613413565b61197d6133c5565b6000806119a5876040013588606001358960000160208101906119a09190613f90565b612668565b915091506000806119b6898461220f565b915091506119e98960000160208101906119d09190613f90565b83838b8036038101906119e39190614dae565b8b612690565b955060405180604001604052808581526020018481525094503373ffffffffffffffffffffffffffffffffffffffff1686600001517f85496b760a4b7f8d66384b9df21b381f5d1b1e79f229a47aaf4c232edc2fe59a8b6000016020810190611a529190613f90565b8787604051611a6393929190614ddb565b60405180910390a350505050935093915050565b611a7f612188565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ca5eb5e1826040518263ffffffff1660e01b8152600401611ad891906138a0565b600060405180830381600087803b158015611af257600080fd5b505af1158015611b06573d6000803e3d6000fd5b5050505050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611b72576040517f14d4a4e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b81878787878787876127ac565b50505050505050565b73b491b6f43ca6d58d2cb894ede9beb07ba33a207a81565b611baa612188565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd48d879cef83a1c0bdda516f27b13ddb1b3f8bbac1c9e1511bb2a659c242776081604051611c1a91906138a0565b60405180910390a150565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b611cb4612188565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611d265760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401611d1d91906138a0565b60405180910390fd5b611d2f8161252a565b50565b600030905090565b6000816020013560016000846000016020810190611d589190613f90565b63ffffffff1663ffffffff16815260200190815260200160002054149050919050565b600033905090565b611d9083838360016127c4565b505050565b600080611da18561299b565b915081905083811015611ded5780846040517f71c4efed000000000000000000000000000000000000000000000000000000008152600401611de4929190614e12565b60405180910390fd5b935093915050565b600080600160008463ffffffff1663ffffffff1681526020019081526020016000205490506000801b8103611e6157826040517ff6ff4fb7000000000000000000000000000000000000000000000000000000008152600401611e589190614e3b565b60405180910390fd5b80915050919050565b6000611e7e611e7987876129fb565b612a27565b90506000611eb082611e98611e938a8a612a34565b612a66565b8b6000016020810190611eab9190613f90565b612aa5565b9050611ebc8787612b13565b15611f92576000611efc8a6040016020810190611ed99190614e56565b8b6000016020810190611eec9190613f90565b84611ef78c8c612b27565b612b8a565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637cb59012848b6000856040518563ffffffff1660e01b8152600401611f5e9493929190614ebe565b600060405180830381600087803b158015611f7857600080fd5b505af1158015611f8c573d6000803e3d6000fd5b50505050505b8173ffffffffffffffffffffffffffffffffffffffff16887fefed6d3500546b29533b128a29e3a94d70788727f0507505ac12eaf2e578fd9c8b6000016020810190611fde9190613f90565b84604051611fed929190614f0a565b60405180910390a3505050505050505050565b600061200c8484611c25565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461208e578181101561207e578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161207593929190614f33565b60405180910390fd5b61208d848484840360006127c4565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036121065760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016120fd91906138a0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036121785760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161216f91906138a0565b60405180910390fd5b612183838383612bbc565b505050565b612190611d7b565b73ffffffffffffffffffffffffffffffffffffffff166121ae6112d3565b73ffffffffffffffffffffffffffffffffffffffff161461220d576121d1611d7b565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161220491906138a0565b60405180910390fd5b565b606080600061227d856020013561222586612de4565b878060a001906122359190614441565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612e19565b8092508194505050600081612293576001612296565b60025b90506122c48660000160208101906122ae9190613f90565b828880608001906122bf9190614441565b6115ca565b9250600073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146123bc57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663043a78eb85856040518363ffffffff1660e01b8152600401612379929190614f6a565b602060405180830381865afa158015612396573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ba9190614fb6565b505b50509250929050565b6123cd6133f9565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ddc28c586040518060a001604052808863ffffffff16815260200161242989611df5565b8152602001878152602001868152602001851515815250306040518363ffffffff1660e01b815260040161245e9291906150a8565b6040805180830381865afa15801561247a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061249e919061513d565b9050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361251a5760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161251191906138a0565b60405180910390fd5b61252682600083612bbc565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008282600090600292612604939291906149c9565b9061260f9190615196565b60f01c9050600361ffff168161ffff16146126635782826040517f9a6d49cd00000000000000000000000000000000000000000000000000000000815260040161265a929190614ab8565b60405180910390fd5b505050565b600080612676858585611d95565b809250819350505061268833836124a8565b935093915050565b612698613413565b60006126a78460000151612e88565b90506000846020015111156126c4576126c38460200151612ed6565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632637a450826040518060a001604052808b63ffffffff1681526020016127218c611df5565b81526020018a815260200189815260200160008960200151111515815250866040518463ffffffff1660e01b815260040161275d9291906150a8565b60806040518083038185885af115801561277b573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906127a09190615283565b91505095945050505050565b6127bb87878787878787611e6a565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036128365760006040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161282d91906138a0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036128a85760006040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161289f91906138a0565b60405180910390fd5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015612995578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161298c9190613b28565b60405180910390a35b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000836129ea91906152df565b6129f49190615310565b9050919050565b60008282600090602060ff1692612a14939291906149c9565b90612a1f9190615352565b905092915050565b60008160001c9050919050565b60008282602060ff1690602860ff1692612a50939291906149c9565b90612a5b91906153dd565b60c01c905092915050565b60007f00000000000000000000000000000000000000000000000000000000000000008267ffffffffffffffff16612a9e9190615310565b9050919050565b60006a52b7d2dcc80cd2e400000083612abc610ef5565b612ac691906143a7565b1115612afe576040517f8a164f6300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612b0a84846000613020565b90509392505050565b6000602860ff168383905011905092915050565b60608282602860ff16908092612b3f939291906149c9565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905092915050565b606084848484604051602001612ba394939291906154c9565b6040516020818303038152906040529050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612c0e578060076000828254612c0291906143a7565b92505081905550612ce3565b6000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015612c9b578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401612c9293929190614f33565b60405180910390fd5b818103600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612d2c5780600760008282540392505081905550612d7a565b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612dd79190613b28565b60405180910390a3505050565b60007f000000000000000000000000000000000000000000000000000000000000000082612e1291906152df565b9050919050565b6060600080835111905080612e4f578484604051602001612e3b929190615534565b604051602081830303815290604052612e7e565b8484612e5a33613036565b85604051602001612e6e9493929190615560565b6040516020818303038152906040525b9150935093915050565b6000813414612ece57346040517f9f704120000000000000000000000000000000000000000000000000000000008152600401612ec59190613b28565b60405180910390fd5b819050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4fe1d946040518163ffffffff1660e01b8152600401602060405180830381865afa158015612f43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f6791906155bf565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612fcf576040517f5373352a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61301c337f0000000000000000000000000000000000000000000000000000000000000000848473ffffffffffffffffffffffffffffffffffffffff16613059909392919063ffffffff16565b5050565b600061302c84846130db565b8290509392505050565b60008173ffffffffffffffffffffffffffffffffffffffff1660001b9050919050565b6130d5848573ffffffffffffffffffffffffffffffffffffffff166323b872dd86868660405160240161308e939291906155ec565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061315d565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361314d5760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161314491906138a0565b60405180910390fd5b61315960008383612bbc565b5050565b6000613188828473ffffffffffffffffffffffffffffffffffffffff166131f490919063ffffffff16565b905060008151141580156131ad5750808060200190518101906131ab9190614fb6565b155b156131ef57826040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016131e691906138a0565b60405180910390fd5b505050565b60606132028383600061320a565b905092915050565b60608147101561325157306040517fcd78605900000000000000000000000000000000000000000000000000000000815260040161324891906138a0565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16848660405161327a9190615623565b60006040518083038185875af1925050503d80600081146132b7576040519150601f19603f3d011682016040523d82523d6000602084013e6132bc565b606091505b50915091506132cc8683836132d7565b925050509392505050565b6060826132ec576132e782613366565b61335e565b60008251148015613314575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561335657836040517f9996b31500000000000000000000000000000000000000000000000000000000815260040161334d91906138a0565b60405180910390fd5b81905061335f565b5b9392505050565b6000815111156133795780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001606081525090565b604051806040016040528060008152602001600081525090565b604051806060016040528060008019168152602001600067ffffffffffffffff1681526020016134416133f9565b81525090565b600081519050919050565b600082825260208201905092915050565b60005b83811015613481578082015181840152602081019050613466565b60008484015250505050565b6000601f19601f8301169050919050565b60006134a982613447565b6134b38185613452565b93506134c3818560208601613463565b6134cc8161348d565b840191505092915050565b600060208201905081810360008301526134f1818461349e565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006135388261350d565b9050919050565b6135488161352d565b811461355357600080fd5b50565b6000813590506135658161353f565b92915050565b6000819050919050565b61357e8161356b565b811461358957600080fd5b50565b60008135905061359b81613575565b92915050565b600080604083850312156135b8576135b7613503565b5b60006135c685828601613556565b92505060206135d78582860161358c565b9150509250929050565b60008115159050919050565b6135f6816135e1565b82525050565b600060208201905061361160008301846135ed565b92915050565b600080fd5b600060e0828403121561363257613631613617565b5b81905092915050565b60006020828403121561365157613650613503565b5b600082013567ffffffffffffffff81111561366f5761366e613508565b5b61367b8482850161361c565b91505092915050565b61368d8161356b565b82525050565b6040820160008201516136a96000850182613684565b5060208201516136bc6020850182613684565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b613701816136ee565b82525050565b600082825260208201905092915050565b600061372382613447565b61372d8185613707565b935061373d818560208601613463565b6137468161348d565b840191505092915050565b600060408301600083015161376960008601826136f8565b50602083015184820360208601526137818282613718565b9150508091505092915050565b600061379a8383613751565b905092915050565b6000602082019050919050565b60006137ba826136c2565b6137c481856136cd565b9350836020820285016137d6856136de565b8060005b8581101561381257848403895281516137f3858261378e565b94506137fe836137a2565b925060208a019950506001810190506137da565b50829750879550505050505092915050565b60408201600082015161383a6000850182613684565b50602082015161384d6020850182613684565b50505050565b600060a0820190506138686000830186613693565b818103604083015261387a81856137af565b90506138896060830184613824565b949350505050565b61389a8161352d565b82525050565b60006020820190506138b56000830184613891565b92915050565b6000606082840312156138d1576138d0613617565b5b81905092915050565b6000819050919050565b6138ed816138da565b81146138f857600080fd5b50565b60008135905061390a816138e4565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261393557613934613910565b5b8235905067ffffffffffffffff81111561395257613951613915565b5b60208301915083600182028301111561396e5761396d61391a565b5b9250929050565b600080600080600080600060e0888a03121561399457613993613503565b5b60006139a28a828b016138bb565b97505060606139b38a828b016138fb565b965050608088013567ffffffffffffffff8111156139d4576139d3613508565b5b6139e08a828b0161391f565b955095505060a06139f38a828b01613556565b93505060c088013567ffffffffffffffff811115613a1457613a13613508565b5b613a208a828b0161391f565b925092505092959891949750929550565b600061ffff82169050919050565b613a4881613a31565b82525050565b6000602082019050613a636000830184613a3f565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613a9e81613a69565b82525050565b600067ffffffffffffffff82169050919050565b613ac181613aa4565b82525050565b6000604082019050613adc6000830185613a95565b613ae96020830184613ab8565b9392505050565b6000604082019050613b056000830185613ab8565b613b126020830184613ab8565b9392505050565b613b228161356b565b82525050565b6000602082019050613b3d6000830184613b19565b92915050565b600080600060608486031215613b5c57613b5b613503565b5b6000613b6a86828701613556565b9350506020613b7b86828701613556565b9250506040613b8c8682870161358c565b9150509250925092565b600060ff82169050919050565b613bac81613b96565b82525050565b6000602082019050613bc76000830184613ba3565b92915050565b600063ffffffff82169050919050565b613be681613bcd565b8114613bf157600080fd5b50565b600081359050613c0381613bdd565b92915050565b60008060408385031215613c2057613c1f613503565b5b6000613c2e85828601613bf4565b9250506020613c3f858286016138fb565b9150509250929050565b613c52816135e1565b8114613c5d57600080fd5b50565b600081359050613c6f81613c49565b92915050565b60008060408385031215613c8c57613c8b613503565b5b600083013567ffffffffffffffff811115613caa57613ca9613508565b5b613cb68582860161361c565b9250506020613cc785828601613c60565b9150509250929050565b604082016000820151613ce76000850182613684565b506020820151613cfa6020850182613684565b50505050565b6000604082019050613d156000830184613cd1565b92915050565b600060208284031215613d3157613d30613503565b5b6000613d3f8482850161358c565b91505092915050565b613d5181613a31565b8114613d5c57600080fd5b50565b600081359050613d6e81613d48565b92915050565b60008060408385031215613d8b57613d8a613503565b5b6000613d9985828601613bf4565b9250506020613daa85828601613d5f565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000613ddb82613db4565b613de58185613dbf565b9350613df5818560208601613463565b613dfe8161348d565b840191505092915050565b60006020820190508181036000830152613e238184613dd0565b905092915050565b6000819050919050565b6000613e50613e4b613e468461350d565b613e2b565b61350d565b9050919050565b6000613e6282613e35565b9050919050565b6000613e7482613e57565b9050919050565b613e8481613e69565b82525050565b6000602082019050613e9f6000830184613e7b565b92915050565b600060208284031215613ebb57613eba613503565b5b6000613ec984828501613556565b91505092915050565b6000602082019050613ee76000830184613ab8565b92915050565b60008083601f840112613f0357613f02613910565b5b8235905067ffffffffffffffff811115613f2057613f1f613915565b5b602083019150836020820283011115613f3c57613f3b61391a565b5b9250929050565b60008060208385031215613f5a57613f59613503565b5b600083013567ffffffffffffffff811115613f7857613f77613508565b5b613f8485828601613eed565b92509250509250929050565b600060208284031215613fa657613fa5613503565b5b6000613fb484828501613bf4565b91505092915050565b613fc6816138da565b82525050565b6000602082019050613fe16000830184613fbd565b92915050565b6000806000806060858703121561400157614000613503565b5b600061400f87828801613bf4565b945050602061402087828801613d5f565b935050604085013567ffffffffffffffff81111561404157614040613508565b5b61404d8782880161391f565b925092505092959194509250565b60008083601f84011261407157614070613910565b5b8235905067ffffffffffffffff81111561408e5761408d613915565b5b6020830191508360208202830111156140aa576140a961391a565b5b9250929050565b600080602083850312156140c8576140c7613503565b5b600083013567ffffffffffffffff8111156140e6576140e5613508565b5b6140f28582860161405b565b92509250509250929050565b60006040828403121561411457614113613617565b5b81905092915050565b60008060006080848603121561413657614135613503565b5b600084013567ffffffffffffffff81111561415457614153613508565b5b6141608682870161361c565b9350506020614171868287016140fe565b925050606061418286828701613556565b9150509250925092565b614195816138da565b82525050565b6141a481613aa4565b82525050565b6040820160008201516141c06000850182613684565b5060208201516141d36020850182613684565b50505050565b6080820160008201516141ef600085018261418c565b506020820151614202602085018261419b565b50604082015161421560408501826141aa565b50505050565b600060c08201905061423060008301856141d9565b61423d6080830184613824565b9392505050565b6000806040838503121561425b5761425a613503565b5b600061426985828601613556565b925050602061427a85828601613556565b9150509250929050565b60006060828403121561429a57614299613503565b5b60006142a8848285016138bb565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806142f857607f821691505b60208210810361430b5761430a6142b1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61434981613bcd565b82525050565b60006040820190506143646000830185614340565b6143716020830184613fbd565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006143b28261356b565b91506143bd8361356b565b92508282019050808211156143d5576143d4614378565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b6000823560016060038336030381126144355761443461440a565b5b80830191505092915050565b6000808335600160200384360303811261445e5761445d61440a565b5b80840192508235915067ffffffffffffffff8211156144805761447f61440f565b5b60208301925060018202360383131561449c5761449b614414565b5b509250929050565b6000602082840312156144ba576144b9613503565b5b60006144c884828501613d5f565b91505092915050565b600082905092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261453e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614501565b6145488683614501565b95508019841693508086168417925050509392505050565b600061457b6145766145718461356b565b613e2b565b61356b565b9050919050565b6000819050919050565b61459583614560565b6145a96145a182614582565b84845461450e565b825550505050565b600090565b6145be6145b1565b6145c981848461458c565b505050565b5b818110156145ed576145e26000826145b6565b6001810190506145cf565b5050565b601f82111561463257614603816144dc565b61460c846144f1565b8101602085101561461b578190505b61462f614627856144f1565b8301826145ce565b50505b505050565b600082821c905092915050565b600061465560001984600802614637565b1980831691505092915050565b600061466e8383614644565b9150826002028217905092915050565b61468883836144d1565b67ffffffffffffffff8111156146a1576146a0614311565b5b6146ab82546142e0565b6146b68282856145f1565b6000601f8311600181146146e557600084156146d3578287013590505b6146dd8582614662565b865550614745565b601f1984166146f3866144dc565b60005b8281101561471b578489013582556001820191506020850194506020810190506146f6565b868310156147385784890135614734601f891682614644565b8355505b6001600288020188555050505b50505050505050565b600082825260208201905092915050565b6000819050919050565b60006147786020840184613bf4565b905092915050565b61478981613bcd565b82525050565b600061479e6020840184613d5f565b905092915050565b6147af81613a31565b82525050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126147e1576147e06147bf565b5b83810192508235915060208301925067ffffffffffffffff821115614809576148086147b5565b5b60018202360383131561481f5761481e6147ba565b5b509250929050565b600082825260208201905092915050565b82818337600083830152505050565b60006148538385614827565b9350614860838584614838565b6148698361348d565b840190509392505050565b6000606083016148876000840184614769565b6148946000860182614780565b506148a2602084018461478f565b6148af60208601826147a6565b506148bd60408401846147c4565b85830360408701526148d0838284614847565b925050508091505092915050565b60006148ea8383614874565b905092915050565b60008235600160600383360303811261490e5761490d6147bf565b5b82810191505092915050565b6000602082019050919050565b6000614933838561474e565b9350836020840285016149458461475f565b8060005b8781101561498957848403895261496082846148f2565b61496a85826148de565b94506149758361491a565b925060208a01995050600181019050614949565b50829750879450505050509392505050565b600060208201905081810360008301526149b6818486614927565b90509392505050565b600080fd5b600080fd5b600080858511156149dd576149dc6149bf565b5b838611156149ee576149ed6149c4565b5b6001850283019150848603905094509492505050565b600081905092915050565b6000614a1a82613db4565b614a248185614a04565b9350614a34818560208601613463565b80840191505092915050565b6000614a4c8385614a04565b9350614a59838584614838565b82840190509392505050565b6000614a718286614a0f565b9150614a7e828486614a40565b9150819050949350505050565b6000614a978385613dbf565b9350614aa4838584614838565b614aad8361348d565b840190509392505050565b60006020820190508181036000830152614ad3818486614a8b565b90509392505050565b60008235600161014003833603038112614af957614af861440a565b5b80830191505092915050565b6000614b1460208401846138fb565b905092915050565b614b2581613aa4565b8114614b3057600080fd5b50565b600081359050614b4281614b1c565b92915050565b6000614b576020840184614b33565b905092915050565b60608201614b706000830183614769565b614b7d6000850182614780565b50614b8b6020830183614b05565b614b98602085018261418c565b50614ba66040830183614b48565b614bb3604085018261419b565b50505050565b600060e082019050614bce600083018a614b5f565b614bdb6060830189613fbd565b8181036080830152614bee818789614a8b565b9050614bfd60a0830186613891565b81810360c0830152614c10818486614a8b565b905098975050505050505050565b600080fd5b614c2c8261348d565b810181811067ffffffffffffffff82111715614c4b57614c4a614311565b5b80604052505050565b6000614c5e6134f9565b9050614c6a8282614c23565b919050565b600067ffffffffffffffff821115614c8a57614c89614311565b5b614c938261348d565b9050602081019050919050565b6000614cb3614cae84614c6f565b614c54565b905082815260208101848484011115614ccf57614cce614c1e565b5b614cda848285613463565b509392505050565b600082601f830112614cf757614cf6613910565b5b8151614d07848260208601614ca0565b91505092915050565b600060208284031215614d2657614d25613503565b5b600082015167ffffffffffffffff811115614d4457614d43613508565b5b614d5084828501614ce2565b91505092915050565b600080fd5b600060408284031215614d7457614d73614d59565b5b614d7e6040614c54565b90506000614d8e8482850161358c565b6000830152506020614da28482850161358c565b60208301525092915050565b600060408284031215614dc457614dc3613503565b5b6000614dd284828501614d5e565b91505092915050565b6000606082019050614df06000830186614340565b614dfd6020830185613b19565b614e0a6040830184613b19565b949350505050565b6000604082019050614e276000830185613b19565b614e346020830184613b19565b9392505050565b6000602082019050614e506000830184614340565b92915050565b600060208284031215614e6c57614e6b613503565b5b6000614e7a84828501614b33565b91505092915050565b6000819050919050565b6000614ea8614ea3614e9e84614e83565b613e2b565b613a31565b9050919050565b614eb881614e8d565b82525050565b6000608082019050614ed36000830187613891565b614ee06020830186613fbd565b614eed6040830185614eaf565b8181036060830152614eff8184613dd0565b905095945050505050565b6000604082019050614f1f6000830185614340565b614f2c6020830184613b19565b9392505050565b6000606082019050614f486000830186613891565b614f556020830185613b19565b614f626040830184613b19565b949350505050565b60006040820190508181036000830152614f848185613dd0565b90508181036020830152614f988184613dd0565b90509392505050565b600081519050614fb081613c49565b92915050565b600060208284031215614fcc57614fcb613503565b5b6000614fda84828501614fa1565b91505092915050565b6000614fee82613db4565b614ff88185614827565b9350615008818560208601613463565b6150118161348d565b840191505092915050565b615025816135e1565b82525050565b600060a0830160008301516150436000860182614780565b506020830151615056602086018261418c565b506040830151848203604086015261506e8282614fe3565b915050606083015184820360608601526150888282614fe3565b915050608083015161509d608086018261501c565b508091505092915050565b600060408201905081810360008301526150c2818561502b565b90506150d16020830184613891565b9392505050565b6000815190506150e781613575565b92915050565b60006040828403121561510357615102614d59565b5b61510d6040614c54565b9050600061511d848285016150d8565b6000830152506020615131848285016150d8565b60208301525092915050565b60006040828403121561515357615152613503565b5b6000615161848285016150ed565b91505092915050565b60007fffff00000000000000000000000000000000000000000000000000000000000082169050919050565b60006151a283836144d1565b826151ad813561516a565b925060028210156151ed576151e87fffff00000000000000000000000000000000000000000000000000000000000083600203600802614501565b831692505b505092915050565b600081519050615204816138e4565b92915050565b60008151905061521981614b1c565b92915050565b60006080828403121561523557615234614d59565b5b61523f6060614c54565b9050600061524f848285016151f5565b60008301525060206152638482850161520a565b6020830152506040615277848285016150ed565b60408301525092915050565b60006080828403121561529957615298613503565b5b60006152a78482850161521f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006152ea8261356b565b91506152f58361356b565b925082615305576153046152b0565b5b828204905092915050565b600061531b8261356b565b91506153268361356b565b92508282026153348161356b565b9150828204841483151761534b5761534a614378565b5b5092915050565b600061535e83836144d1565b8261536981356138da565b925060208210156153a9576153a47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83602003600802614501565b831692505b505092915050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b60006153e983836144d1565b826153f481356153b1565b925060088210156154345761542f7fffffffffffffffff00000000000000000000000000000000000000000000000083600803600802614501565b831692505b505092915050565b60008160c01b9050919050565b60006154548261543c565b9050919050565b61546c61546782613aa4565b615449565b82525050565b60008160e01b9050919050565b600061548a82615472565b9050919050565b6154a261549d82613bcd565b61547f565b82525050565b6000819050919050565b6154c36154be8261356b565b6154a8565b82525050565b60006154d5828761545b565b6008820191506154e58286615491565b6004820191506154f582856154b2565b6020820191506155058284614a0f565b915081905095945050505050565b6000819050919050565b61552e615529826138da565b615513565b82525050565b6000615540828561551d565b602082019150615550828461545b565b6008820191508190509392505050565b600061556c828761551d565b60208201915061557c828661545b565b60088201915061558c828561551d565b60208201915061559c8284614a0f565b915081905095945050505050565b6000815190506155b98161353f565b92915050565b6000602082840312156155d5576155d4613503565b5b60006155e3848285016155aa565b91505092915050565b60006060820190506156016000830186613891565b61560e6020830185613891565b61561b6040830184613b19565b949350505050565b600061562f8284614a0f565b91508190509291505056fea2646970667358221220def9f7e5c94b5637c63af478ba283d93da4707acdbee4f10436c0b39763e222d64736f6c63430008180033",
  linkReferences: {},
  deployedLinkReferences: {},
} as const;

export const BaseQMFTechToken = {
  _format: "hh-sol-artifact-1",
  contractName: "BaseQMFTechToken",
  sourceName: "contracts/QMFTechToken.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "_layerZeroEndpoint",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "target",
          type: "address",
        },
      ],
      name: "AddressEmptyCode",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "AddressInsufficientBalance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "allowance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientAllowance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientBalance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ERC20InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC20InvalidReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSpender",
      type: "error",
    },
    {
      inputs: [],
      name: "FailedInnerCall",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidDelegate",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidEndpointCall",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidLocalDecimals",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "options",
          type: "bytes",
        },
      ],
      name: "InvalidOptions",
      type: "error",
    },
    {
      inputs: [],
      name: "LzTokenUnavailable",
      type: "error",
    },
    {
      inputs: [],
      name: "MaxSupplyExceeded",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
      ],
      name: "NoPeer",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "msgValue",
          type: "uint256",
        },
      ],
      name: "NotEnoughNative",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "OnlyEndpoint",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "sender",
          type: "bytes32",
        },
      ],
      name: "OnlyPeer",
      type: "error",
    },
    {
      inputs: [],
      name: "OnlySelf",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
      ],
      name: "SafeERC20FailedOperation",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "result",
          type: "bytes",
        },
      ],
      name: "SimulationResult",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amountLD",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minAmountLD",
          type: "uint256",
        },
      ],
      name: "SlippageExceeded",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "eid",
              type: "uint32",
            },
            {
              internalType: "uint16",
              name: "msgType",
              type: "uint16",
            },
            {
              internalType: "bytes",
              name: "options",
              type: "bytes",
            },
          ],
          indexed: false,
          internalType: "struct EnforcedOptionParam[]",
          name: "_enforcedOptions",
          type: "tuple[]",
        },
      ],
      name: "EnforcedOptionSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "inspector",
          type: "address",
        },
      ],
      name: "MsgInspectorSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "guid",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint32",
          name: "srcEid",
          type: "uint32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "toAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amountReceivedLD",
          type: "uint256",
        },
      ],
      name: "OFTReceived",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "guid",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint32",
          name: "dstEid",
          type: "uint32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "fromAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amountSentLD",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amountReceivedLD",
          type: "uint256",
        },
      ],
      name: "OFTSent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "peer",
          type: "bytes32",
        },
      ],
      name: "PeerSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "preCrimeAddress",
          type: "address",
        },
      ],
      name: "PreCrimeSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "MAX_SUPPLY",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "SEND",
      outputs: [
        {
          internalType: "uint16",
          name: "",
          type: "uint16",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "SEND_AND_CALL",
      outputs: [
        {
          internalType: "uint16",
          name: "",
          type: "uint16",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "srcEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "sender",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
          ],
          internalType: "struct Origin",
          name: "origin",
          type: "tuple",
        },
      ],
      name: "allowInitializePath",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "approvalRequired",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "_eid",
          type: "uint32",
        },
        {
          internalType: "uint16",
          name: "_msgType",
          type: "uint16",
        },
        {
          internalType: "bytes",
          name: "_extraOptions",
          type: "bytes",
        },
      ],
      name: "combineOptions",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "composeMsgSender",
      outputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimalConversionRate",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "endpoint",
      outputs: [
        {
          internalType: "contract ILayerZeroEndpointV2",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
        {
          internalType: "uint16",
          name: "msgType",
          type: "uint16",
        },
      ],
      name: "enforcedOptions",
      outputs: [
        {
          internalType: "bytes",
          name: "enforcedOption",
          type: "bytes",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "_eid",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "_peer",
          type: "bytes32",
        },
      ],
      name: "isPeer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "srcEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "sender",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
          ],
          internalType: "struct Origin",
          name: "_origin",
          type: "tuple",
        },
        {
          internalType: "bytes32",
          name: "_guid",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "_message",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "_executor",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_extraData",
          type: "bytes",
        },
      ],
      name: "lzReceive",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "uint32",
                  name: "srcEid",
                  type: "uint32",
                },
                {
                  internalType: "bytes32",
                  name: "sender",
                  type: "bytes32",
                },
                {
                  internalType: "uint64",
                  name: "nonce",
                  type: "uint64",
                },
              ],
              internalType: "struct Origin",
              name: "origin",
              type: "tuple",
            },
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "guid",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "executor",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "message",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "extraData",
              type: "bytes",
            },
          ],
          internalType: "struct InboundPacket[]",
          name: "_packets",
          type: "tuple[]",
        },
      ],
      name: "lzReceiveAndRevert",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "srcEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "sender",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
          ],
          internalType: "struct Origin",
          name: "_origin",
          type: "tuple",
        },
        {
          internalType: "bytes32",
          name: "_guid",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "_message",
          type: "bytes",
        },
        {
          internalType: "address",
          name: "_executor",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_extraData",
          type: "bytes",
        },
      ],
      name: "lzReceiveSimulate",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "msgInspector",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "nextNonce",
      outputs: [
        {
          internalType: "uint64",
          name: "nonce",
          type: "uint64",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "oApp",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "oAppVersion",
      outputs: [
        {
          internalType: "uint64",
          name: "senderVersion",
          type: "uint64",
        },
        {
          internalType: "uint64",
          name: "receiverVersion",
          type: "uint64",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "oftVersion",
      outputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
        {
          internalType: "uint64",
          name: "version",
          type: "uint64",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "eid",
          type: "uint32",
        },
      ],
      name: "peers",
      outputs: [
        {
          internalType: "bytes32",
          name: "peer",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "preCrime",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "amountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "extraOptions",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "composeMsg",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "oftCmd",
              type: "bytes",
            },
          ],
          internalType: "struct SendParam",
          name: "_sendParam",
          type: "tuple",
        },
      ],
      name: "quoteOFT",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxAmountLD",
              type: "uint256",
            },
          ],
          internalType: "struct OFTLimit",
          name: "oftLimit",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "int256",
              name: "feeAmountLD",
              type: "int256",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
          ],
          internalType: "struct OFTFeeDetail[]",
          name: "oftFeeDetails",
          type: "tuple[]",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "amountSentLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountReceivedLD",
              type: "uint256",
            },
          ],
          internalType: "struct OFTReceipt",
          name: "oftReceipt",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "amountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "extraOptions",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "composeMsg",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "oftCmd",
              type: "bytes",
            },
          ],
          internalType: "struct SendParam",
          name: "_sendParam",
          type: "tuple",
        },
        {
          internalType: "bool",
          name: "_payInLzToken",
          type: "bool",
        },
      ],
      name: "quoteSend",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "nativeFee",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lzTokenFee",
              type: "uint256",
            },
          ],
          internalType: "struct MessagingFee",
          name: "msgFee",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "dstEid",
              type: "uint32",
            },
            {
              internalType: "bytes32",
              name: "to",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "amountLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "minAmountLD",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "extraOptions",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "composeMsg",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "oftCmd",
              type: "bytes",
            },
          ],
          internalType: "struct SendParam",
          name: "_sendParam",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "nativeFee",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lzTokenFee",
              type: "uint256",
            },
          ],
          internalType: "struct MessagingFee",
          name: "_fee",
          type: "tuple",
        },
        {
          internalType: "address",
          name: "_refundAddress",
          type: "address",
        },
      ],
      name: "send",
      outputs: [
        {
          components: [
            {
              internalType: "bytes32",
              name: "guid",
              type: "bytes32",
            },
            {
              internalType: "uint64",
              name: "nonce",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "nativeFee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lzTokenFee",
                  type: "uint256",
                },
              ],
              internalType: "struct MessagingFee",
              name: "fee",
              type: "tuple",
            },
          ],
          internalType: "struct MessagingReceipt",
          name: "msgReceipt",
          type: "tuple",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "amountSentLD",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "amountReceivedLD",
              type: "uint256",
            },
          ],
          internalType: "struct OFTReceipt",
          name: "oftReceipt",
          type: "tuple",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_delegate",
          type: "address",
        },
      ],
      name: "setDelegate",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint32",
              name: "eid",
              type: "uint32",
            },
            {
              internalType: "uint16",
              name: "msgType",
              type: "uint16",
            },
            {
              internalType: "bytes",
              name: "options",
              type: "bytes",
            },
          ],
          internalType: "struct EnforcedOptionParam[]",
          name: "_enforcedOptions",
          type: "tuple[]",
        },
      ],
      name: "setEnforcedOptions",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_msgInspector",
          type: "address",
        },
      ],
      name: "setMsgInspector",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "_eid",
          type: "uint32",
        },
        {
          internalType: "bytes32",
          name: "_peer",
          type: "bytes32",
        },
      ],
      name: "setPeer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_preCrime",
          type: "address",
        },
      ],
      name: "setPreCrime",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "sharedDecimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "token",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x60c06040523480156200001157600080fd5b5060405162005e7138038062005e71833981810160405281019062000037919062000471565b6040518060400160405280600881526020017f514d4620546563680000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f514d46540000000000000000000000000000000000000000000000000000000081525082620000b46200032960201b60201c565b8383620000c66200033160201b60201c565b848481818181620000dc6200032960201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001515760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001489190620004b4565b60405180910390fd5b62000162816200033a60201b60201c565b508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001fe576040517fb586360400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60805173ffffffffffffffffffffffffffffffffffffffff1663ca5eb5e1826040518263ffffffff1660e01b81526004016200023b9190620004b4565b600060405180830381600087803b1580156200025657600080fd5b505af11580156200026b573d6000803e3d6000fd5b505050505050505062000283620003fe60201b60201c565b60ff168360ff161015620002c3576040517f1e9714b000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b620002d3620003fe60201b60201c565b83620002e091906200050d565b600a620002ee9190620006a7565b60a08181525050505050816008908162000309919062000968565b5080600990816200031b919062000968565b505050505050505062000a4f565b600033905090565b60006012905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006006905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000439826200040c565b9050919050565b6200044b816200042c565b81146200045757600080fd5b50565b6000815190506200046b8162000440565b92915050565b6000602082840312156200048a576200048962000407565b5b60006200049a848285016200045a565b91505092915050565b620004ae816200042c565b82525050565b6000602082019050620004cb6000830184620004a3565b92915050565b600060ff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200051a82620004d1565b91506200052783620004d1565b9250828203905060ff811115620005435762000542620004de565b5b92915050565b60008160011c9050919050565b6000808291508390505b6001851115620005a85780860481111562000580576200057f620004de565b5b6001851615620005905780820291505b8081029050620005a08562000549565b945062000560565b94509492505050565b600082620005c3576001905062000696565b81620005d3576000905062000696565b8160018114620005ec5760028114620005f7576200062d565b600191505062000696565b60ff8411156200060c576200060b620004de565b5b8360020a915084821115620006265762000625620004de565b5b5062000696565b5060208310610133831016604e8410600b8410161715620006675782820a905083811115620006615762000660620004de565b5b62000696565b62000676848484600162000556565b9250905081840481111562000690576200068f620004de565b5b81810290505b9392505050565b6000819050919050565b6000620006b4826200069d565b9150620006c183620004d1565b9250620006f07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620005b1565b905092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200077a57607f821691505b60208210810362000790576200078f62000732565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007fa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620007bb565b620008068683620007bb565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000849620008436200083d846200069d565b6200081e565b6200069d565b9050919050565b6000819050919050565b620008658362000828565b6200087d620008748262000850565b848454620007c8565b825550505050565b600090565b6200089462000885565b620008a18184846200085a565b505050565b5b81811015620008c957620008bd6000826200088a565b600181019050620008a7565b5050565b601f8211156200091857620008e28162000796565b620008ed84620007ab565b81016020851015620008fd578190505b620009156200090c85620007ab565b830182620008a6565b50505b505050565b600082821c905092915050565b60006200093d600019846008026200091d565b1980831691505092915050565b60006200095883836200092a565b9150826002028217905092915050565b6200097382620006f8565b67ffffffffffffffff8111156200098f576200098e62000703565b5b6200099b825462000761565b620009a8828285620008cd565b600060209050601f831160018114620009e05760008415620009cb578287015190505b620009d785826200094a565b86555062000a47565b601f198416620009f08662000796565b60005b8281101562000a1a57848901518255600182019150602085019450602081019050620009f3565b8683101562000a3a578489015162000a36601f8916826200092a565b8355505b6001600288020188555050505b505050505050565b60805160a0516153af62000ac26000396000818161113b01528181612689015281816126aa015281816127540152612ad2015260008181610c1301528181610f6b0152818161180501528181611c6c0152818161213b015281816123b001528181612c460152612d4101526153af6000f3fe60806040526004361061025c5760003560e01c8063715018a611610144578063bb0b6a53116100b6578063d045a0dc1161007a578063d045a0dc1461092e578063d42438851461094a578063dd62ed3e14610973578063f2fde38b146109b0578063fc0c546a146109d9578063ff7bd03d14610a045761025c565b8063bb0b6a531461083e578063bc70b3541461087b578063bd815db0146108b8578063c7c7f5b3146108d4578063ca5eb5e1146109055761025c565b8063963efcaa11610108578063963efcaa1461072c5780639f68b96414610757578063a9059cbb14610782578063b731ea0a146107bf578063b92d0eff146107ea578063b98bd070146108155761025c565b8063715018a6146106575780637d25a05e1461066e578063857749b0146106ab5780638da5cb5b146106d657806395d89b41146107015761025c565b806323b872dd116101dd57806352ae2879116101a157806352ae2879146105215780635535d4611461054c5780635a0dfe4d146105895780635e280f11146105c65780636fc1b31e146105f157806370a082311461061a5761025c565b806323b872dd14610428578063313ce5671461046557806332cb6b0c146104905780633400288b146104bb5780633b6f743b146104e45761025c565b8063134d4f2511610224578063134d4f251461034f578063156a0d0f1461037a57806317442b70146103a657806318160ddd146103d25780631f5e1334146103fd5761025c565b806306fdde0314610261578063095ea7b31461028c5780630d35b415146102c9578063111ecdad1461030857806313137d6514610333575b600080fd5b34801561026d57600080fd5b50610276610a41565b6040516102839190613243565b60405180910390f35b34801561029857600080fd5b506102b360048036038101906102ae919061330d565b610ad3565b6040516102c09190613368565b60405180910390f35b3480156102d557600080fd5b506102f060048036038101906102eb91906133a7565b610af6565b6040516102ff939291906135bf565b60405180910390f35b34801561031457600080fd5b5061031d610bd4565b60405161032a919061360c565b60405180910390f35b61034d600480360381019061034891906136e1565b610bfa565b005b34801561035b57600080fd5b50610364610d1c565b60405161037191906137ba565b60405180910390f35b34801561038657600080fd5b5061038f610d21565b60405161039d929190613833565b60405180910390f35b3480156103b257600080fd5b506103bb610d4f565b6040516103c992919061385c565b60405180910390f35b3480156103de57600080fd5b506103e7610d5d565b6040516103f49190613894565b60405180910390f35b34801561040957600080fd5b50610412610d67565b60405161041f91906137ba565b60405180910390f35b34801561043457600080fd5b5061044f600480360381019061044a91906138af565b610d6c565b60405161045c9190613368565b60405180910390f35b34801561047157600080fd5b5061047a610d9b565b604051610487919061391e565b60405180910390f35b34801561049c57600080fd5b506104a5610da4565b6040516104b29190613894565b60405180910390f35b3480156104c757600080fd5b506104e260048036038101906104dd9190613975565b610db3565b005b3480156104f057600080fd5b5061050b600480360381019061050691906139e1565b610e1c565b6040516105189190613a6c565b60405180910390f35b34801561052d57600080fd5b50610536610e88565b604051610543919061360c565b60405180910390f35b34801561055857600080fd5b50610573600480360381019061056e9190613ab3565b610e90565b6040516105809190613b48565b60405180910390f35b34801561059557600080fd5b506105b060048036038101906105ab9190613975565b610f3d565b6040516105bd9190613368565b60405180910390f35b3480156105d257600080fd5b506105db610f69565b6040516105e89190613bc9565b60405180910390f35b3480156105fd57600080fd5b5061061860048036038101906106139190613be4565b610f8d565b005b34801561062657600080fd5b50610641600480360381019061063c9190613be4565b611010565b60405161064e9190613894565b60405180910390f35b34801561066357600080fd5b5061066c611059565b005b34801561067a57600080fd5b5061069560048036038101906106909190613975565b61106d565b6040516106a29190613c11565b60405180910390f35b3480156106b757600080fd5b506106c0611075565b6040516106cd919061391e565b60405180910390f35b3480156106e257600080fd5b506106eb61107e565b6040516106f8919061360c565b60405180910390f35b34801561070d57600080fd5b506107166110a7565b6040516107239190613243565b60405180910390f35b34801561073857600080fd5b50610741611139565b60405161074e9190613894565b60405180910390f35b34801561076357600080fd5b5061076c61115d565b6040516107799190613368565b60405180910390f35b34801561078e57600080fd5b506107a960048036038101906107a4919061330d565b611162565b6040516107b69190613368565b60405180910390f35b3480156107cb57600080fd5b506107d4611185565b6040516107e1919061360c565b60405180910390f35b3480156107f657600080fd5b506107ff6111ab565b60405161080c919061360c565b60405180910390f35b34801561082157600080fd5b5061083c60048036038101906108379190613c82565b6111b3565b005b34801561084a57600080fd5b5061086560048036038101906108609190613ccf565b611336565b6040516108729190613d0b565b60405180910390f35b34801561088757600080fd5b506108a2600480360381019061089d9190613d26565b61134e565b6040516108af9190613b48565b60405180910390f35b6108d260048036038101906108cd9190613df0565b611518565b005b6108ee60048036038101906108e99190613e5c565b6116f1565b6040516108fc929190613f5a565b60405180910390f35b34801561091157600080fd5b5061092c60048036038101906109279190613be4565b6117fb565b005b610948600480360381019061094391906136e1565b611891565b005b34801561095657600080fd5b50610971600480360381019061096c9190613be4565b61190e565b005b34801561097f57600080fd5b5061099a60048036038101906109959190613f83565b611991565b6040516109a79190613894565b60405180910390f35b3480156109bc57600080fd5b506109d760048036038101906109d29190613be4565b611a18565b005b3480156109e557600080fd5b506109ee611a9e565b6040516109fb919061360c565b60405180910390f35b348015610a1057600080fd5b50610a2b6004803603810190610a269190613fc3565b611aa6565b604051610a389190613368565b60405180910390f35b606060088054610a509061401f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7c9061401f565b8015610ac95780601f10610a9e57610100808354040283529160200191610ac9565b820191906000526020600020905b815481529060010190602001808311610aac57829003601f168201915b5050505050905090565b600080610ade611ae7565b9050610aeb818585611aef565b600191505092915050565b610afe613117565b6060610b08613131565b60008067ffffffffffffffff801690506040518060400160405280838152602001828152509450600067ffffffffffffffff811115610b4a57610b49614050565b5b604051908082528060200260200182016040528015610b8357816020015b610b7061314b565b815260200190600190039081610b685790505b509350600080610bae886040013589606001358a6000016020810190610ba99190613ccf565b611b01565b915091506040518060400160405280838152602001828152509450505050509193909250565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610c8a57336040517f91ac5e4f000000000000000000000000000000000000000000000000000000008152600401610c81919061360c565b60405180910390fd5b8660200135610caa886000016020810190610ca59190613ccf565b611b61565b14610d0457866000016020810190610cc29190613ccf565b87602001356040517fc26bebcc000000000000000000000000000000000000000000000000000000008152600401610cfb92919061408e565b60405180910390fd5b610d1387878787878787611bd6565b50505050505050565b600281565b6000807f02e49c2c000000000000000000000000000000000000000000000000000000006001915091509091565b600080600180915091509091565b6000600754905090565b600181565b600080610d77611ae7565b9050610d84858285611d6c565b610d8f858585611e00565b60019150509392505050565b60006012905090565b6a52b7d2dcc80cd2e400000081565b610dbb611ef4565b80600160008463ffffffff1663ffffffff168152602001908152602001600020819055507f238399d427b947898edb290f5ff0f9109849b1c3ba196a42e35f00c50a54b98b8282604051610e1092919061408e565b60405180910390a15050565b610e24613165565b6000610e4b84604001358560600135866000016020810190610e469190613ccf565b611b01565b915050600080610e5b8684611f7b565b91509150610e7d866000016020810190610e759190613ccf565b838388612131565b935050505092915050565b600030905090565b6003602052816000526040600020602052806000526040600020600091509150508054610ebc9061401f565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee89061401f565b8015610f355780601f10610f0a57610100808354040283529160200191610f35565b820191906000526020600020905b815481529060010190602001808311610f1857829003601f168201915b505050505081565b600081600160008563ffffffff1663ffffffff1681526020019081526020016000205414905092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610f95611ef4565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff0be4f1e87349231d80c36b33f9e8639658eeaf474014dee15a3e6a4d441419781604051611005919061360c565b60405180910390a150565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b611061611ef4565b61106b6000612214565b565b600092915050565b60006006905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600980546110b69061401f565b80601f01602080910402602001604051908101604052809291908181526020018280546110e29061401f565b801561112f5780601f106111045761010080835404028352916020019161112f565b820191906000526020600020905b81548152906001019060200180831161111257829003601f168201915b5050505050905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b600090565b60008061116d611ae7565b905061117a818585611e00565b600191505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600030905090565b6111bb611ef4565b60005b828290508110156112f8576112058383838181106111df576111de6140b7565b5b90506020028101906111f191906140f5565b8060400190611200919061411d565b6122d8565b828282818110611218576112176140b7565b5b905060200281019061122a91906140f5565b8060400190611239919061411d565b600360008686868181106112505761124f6140b7565b5b905060200281019061126291906140f5565b60000160208101906112749190613ccf565b63ffffffff1663ffffffff16815260200190815260200160002060008686868181106112a3576112a26140b7565b5b90506020028101906112b591906140f5565b60200160208101906112c79190614180565b61ffff1661ffff16815260200190815260200160002091826112ea92919061435a565b5080806001019150506111be565b507fbe4864a8e820971c0247f5992e2da559595f7bf076a21cb5928d443d2a13b674828260405161132a929190614677565b60405180910390a15050565b60016020528060005260406000206000915090505481565b60606000600360008763ffffffff1663ffffffff16815260200190815260200160002060008661ffff1661ffff16815260200190815260200160002080546113959061401f565b80601f01602080910402602001604051908101604052809291908181526020018280546113c19061401f565b801561140e5780601f106113e35761010080835404028352916020019161140e565b820191906000526020600020905b8154815290600101906020018083116113f157829003601f168201915b50505050509050600081510361146b5783838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050915050611510565b6000848490500361147f5780915050611510565b600284849050106114d15761149484846122d8565b80848460029080926114a8939291906146a5565b6040516020016114ba93929190614741565b604051602081830303815290604052915050611510565b83836040517f9a6d49cd000000000000000000000000000000000000000000000000000000008152600401611507929190614794565b60405180910390fd5b949350505050565b60005b82829050811015611640573683838381811061153a576115396140b7565b5b905060200281019061154c91906147b8565b90506115748160000160000160208101906115679190613ccf565b8260000160200135610f3d565b61157e5750611633565b3073ffffffffffffffffffffffffffffffffffffffff1663d045a0dc8260c00135836000018460a00135858061010001906115b9919061411d565b8760e00160208101906115cc9190613be4565b888061012001906115dd919061411d565b6040518963ffffffff1660e01b81526004016115ff9796959493929190614895565b6000604051808303818588803b15801561161857600080fd5b505af115801561162c573d6000803e3d6000fd5b5050505050505b808060010191505061151b565b503373ffffffffffffffffffffffffffffffffffffffff16638e9e70996040518163ffffffff1660e01b8152600401600060405180830381865afa15801561168c573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906116b591906149ec565b6040517f8351eea70000000000000000000000000000000000000000000000000000000081526004016116e89190613b48565b60405180910390fd5b6116f961317f565b611701613131565b600080611729876040013588606001358960000160208101906117249190613ccf565b612352565b9150915060008061173a8984611f7b565b9150915061176d8960000160208101906117549190613ccf565b83838b8036038101906117679190614a8a565b8b61237a565b955060405180604001604052808581526020018481525094503373ffffffffffffffffffffffffffffffffffffffff1686600001517f85496b760a4b7f8d66384b9df21b381f5d1b1e79f229a47aaf4c232edc2fe59a8b60000160208101906117d69190613ccf565b87876040516117e793929190614ab7565b60405180910390a350505050935093915050565b611803611ef4565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ca5eb5e1826040518263ffffffff1660e01b815260040161185c919061360c565b600060405180830381600087803b15801561187657600080fd5b505af115801561188a573d6000803e3d6000fd5b5050505050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146118f6576040517f14d4a4e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61190587878787878787612496565b50505050505050565b611916611ef4565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd48d879cef83a1c0bdda516f27b13ddb1b3f8bbac1c9e1511bb2a659c242776081604051611986919061360c565b60405180910390a150565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b611a20611ef4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611a925760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401611a89919061360c565b60405180910390fd5b611a9b81612214565b50565b600030905090565b6000816020013560016000846000016020810190611ac49190613ccf565b63ffffffff1663ffffffff16815260200190815260200160002054149050919050565b600033905090565b611afc83838360016124ae565b505050565b600080611b0d85612685565b915081905083811015611b595780846040517f71c4efed000000000000000000000000000000000000000000000000000000008152600401611b50929190614aee565b60405180910390fd5b935093915050565b600080600160008463ffffffff1663ffffffff1681526020019081526020016000205490506000801b8103611bcd57826040517ff6ff4fb7000000000000000000000000000000000000000000000000000000008152600401611bc49190614b17565b60405180910390fd5b80915050919050565b6000611bea611be587876126e5565b612711565b90506000611c1c82611c04611bff8a8a61271e565b612750565b8b6000016020810190611c179190613ccf565b61278f565b9050611c2887876127fd565b15611cfe576000611c688a6040016020810190611c459190614b32565b8b6000016020810190611c589190613ccf565b84611c638c8c612811565b612874565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637cb59012848b6000856040518563ffffffff1660e01b8152600401611cca9493929190614b9a565b600060405180830381600087803b158015611ce457600080fd5b505af1158015611cf8573d6000803e3d6000fd5b50505050505b8173ffffffffffffffffffffffffffffffffffffffff16887fefed6d3500546b29533b128a29e3a94d70788727f0507505ac12eaf2e578fd9c8b6000016020810190611d4a9190613ccf565b84604051611d59929190614be6565b60405180910390a3505050505050505050565b6000611d788484611991565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611dfa5781811015611dea578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401611de193929190614c0f565b60405180910390fd5b611df9848484840360006124ae565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611e725760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401611e69919061360c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611ee45760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401611edb919061360c565b60405180910390fd5b611eef8383836128a6565b505050565b611efc611ae7565b73ffffffffffffffffffffffffffffffffffffffff16611f1a61107e565b73ffffffffffffffffffffffffffffffffffffffff1614611f7957611f3d611ae7565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611f70919061360c565b60405180910390fd5b565b6060806000611fe98560200135611f9186612ace565b878060a00190611fa1919061411d565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612b03565b8092508194505050600081611fff576001612002565b60025b905061203086600001602081019061201a9190613ccf565b8288806080019061202b919061411d565b61134e565b9250600073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461212857600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663043a78eb85856040518363ffffffff1660e01b81526004016120e5929190614c46565b602060405180830381865afa158015612102573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121269190614c92565b505b50509250929050565b612139613165565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ddc28c586040518060a001604052808863ffffffff16815260200161219589611b61565b8152602001878152602001868152602001851515815250306040518363ffffffff1660e01b81526004016121ca929190614d84565b6040805180830381865afa1580156121e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061220a9190614e19565b9050949350505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600082826000906002926122ee939291906146a5565b906122f99190614e72565b60f01c9050600361ffff168161ffff161461234d5782826040517f9a6d49cd000000000000000000000000000000000000000000000000000000008152600401612344929190614794565b60405180910390fd5b505050565b600080612360858585611b01565b80925081935050506123723383612b72565b935093915050565b61238261317f565b60006123918460000151612bf4565b90506000846020015111156123ae576123ad8460200151612c42565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632637a450826040518060a001604052808b63ffffffff16815260200161240b8c611b61565b81526020018a815260200189815260200160008960200151111515815250866040518463ffffffff1660e01b8152600401612447929190614d84565b60806040518083038185885af1158015612465573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061248a9190614f5f565b91505095945050505050565b6124a587878787878787611bd6565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036125205760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401612517919061360c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036125925760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401612589919061360c565b60405180910390fd5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550801561267f578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516126769190613894565b60405180910390a35b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000836126d49190614fea565b6126de919061501b565b9050919050565b60008282600090602060ff16926126fe939291906146a5565b90612709919061505d565b905092915050565b60008160001c9050919050565b60008282602060ff1690602860ff169261273a939291906146a5565b9061274591906150e8565b60c01c905092915050565b60007f00000000000000000000000000000000000000000000000000000000000000008267ffffffffffffffff16612788919061501b565b9050919050565b60006a52b7d2dcc80cd2e4000000836127a6610d5d565b6127b09190615147565b11156127e8576040517f8a164f6300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6127f484846000612d8c565b90509392505050565b6000602860ff168383905011905092915050565b60608282602860ff16908092612829939291906146a5565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905092915050565b60608484848460405160200161288d9493929190615208565b6040516020818303038152906040529050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036128f85780600760008282546128ec9190615147565b925050819055506129cd565b6000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015612985578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161297c93929190614c0f565b60405180910390fd5b818103600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612a165780600760008282540392505081905550612a64565b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612ac19190613894565b60405180910390a3505050565b60007f000000000000000000000000000000000000000000000000000000000000000082612afc9190614fea565b9050919050565b6060600080835111905080612b39578484604051602001612b25929190615273565b604051602081830303815290604052612b68565b8484612b4433612da2565b85604051602001612b58949392919061529f565b6040516020818303038152906040525b9150935093915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612be45760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401612bdb919061360c565b60405180910390fd5b612bf0826000836128a6565b5050565b6000813414612c3a57346040517f9f704120000000000000000000000000000000000000000000000000000000008152600401612c319190613894565b60405180910390fd5b819050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4fe1d946040518163ffffffff1660e01b8152600401602060405180830381865afa158015612caf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cd391906152fe565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612d3b576040517f5373352a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612d88337f0000000000000000000000000000000000000000000000000000000000000000848473ffffffffffffffffffffffffffffffffffffffff16612dc5909392919063ffffffff16565b5050565b6000612d988484612e47565b8290509392505050565b60008173ffffffffffffffffffffffffffffffffffffffff1660001b9050919050565b612e41848573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401612dfa9392919061532b565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612ec9565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612eb95760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401612eb0919061360c565b60405180910390fd5b612ec5600083836128a6565b5050565b6000612ef4828473ffffffffffffffffffffffffffffffffffffffff16612f6090919063ffffffff16565b90506000815114158015612f19575080806020019051810190612f179190614c92565b155b15612f5b57826040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401612f52919061360c565b60405180910390fd5b505050565b6060612f6e83836000612f76565b905092915050565b606081471015612fbd57306040517fcd786059000000000000000000000000000000000000000000000000000000008152600401612fb4919061360c565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168486604051612fe69190615362565b60006040518083038185875af1925050503d8060008114613023576040519150601f19603f3d011682016040523d82523d6000602084013e613028565b606091505b5091509150613038868383613043565b925050509392505050565b60608261305857613053826130d2565b6130ca565b60008251148015613080575060008473ffffffffffffffffffffffffffffffffffffffff163b145b156130c257836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016130b9919061360c565b60405180910390fd5b8190506130cb565b5b9392505050565b6000815111156130e55780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001606081525090565b604051806040016040528060008152602001600081525090565b604051806060016040528060008019168152602001600067ffffffffffffffff1681526020016131ad613165565b81525090565b600081519050919050565b600082825260208201905092915050565b60005b838110156131ed5780820151818401526020810190506131d2565b60008484015250505050565b6000601f19601f8301169050919050565b6000613215826131b3565b61321f81856131be565b935061322f8185602086016131cf565b613238816131f9565b840191505092915050565b6000602082019050818103600083015261325d818461320a565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006132a482613279565b9050919050565b6132b481613299565b81146132bf57600080fd5b50565b6000813590506132d1816132ab565b92915050565b6000819050919050565b6132ea816132d7565b81146132f557600080fd5b50565b600081359050613307816132e1565b92915050565b600080604083850312156133245761332361326f565b5b6000613332858286016132c2565b9250506020613343858286016132f8565b9150509250929050565b60008115159050919050565b6133628161334d565b82525050565b600060208201905061337d6000830184613359565b92915050565b600080fd5b600060e0828403121561339e5761339d613383565b5b81905092915050565b6000602082840312156133bd576133bc61326f565b5b600082013567ffffffffffffffff8111156133db576133da613274565b5b6133e784828501613388565b91505092915050565b6133f9816132d7565b82525050565b60408201600082015161341560008501826133f0565b50602082015161342860208501826133f0565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b61346d8161345a565b82525050565b600082825260208201905092915050565b600061348f826131b3565b6134998185613473565b93506134a98185602086016131cf565b6134b2816131f9565b840191505092915050565b60006040830160008301516134d56000860182613464565b50602083015184820360208601526134ed8282613484565b9150508091505092915050565b600061350683836134bd565b905092915050565b6000602082019050919050565b60006135268261342e565b6135308185613439565b9350836020820285016135428561344a565b8060005b8581101561357e578484038952815161355f85826134fa565b945061356a8361350e565b925060208a01995050600181019050613546565b50829750879550505050505092915050565b6040820160008201516135a660008501826133f0565b5060208201516135b960208501826133f0565b50505050565b600060a0820190506135d460008301866133ff565b81810360408301526135e6818561351b565b90506135f56060830184613590565b949350505050565b61360681613299565b82525050565b600060208201905061362160008301846135fd565b92915050565b60006060828403121561363d5761363c613383565b5b81905092915050565b6000819050919050565b61365981613646565b811461366457600080fd5b50565b60008135905061367681613650565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126136a1576136a061367c565b5b8235905067ffffffffffffffff8111156136be576136bd613681565b5b6020830191508360018202830111156136da576136d9613686565b5b9250929050565b600080600080600080600060e0888a031215613700576136ff61326f565b5b600061370e8a828b01613627565b975050606061371f8a828b01613667565b965050608088013567ffffffffffffffff8111156137405761373f613274565b5b61374c8a828b0161368b565b955095505060a061375f8a828b016132c2565b93505060c088013567ffffffffffffffff8111156137805761377f613274565b5b61378c8a828b0161368b565b925092505092959891949750929550565b600061ffff82169050919050565b6137b48161379d565b82525050565b60006020820190506137cf60008301846137ab565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61380a816137d5565b82525050565b600067ffffffffffffffff82169050919050565b61382d81613810565b82525050565b60006040820190506138486000830185613801565b6138556020830184613824565b9392505050565b60006040820190506138716000830185613824565b61387e6020830184613824565b9392505050565b61388e816132d7565b82525050565b60006020820190506138a96000830184613885565b92915050565b6000806000606084860312156138c8576138c761326f565b5b60006138d6868287016132c2565b93505060206138e7868287016132c2565b92505060406138f8868287016132f8565b9150509250925092565b600060ff82169050919050565b61391881613902565b82525050565b6000602082019050613933600083018461390f565b92915050565b600063ffffffff82169050919050565b61395281613939565b811461395d57600080fd5b50565b60008135905061396f81613949565b92915050565b6000806040838503121561398c5761398b61326f565b5b600061399a85828601613960565b92505060206139ab85828601613667565b9150509250929050565b6139be8161334d565b81146139c957600080fd5b50565b6000813590506139db816139b5565b92915050565b600080604083850312156139f8576139f761326f565b5b600083013567ffffffffffffffff811115613a1657613a15613274565b5b613a2285828601613388565b9250506020613a33858286016139cc565b9150509250929050565b604082016000820151613a5360008501826133f0565b506020820151613a6660208501826133f0565b50505050565b6000604082019050613a816000830184613a3d565b92915050565b613a908161379d565b8114613a9b57600080fd5b50565b600081359050613aad81613a87565b92915050565b60008060408385031215613aca57613ac961326f565b5b6000613ad885828601613960565b9250506020613ae985828601613a9e565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000613b1a82613af3565b613b248185613afe565b9350613b348185602086016131cf565b613b3d816131f9565b840191505092915050565b60006020820190508181036000830152613b628184613b0f565b905092915050565b6000819050919050565b6000613b8f613b8a613b8584613279565b613b6a565b613279565b9050919050565b6000613ba182613b74565b9050919050565b6000613bb382613b96565b9050919050565b613bc381613ba8565b82525050565b6000602082019050613bde6000830184613bba565b92915050565b600060208284031215613bfa57613bf961326f565b5b6000613c08848285016132c2565b91505092915050565b6000602082019050613c266000830184613824565b92915050565b60008083601f840112613c4257613c4161367c565b5b8235905067ffffffffffffffff811115613c5f57613c5e613681565b5b602083019150836020820283011115613c7b57613c7a613686565b5b9250929050565b60008060208385031215613c9957613c9861326f565b5b600083013567ffffffffffffffff811115613cb757613cb6613274565b5b613cc385828601613c2c565b92509250509250929050565b600060208284031215613ce557613ce461326f565b5b6000613cf384828501613960565b91505092915050565b613d0581613646565b82525050565b6000602082019050613d206000830184613cfc565b92915050565b60008060008060608587031215613d4057613d3f61326f565b5b6000613d4e87828801613960565b9450506020613d5f87828801613a9e565b935050604085013567ffffffffffffffff811115613d8057613d7f613274565b5b613d8c8782880161368b565b925092505092959194509250565b60008083601f840112613db057613daf61367c565b5b8235905067ffffffffffffffff811115613dcd57613dcc613681565b5b602083019150836020820283011115613de957613de8613686565b5b9250929050565b60008060208385031215613e0757613e0661326f565b5b600083013567ffffffffffffffff811115613e2557613e24613274565b5b613e3185828601613d9a565b92509250509250929050565b600060408284031215613e5357613e52613383565b5b81905092915050565b600080600060808486031215613e7557613e7461326f565b5b600084013567ffffffffffffffff811115613e9357613e92613274565b5b613e9f86828701613388565b9350506020613eb086828701613e3d565b9250506060613ec1868287016132c2565b9150509250925092565b613ed481613646565b82525050565b613ee381613810565b82525050565b604082016000820151613eff60008501826133f0565b506020820151613f1260208501826133f0565b50505050565b608082016000820151613f2e6000850182613ecb565b506020820151613f416020850182613eda565b506040820151613f546040850182613ee9565b50505050565b600060c082019050613f6f6000830185613f18565b613f7c6080830184613590565b9392505050565b60008060408385031215613f9a57613f9961326f565b5b6000613fa8858286016132c2565b9250506020613fb9858286016132c2565b9150509250929050565b600060608284031215613fd957613fd861326f565b5b6000613fe784828501613627565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061403757607f821691505b60208210810361404a57614049613ff0565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61408881613939565b82525050565b60006040820190506140a3600083018561407f565b6140b06020830184613cfc565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b600082356001606003833603038112614111576141106140e6565b5b80830191505092915050565b6000808335600160200384360303811261413a576141396140e6565b5b80840192508235915067ffffffffffffffff82111561415c5761415b6140eb565b5b602083019250600182023603831315614178576141776140f0565b5b509250929050565b6000602082840312156141965761419561326f565b5b60006141a484828501613a9e565b91505092915050565b600082905092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261421a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826141dd565b61422486836141dd565b95508019841693508086168417925050509392505050565b600061425761425261424d846132d7565b613b6a565b6132d7565b9050919050565b6000819050919050565b6142718361423c565b61428561427d8261425e565b8484546141ea565b825550505050565b600090565b61429a61428d565b6142a5818484614268565b505050565b5b818110156142c9576142be600082614292565b6001810190506142ab565b5050565b601f82111561430e576142df816141b8565b6142e8846141cd565b810160208510156142f7578190505b61430b614303856141cd565b8301826142aa565b50505b505050565b600082821c905092915050565b600061433160001984600802614313565b1980831691505092915050565b600061434a8383614320565b9150826002028217905092915050565b61436483836141ad565b67ffffffffffffffff81111561437d5761437c614050565b5b614387825461401f565b6143928282856142cd565b6000601f8311600181146143c157600084156143af578287013590505b6143b9858261433e565b865550614421565b601f1984166143cf866141b8565b60005b828110156143f7578489013582556001820191506020850194506020810190506143d2565b868310156144145784890135614410601f891682614320565b8355505b6001600288020188555050505b50505050505050565b600082825260208201905092915050565b6000819050919050565b60006144546020840184613960565b905092915050565b61446581613939565b82525050565b600061447a6020840184613a9e565b905092915050565b61448b8161379d565b82525050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126144bd576144bc61449b565b5b83810192508235915060208301925067ffffffffffffffff8211156144e5576144e4614491565b5b6001820236038313156144fb576144fa614496565b5b509250929050565b600082825260208201905092915050565b82818337600083830152505050565b600061452f8385614503565b935061453c838584614514565b614545836131f9565b840190509392505050565b6000606083016145636000840184614445565b614570600086018261445c565b5061457e602084018461446b565b61458b6020860182614482565b5061459960408401846144a0565b85830360408701526145ac838284614523565b925050508091505092915050565b60006145c68383614550565b905092915050565b6000823560016060038336030381126145ea576145e961449b565b5b82810191505092915050565b6000602082019050919050565b600061460f838561442a565b9350836020840285016146218461443b565b8060005b8781101561466557848403895261463c82846145ce565b61464685826145ba565b9450614651836145f6565b925060208a01995050600181019050614625565b50829750879450505050509392505050565b60006020820190508181036000830152614692818486614603565b90509392505050565b600080fd5b600080fd5b600080858511156146b9576146b861469b565b5b838611156146ca576146c96146a0565b5b6001850283019150848603905094509492505050565b600081905092915050565b60006146f682613af3565b61470081856146e0565b93506147108185602086016131cf565b80840191505092915050565b600061472883856146e0565b9350614735838584614514565b82840190509392505050565b600061474d82866146eb565b915061475a82848661471c565b9150819050949350505050565b60006147738385613afe565b9350614780838584614514565b614789836131f9565b840190509392505050565b600060208201905081810360008301526147af818486614767565b90509392505050565b600082356001610140038336030381126147d5576147d46140e6565b5b80830191505092915050565b60006147f06020840184613667565b905092915050565b61480181613810565b811461480c57600080fd5b50565b60008135905061481e816147f8565b92915050565b6000614833602084018461480f565b905092915050565b6060820161484c6000830183614445565b614859600085018261445c565b5061486760208301836147e1565b6148746020850182613ecb565b506148826040830183614824565b61488f6040850182613eda565b50505050565b600060e0820190506148aa600083018a61483b565b6148b76060830189613cfc565b81810360808301526148ca818789614767565b90506148d960a08301866135fd565b81810360c08301526148ec818486614767565b905098975050505050505050565b600080fd5b614908826131f9565b810181811067ffffffffffffffff8211171561492757614926614050565b5b80604052505050565b600061493a613265565b905061494682826148ff565b919050565b600067ffffffffffffffff82111561496657614965614050565b5b61496f826131f9565b9050602081019050919050565b600061498f61498a8461494b565b614930565b9050828152602081018484840111156149ab576149aa6148fa565b5b6149b68482856131cf565b509392505050565b600082601f8301126149d3576149d261367c565b5b81516149e384826020860161497c565b91505092915050565b600060208284031215614a0257614a0161326f565b5b600082015167ffffffffffffffff811115614a2057614a1f613274565b5b614a2c848285016149be565b91505092915050565b600080fd5b600060408284031215614a5057614a4f614a35565b5b614a5a6040614930565b90506000614a6a848285016132f8565b6000830152506020614a7e848285016132f8565b60208301525092915050565b600060408284031215614aa057614a9f61326f565b5b6000614aae84828501614a3a565b91505092915050565b6000606082019050614acc600083018661407f565b614ad96020830185613885565b614ae66040830184613885565b949350505050565b6000604082019050614b036000830185613885565b614b106020830184613885565b9392505050565b6000602082019050614b2c600083018461407f565b92915050565b600060208284031215614b4857614b4761326f565b5b6000614b568482850161480f565b91505092915050565b6000819050919050565b6000614b84614b7f614b7a84614b5f565b613b6a565b61379d565b9050919050565b614b9481614b69565b82525050565b6000608082019050614baf60008301876135fd565b614bbc6020830186613cfc565b614bc96040830185614b8b565b8181036060830152614bdb8184613b0f565b905095945050505050565b6000604082019050614bfb600083018561407f565b614c086020830184613885565b9392505050565b6000606082019050614c2460008301866135fd565b614c316020830185613885565b614c3e6040830184613885565b949350505050565b60006040820190508181036000830152614c608185613b0f565b90508181036020830152614c748184613b0f565b90509392505050565b600081519050614c8c816139b5565b92915050565b600060208284031215614ca857614ca761326f565b5b6000614cb684828501614c7d565b91505092915050565b6000614cca82613af3565b614cd48185614503565b9350614ce48185602086016131cf565b614ced816131f9565b840191505092915050565b614d018161334d565b82525050565b600060a083016000830151614d1f600086018261445c565b506020830151614d326020860182613ecb565b5060408301518482036040860152614d4a8282614cbf565b91505060608301518482036060860152614d648282614cbf565b9150506080830151614d796080860182614cf8565b508091505092915050565b60006040820190508181036000830152614d9e8185614d07565b9050614dad60208301846135fd565b9392505050565b600081519050614dc3816132e1565b92915050565b600060408284031215614ddf57614dde614a35565b5b614de96040614930565b90506000614df984828501614db4565b6000830152506020614e0d84828501614db4565b60208301525092915050565b600060408284031215614e2f57614e2e61326f565b5b6000614e3d84828501614dc9565b91505092915050565b60007fffff00000000000000000000000000000000000000000000000000000000000082169050919050565b6000614e7e83836141ad565b82614e898135614e46565b92506002821015614ec957614ec47fffff000000000000000000000000000000000000000000000000000000000000836002036008026141dd565b831692505b505092915050565b600081519050614ee081613650565b92915050565b600081519050614ef5816147f8565b92915050565b600060808284031215614f1157614f10614a35565b5b614f1b6060614930565b90506000614f2b84828501614ed1565b6000830152506020614f3f84828501614ee6565b6020830152506040614f5384828501614dc9565b60408301525092915050565b600060808284031215614f7557614f7461326f565b5b6000614f8384828501614efb565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614ff5826132d7565b9150615000836132d7565b9250826150105761500f614f8c565b5b828204905092915050565b6000615026826132d7565b9150615031836132d7565b925082820261503f816132d7565b9150828204841483151761505657615055614fbb565b5b5092915050565b600061506983836141ad565b826150748135613646565b925060208210156150b4576150af7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff836020036008026141dd565b831692505b505092915050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b60006150f483836141ad565b826150ff81356150bc565b9250600882101561513f5761513a7fffffffffffffffff000000000000000000000000000000000000000000000000836008036008026141dd565b831692505b505092915050565b6000615152826132d7565b915061515d836132d7565b925082820190508082111561517557615174614fbb565b5b92915050565b60008160c01b9050919050565b60006151938261517b565b9050919050565b6151ab6151a682613810565b615188565b82525050565b60008160e01b9050919050565b60006151c9826151b1565b9050919050565b6151e16151dc82613939565b6151be565b82525050565b6000819050919050565b6152026151fd826132d7565b6151e7565b82525050565b6000615214828761519a565b60088201915061522482866151d0565b60048201915061523482856151f1565b60208201915061524482846146eb565b915081905095945050505050565b6000819050919050565b61526d61526882613646565b615252565b82525050565b600061527f828561525c565b60208201915061528f828461519a565b6008820191508190509392505050565b60006152ab828761525c565b6020820191506152bb828661519a565b6008820191506152cb828561525c565b6020820191506152db82846146eb565b915081905095945050505050565b6000815190506152f8816132ab565b92915050565b6000602082840312156153145761531361326f565b5b6000615322848285016152e9565b91505092915050565b600060608201905061534060008301866135fd565b61534d60208301856135fd565b61535a6040830184613885565b949350505050565b600061536e82846146eb565b91508190509291505056fea26469706673582212204001969c4b1e2478f52d0ed991c0790cc8f06f77c798e9ce06301cdfda23e52064736f6c63430008180033",
  deployedBytecode:
    "0x60806040526004361061025c5760003560e01c8063715018a611610144578063bb0b6a53116100b6578063d045a0dc1161007a578063d045a0dc1461092e578063d42438851461094a578063dd62ed3e14610973578063f2fde38b146109b0578063fc0c546a146109d9578063ff7bd03d14610a045761025c565b8063bb0b6a531461083e578063bc70b3541461087b578063bd815db0146108b8578063c7c7f5b3146108d4578063ca5eb5e1146109055761025c565b8063963efcaa11610108578063963efcaa1461072c5780639f68b96414610757578063a9059cbb14610782578063b731ea0a146107bf578063b92d0eff146107ea578063b98bd070146108155761025c565b8063715018a6146106575780637d25a05e1461066e578063857749b0146106ab5780638da5cb5b146106d657806395d89b41146107015761025c565b806323b872dd116101dd57806352ae2879116101a157806352ae2879146105215780635535d4611461054c5780635a0dfe4d146105895780635e280f11146105c65780636fc1b31e146105f157806370a082311461061a5761025c565b806323b872dd14610428578063313ce5671461046557806332cb6b0c146104905780633400288b146104bb5780633b6f743b146104e45761025c565b8063134d4f2511610224578063134d4f251461034f578063156a0d0f1461037a57806317442b70146103a657806318160ddd146103d25780631f5e1334146103fd5761025c565b806306fdde0314610261578063095ea7b31461028c5780630d35b415146102c9578063111ecdad1461030857806313137d6514610333575b600080fd5b34801561026d57600080fd5b50610276610a41565b6040516102839190613243565b60405180910390f35b34801561029857600080fd5b506102b360048036038101906102ae919061330d565b610ad3565b6040516102c09190613368565b60405180910390f35b3480156102d557600080fd5b506102f060048036038101906102eb91906133a7565b610af6565b6040516102ff939291906135bf565b60405180910390f35b34801561031457600080fd5b5061031d610bd4565b60405161032a919061360c565b60405180910390f35b61034d600480360381019061034891906136e1565b610bfa565b005b34801561035b57600080fd5b50610364610d1c565b60405161037191906137ba565b60405180910390f35b34801561038657600080fd5b5061038f610d21565b60405161039d929190613833565b60405180910390f35b3480156103b257600080fd5b506103bb610d4f565b6040516103c992919061385c565b60405180910390f35b3480156103de57600080fd5b506103e7610d5d565b6040516103f49190613894565b60405180910390f35b34801561040957600080fd5b50610412610d67565b60405161041f91906137ba565b60405180910390f35b34801561043457600080fd5b5061044f600480360381019061044a91906138af565b610d6c565b60405161045c9190613368565b60405180910390f35b34801561047157600080fd5b5061047a610d9b565b604051610487919061391e565b60405180910390f35b34801561049c57600080fd5b506104a5610da4565b6040516104b29190613894565b60405180910390f35b3480156104c757600080fd5b506104e260048036038101906104dd9190613975565b610db3565b005b3480156104f057600080fd5b5061050b600480360381019061050691906139e1565b610e1c565b6040516105189190613a6c565b60405180910390f35b34801561052d57600080fd5b50610536610e88565b604051610543919061360c565b60405180910390f35b34801561055857600080fd5b50610573600480360381019061056e9190613ab3565b610e90565b6040516105809190613b48565b60405180910390f35b34801561059557600080fd5b506105b060048036038101906105ab9190613975565b610f3d565b6040516105bd9190613368565b60405180910390f35b3480156105d257600080fd5b506105db610f69565b6040516105e89190613bc9565b60405180910390f35b3480156105fd57600080fd5b5061061860048036038101906106139190613be4565b610f8d565b005b34801561062657600080fd5b50610641600480360381019061063c9190613be4565b611010565b60405161064e9190613894565b60405180910390f35b34801561066357600080fd5b5061066c611059565b005b34801561067a57600080fd5b5061069560048036038101906106909190613975565b61106d565b6040516106a29190613c11565b60405180910390f35b3480156106b757600080fd5b506106c0611075565b6040516106cd919061391e565b60405180910390f35b3480156106e257600080fd5b506106eb61107e565b6040516106f8919061360c565b60405180910390f35b34801561070d57600080fd5b506107166110a7565b6040516107239190613243565b60405180910390f35b34801561073857600080fd5b50610741611139565b60405161074e9190613894565b60405180910390f35b34801561076357600080fd5b5061076c61115d565b6040516107799190613368565b60405180910390f35b34801561078e57600080fd5b506107a960048036038101906107a4919061330d565b611162565b6040516107b69190613368565b60405180910390f35b3480156107cb57600080fd5b506107d4611185565b6040516107e1919061360c565b60405180910390f35b3480156107f657600080fd5b506107ff6111ab565b60405161080c919061360c565b60405180910390f35b34801561082157600080fd5b5061083c60048036038101906108379190613c82565b6111b3565b005b34801561084a57600080fd5b5061086560048036038101906108609190613ccf565b611336565b6040516108729190613d0b565b60405180910390f35b34801561088757600080fd5b506108a2600480360381019061089d9190613d26565b61134e565b6040516108af9190613b48565b60405180910390f35b6108d260048036038101906108cd9190613df0565b611518565b005b6108ee60048036038101906108e99190613e5c565b6116f1565b6040516108fc929190613f5a565b60405180910390f35b34801561091157600080fd5b5061092c60048036038101906109279190613be4565b6117fb565b005b610948600480360381019061094391906136e1565b611891565b005b34801561095657600080fd5b50610971600480360381019061096c9190613be4565b61190e565b005b34801561097f57600080fd5b5061099a60048036038101906109959190613f83565b611991565b6040516109a79190613894565b60405180910390f35b3480156109bc57600080fd5b506109d760048036038101906109d29190613be4565b611a18565b005b3480156109e557600080fd5b506109ee611a9e565b6040516109fb919061360c565b60405180910390f35b348015610a1057600080fd5b50610a2b6004803603810190610a269190613fc3565b611aa6565b604051610a389190613368565b60405180910390f35b606060088054610a509061401f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a7c9061401f565b8015610ac95780601f10610a9e57610100808354040283529160200191610ac9565b820191906000526020600020905b815481529060010190602001808311610aac57829003601f168201915b5050505050905090565b600080610ade611ae7565b9050610aeb818585611aef565b600191505092915050565b610afe613117565b6060610b08613131565b60008067ffffffffffffffff801690506040518060400160405280838152602001828152509450600067ffffffffffffffff811115610b4a57610b49614050565b5b604051908082528060200260200182016040528015610b8357816020015b610b7061314b565b815260200190600190039081610b685790505b509350600080610bae886040013589606001358a6000016020810190610ba99190613ccf565b611b01565b915091506040518060400160405280838152602001828152509450505050509193909250565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610c8a57336040517f91ac5e4f000000000000000000000000000000000000000000000000000000008152600401610c81919061360c565b60405180910390fd5b8660200135610caa886000016020810190610ca59190613ccf565b611b61565b14610d0457866000016020810190610cc29190613ccf565b87602001356040517fc26bebcc000000000000000000000000000000000000000000000000000000008152600401610cfb92919061408e565b60405180910390fd5b610d1387878787878787611bd6565b50505050505050565b600281565b6000807f02e49c2c000000000000000000000000000000000000000000000000000000006001915091509091565b600080600180915091509091565b6000600754905090565b600181565b600080610d77611ae7565b9050610d84858285611d6c565b610d8f858585611e00565b60019150509392505050565b60006012905090565b6a52b7d2dcc80cd2e400000081565b610dbb611ef4565b80600160008463ffffffff1663ffffffff168152602001908152602001600020819055507f238399d427b947898edb290f5ff0f9109849b1c3ba196a42e35f00c50a54b98b8282604051610e1092919061408e565b60405180910390a15050565b610e24613165565b6000610e4b84604001358560600135866000016020810190610e469190613ccf565b611b01565b915050600080610e5b8684611f7b565b91509150610e7d866000016020810190610e759190613ccf565b838388612131565b935050505092915050565b600030905090565b6003602052816000526040600020602052806000526040600020600091509150508054610ebc9061401f565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee89061401f565b8015610f355780601f10610f0a57610100808354040283529160200191610f35565b820191906000526020600020905b815481529060010190602001808311610f1857829003601f168201915b505050505081565b600081600160008563ffffffff1663ffffffff1681526020019081526020016000205414905092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610f95611ef4565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff0be4f1e87349231d80c36b33f9e8639658eeaf474014dee15a3e6a4d441419781604051611005919061360c565b60405180910390a150565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b611061611ef4565b61106b6000612214565b565b600092915050565b60006006905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600980546110b69061401f565b80601f01602080910402602001604051908101604052809291908181526020018280546110e29061401f565b801561112f5780601f106111045761010080835404028352916020019161112f565b820191906000526020600020905b81548152906001019060200180831161111257829003601f168201915b5050505050905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b600090565b60008061116d611ae7565b905061117a818585611e00565b600191505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600030905090565b6111bb611ef4565b60005b828290508110156112f8576112058383838181106111df576111de6140b7565b5b90506020028101906111f191906140f5565b8060400190611200919061411d565b6122d8565b828282818110611218576112176140b7565b5b905060200281019061122a91906140f5565b8060400190611239919061411d565b600360008686868181106112505761124f6140b7565b5b905060200281019061126291906140f5565b60000160208101906112749190613ccf565b63ffffffff1663ffffffff16815260200190815260200160002060008686868181106112a3576112a26140b7565b5b90506020028101906112b591906140f5565b60200160208101906112c79190614180565b61ffff1661ffff16815260200190815260200160002091826112ea92919061435a565b5080806001019150506111be565b507fbe4864a8e820971c0247f5992e2da559595f7bf076a21cb5928d443d2a13b674828260405161132a929190614677565b60405180910390a15050565b60016020528060005260406000206000915090505481565b60606000600360008763ffffffff1663ffffffff16815260200190815260200160002060008661ffff1661ffff16815260200190815260200160002080546113959061401f565b80601f01602080910402602001604051908101604052809291908181526020018280546113c19061401f565b801561140e5780601f106113e35761010080835404028352916020019161140e565b820191906000526020600020905b8154815290600101906020018083116113f157829003601f168201915b50505050509050600081510361146b5783838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050915050611510565b6000848490500361147f5780915050611510565b600284849050106114d15761149484846122d8565b80848460029080926114a8939291906146a5565b6040516020016114ba93929190614741565b604051602081830303815290604052915050611510565b83836040517f9a6d49cd000000000000000000000000000000000000000000000000000000008152600401611507929190614794565b60405180910390fd5b949350505050565b60005b82829050811015611640573683838381811061153a576115396140b7565b5b905060200281019061154c91906147b8565b90506115748160000160000160208101906115679190613ccf565b8260000160200135610f3d565b61157e5750611633565b3073ffffffffffffffffffffffffffffffffffffffff1663d045a0dc8260c00135836000018460a00135858061010001906115b9919061411d565b8760e00160208101906115cc9190613be4565b888061012001906115dd919061411d565b6040518963ffffffff1660e01b81526004016115ff9796959493929190614895565b6000604051808303818588803b15801561161857600080fd5b505af115801561162c573d6000803e3d6000fd5b5050505050505b808060010191505061151b565b503373ffffffffffffffffffffffffffffffffffffffff16638e9e70996040518163ffffffff1660e01b8152600401600060405180830381865afa15801561168c573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906116b591906149ec565b6040517f8351eea70000000000000000000000000000000000000000000000000000000081526004016116e89190613b48565b60405180910390fd5b6116f961317f565b611701613131565b600080611729876040013588606001358960000160208101906117249190613ccf565b612352565b9150915060008061173a8984611f7b565b9150915061176d8960000160208101906117549190613ccf565b83838b8036038101906117679190614a8a565b8b61237a565b955060405180604001604052808581526020018481525094503373ffffffffffffffffffffffffffffffffffffffff1686600001517f85496b760a4b7f8d66384b9df21b381f5d1b1e79f229a47aaf4c232edc2fe59a8b60000160208101906117d69190613ccf565b87876040516117e793929190614ab7565b60405180910390a350505050935093915050565b611803611ef4565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ca5eb5e1826040518263ffffffff1660e01b815260040161185c919061360c565b600060405180830381600087803b15801561187657600080fd5b505af115801561188a573d6000803e3d6000fd5b5050505050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146118f6576040517f14d4a4e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61190587878787878787612496565b50505050505050565b611916611ef4565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd48d879cef83a1c0bdda516f27b13ddb1b3f8bbac1c9e1511bb2a659c242776081604051611986919061360c565b60405180910390a150565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b611a20611ef4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611a925760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401611a89919061360c565b60405180910390fd5b611a9b81612214565b50565b600030905090565b6000816020013560016000846000016020810190611ac49190613ccf565b63ffffffff1663ffffffff16815260200190815260200160002054149050919050565b600033905090565b611afc83838360016124ae565b505050565b600080611b0d85612685565b915081905083811015611b595780846040517f71c4efed000000000000000000000000000000000000000000000000000000008152600401611b50929190614aee565b60405180910390fd5b935093915050565b600080600160008463ffffffff1663ffffffff1681526020019081526020016000205490506000801b8103611bcd57826040517ff6ff4fb7000000000000000000000000000000000000000000000000000000008152600401611bc49190614b17565b60405180910390fd5b80915050919050565b6000611bea611be587876126e5565b612711565b90506000611c1c82611c04611bff8a8a61271e565b612750565b8b6000016020810190611c179190613ccf565b61278f565b9050611c2887876127fd565b15611cfe576000611c688a6040016020810190611c459190614b32565b8b6000016020810190611c589190613ccf565b84611c638c8c612811565b612874565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637cb59012848b6000856040518563ffffffff1660e01b8152600401611cca9493929190614b9a565b600060405180830381600087803b158015611ce457600080fd5b505af1158015611cf8573d6000803e3d6000fd5b50505050505b8173ffffffffffffffffffffffffffffffffffffffff16887fefed6d3500546b29533b128a29e3a94d70788727f0507505ac12eaf2e578fd9c8b6000016020810190611d4a9190613ccf565b84604051611d59929190614be6565b60405180910390a3505050505050505050565b6000611d788484611991565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611dfa5781811015611dea578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401611de193929190614c0f565b60405180910390fd5b611df9848484840360006124ae565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611e725760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401611e69919061360c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611ee45760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401611edb919061360c565b60405180910390fd5b611eef8383836128a6565b505050565b611efc611ae7565b73ffffffffffffffffffffffffffffffffffffffff16611f1a61107e565b73ffffffffffffffffffffffffffffffffffffffff1614611f7957611f3d611ae7565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611f70919061360c565b60405180910390fd5b565b6060806000611fe98560200135611f9186612ace565b878060a00190611fa1919061411d565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612b03565b8092508194505050600081611fff576001612002565b60025b905061203086600001602081019061201a9190613ccf565b8288806080019061202b919061411d565b61134e565b9250600073ffffffffffffffffffffffffffffffffffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461212857600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663043a78eb85856040518363ffffffff1660e01b81526004016120e5929190614c46565b602060405180830381865afa158015612102573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121269190614c92565b505b50509250929050565b612139613165565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ddc28c586040518060a001604052808863ffffffff16815260200161219589611b61565b8152602001878152602001868152602001851515815250306040518363ffffffff1660e01b81526004016121ca929190614d84565b6040805180830381865afa1580156121e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061220a9190614e19565b9050949350505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600082826000906002926122ee939291906146a5565b906122f99190614e72565b60f01c9050600361ffff168161ffff161461234d5782826040517f9a6d49cd000000000000000000000000000000000000000000000000000000008152600401612344929190614794565b60405180910390fd5b505050565b600080612360858585611b01565b80925081935050506123723383612b72565b935093915050565b61238261317f565b60006123918460000151612bf4565b90506000846020015111156123ae576123ad8460200151612c42565b5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632637a450826040518060a001604052808b63ffffffff16815260200161240b8c611b61565b81526020018a815260200189815260200160008960200151111515815250866040518463ffffffff1660e01b8152600401612447929190614d84565b60806040518083038185885af1158015612465573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061248a9190614f5f565b91505095945050505050565b6124a587878787878787611bd6565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036125205760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401612517919061360c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036125925760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401612589919061360c565b60405180910390fd5b81600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550801561267f578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516126769190613894565b60405180910390a35b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000836126d49190614fea565b6126de919061501b565b9050919050565b60008282600090602060ff16926126fe939291906146a5565b90612709919061505d565b905092915050565b60008160001c9050919050565b60008282602060ff1690602860ff169261273a939291906146a5565b9061274591906150e8565b60c01c905092915050565b60007f00000000000000000000000000000000000000000000000000000000000000008267ffffffffffffffff16612788919061501b565b9050919050565b60006a52b7d2dcc80cd2e4000000836127a6610d5d565b6127b09190615147565b11156127e8576040517f8a164f6300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6127f484846000612d8c565b90509392505050565b6000602860ff168383905011905092915050565b60608282602860ff16908092612829939291906146a5565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905092915050565b60608484848460405160200161288d9493929190615208565b6040516020818303038152906040529050949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036128f85780600760008282546128ec9190615147565b925050819055506129cd565b6000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015612985578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161297c93929190614c0f565b60405180910390fd5b818103600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612a165780600760008282540392505081905550612a64565b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612ac19190613894565b60405180910390a3505050565b60007f000000000000000000000000000000000000000000000000000000000000000082612afc9190614fea565b9050919050565b6060600080835111905080612b39578484604051602001612b25929190615273565b604051602081830303815290604052612b68565b8484612b4433612da2565b85604051602001612b58949392919061529f565b6040516020818303038152906040525b9150935093915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612be45760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401612bdb919061360c565b60405180910390fd5b612bf0826000836128a6565b5050565b6000813414612c3a57346040517f9f704120000000000000000000000000000000000000000000000000000000008152600401612c319190613894565b60405180910390fd5b819050919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4fe1d946040518163ffffffff1660e01b8152600401602060405180830381865afa158015612caf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cd391906152fe565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612d3b576040517f5373352a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612d88337f0000000000000000000000000000000000000000000000000000000000000000848473ffffffffffffffffffffffffffffffffffffffff16612dc5909392919063ffffffff16565b5050565b6000612d988484612e47565b8290509392505050565b60008173ffffffffffffffffffffffffffffffffffffffff1660001b9050919050565b612e41848573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401612dfa9392919061532b565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612ec9565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612eb95760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401612eb0919061360c565b60405180910390fd5b612ec5600083836128a6565b5050565b6000612ef4828473ffffffffffffffffffffffffffffffffffffffff16612f6090919063ffffffff16565b90506000815114158015612f19575080806020019051810190612f179190614c92565b155b15612f5b57826040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401612f52919061360c565b60405180910390fd5b505050565b6060612f6e83836000612f76565b905092915050565b606081471015612fbd57306040517fcd786059000000000000000000000000000000000000000000000000000000008152600401612fb4919061360c565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168486604051612fe69190615362565b60006040518083038185875af1925050503d8060008114613023576040519150601f19603f3d011682016040523d82523d6000602084013e613028565b606091505b5091509150613038868383613043565b925050509392505050565b60608261305857613053826130d2565b6130ca565b60008251148015613080575060008473ffffffffffffffffffffffffffffffffffffffff163b145b156130c257836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016130b9919061360c565b60405180910390fd5b8190506130cb565b5b9392505050565b6000815111156130e55780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001606081525090565b604051806040016040528060008152602001600081525090565b604051806060016040528060008019168152602001600067ffffffffffffffff1681526020016131ad613165565b81525090565b600081519050919050565b600082825260208201905092915050565b60005b838110156131ed5780820151818401526020810190506131d2565b60008484015250505050565b6000601f19601f8301169050919050565b6000613215826131b3565b61321f81856131be565b935061322f8185602086016131cf565b613238816131f9565b840191505092915050565b6000602082019050818103600083015261325d818461320a565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006132a482613279565b9050919050565b6132b481613299565b81146132bf57600080fd5b50565b6000813590506132d1816132ab565b92915050565b6000819050919050565b6132ea816132d7565b81146132f557600080fd5b50565b600081359050613307816132e1565b92915050565b600080604083850312156133245761332361326f565b5b6000613332858286016132c2565b9250506020613343858286016132f8565b9150509250929050565b60008115159050919050565b6133628161334d565b82525050565b600060208201905061337d6000830184613359565b92915050565b600080fd5b600060e0828403121561339e5761339d613383565b5b81905092915050565b6000602082840312156133bd576133bc61326f565b5b600082013567ffffffffffffffff8111156133db576133da613274565b5b6133e784828501613388565b91505092915050565b6133f9816132d7565b82525050565b60408201600082015161341560008501826133f0565b50602082015161342860208501826133f0565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b61346d8161345a565b82525050565b600082825260208201905092915050565b600061348f826131b3565b6134998185613473565b93506134a98185602086016131cf565b6134b2816131f9565b840191505092915050565b60006040830160008301516134d56000860182613464565b50602083015184820360208601526134ed8282613484565b9150508091505092915050565b600061350683836134bd565b905092915050565b6000602082019050919050565b60006135268261342e565b6135308185613439565b9350836020820285016135428561344a565b8060005b8581101561357e578484038952815161355f85826134fa565b945061356a8361350e565b925060208a01995050600181019050613546565b50829750879550505050505092915050565b6040820160008201516135a660008501826133f0565b5060208201516135b960208501826133f0565b50505050565b600060a0820190506135d460008301866133ff565b81810360408301526135e6818561351b565b90506135f56060830184613590565b949350505050565b61360681613299565b82525050565b600060208201905061362160008301846135fd565b92915050565b60006060828403121561363d5761363c613383565b5b81905092915050565b6000819050919050565b61365981613646565b811461366457600080fd5b50565b60008135905061367681613650565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126136a1576136a061367c565b5b8235905067ffffffffffffffff8111156136be576136bd613681565b5b6020830191508360018202830111156136da576136d9613686565b5b9250929050565b600080600080600080600060e0888a031215613700576136ff61326f565b5b600061370e8a828b01613627565b975050606061371f8a828b01613667565b965050608088013567ffffffffffffffff8111156137405761373f613274565b5b61374c8a828b0161368b565b955095505060a061375f8a828b016132c2565b93505060c088013567ffffffffffffffff8111156137805761377f613274565b5b61378c8a828b0161368b565b925092505092959891949750929550565b600061ffff82169050919050565b6137b48161379d565b82525050565b60006020820190506137cf60008301846137ab565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61380a816137d5565b82525050565b600067ffffffffffffffff82169050919050565b61382d81613810565b82525050565b60006040820190506138486000830185613801565b6138556020830184613824565b9392505050565b60006040820190506138716000830185613824565b61387e6020830184613824565b9392505050565b61388e816132d7565b82525050565b60006020820190506138a96000830184613885565b92915050565b6000806000606084860312156138c8576138c761326f565b5b60006138d6868287016132c2565b93505060206138e7868287016132c2565b92505060406138f8868287016132f8565b9150509250925092565b600060ff82169050919050565b61391881613902565b82525050565b6000602082019050613933600083018461390f565b92915050565b600063ffffffff82169050919050565b61395281613939565b811461395d57600080fd5b50565b60008135905061396f81613949565b92915050565b6000806040838503121561398c5761398b61326f565b5b600061399a85828601613960565b92505060206139ab85828601613667565b9150509250929050565b6139be8161334d565b81146139c957600080fd5b50565b6000813590506139db816139b5565b92915050565b600080604083850312156139f8576139f761326f565b5b600083013567ffffffffffffffff811115613a1657613a15613274565b5b613a2285828601613388565b9250506020613a33858286016139cc565b9150509250929050565b604082016000820151613a5360008501826133f0565b506020820151613a6660208501826133f0565b50505050565b6000604082019050613a816000830184613a3d565b92915050565b613a908161379d565b8114613a9b57600080fd5b50565b600081359050613aad81613a87565b92915050565b60008060408385031215613aca57613ac961326f565b5b6000613ad885828601613960565b9250506020613ae985828601613a9e565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000613b1a82613af3565b613b248185613afe565b9350613b348185602086016131cf565b613b3d816131f9565b840191505092915050565b60006020820190508181036000830152613b628184613b0f565b905092915050565b6000819050919050565b6000613b8f613b8a613b8584613279565b613b6a565b613279565b9050919050565b6000613ba182613b74565b9050919050565b6000613bb382613b96565b9050919050565b613bc381613ba8565b82525050565b6000602082019050613bde6000830184613bba565b92915050565b600060208284031215613bfa57613bf961326f565b5b6000613c08848285016132c2565b91505092915050565b6000602082019050613c266000830184613824565b92915050565b60008083601f840112613c4257613c4161367c565b5b8235905067ffffffffffffffff811115613c5f57613c5e613681565b5b602083019150836020820283011115613c7b57613c7a613686565b5b9250929050565b60008060208385031215613c9957613c9861326f565b5b600083013567ffffffffffffffff811115613cb757613cb6613274565b5b613cc385828601613c2c565b92509250509250929050565b600060208284031215613ce557613ce461326f565b5b6000613cf384828501613960565b91505092915050565b613d0581613646565b82525050565b6000602082019050613d206000830184613cfc565b92915050565b60008060008060608587031215613d4057613d3f61326f565b5b6000613d4e87828801613960565b9450506020613d5f87828801613a9e565b935050604085013567ffffffffffffffff811115613d8057613d7f613274565b5b613d8c8782880161368b565b925092505092959194509250565b60008083601f840112613db057613daf61367c565b5b8235905067ffffffffffffffff811115613dcd57613dcc613681565b5b602083019150836020820283011115613de957613de8613686565b5b9250929050565b60008060208385031215613e0757613e0661326f565b5b600083013567ffffffffffffffff811115613e2557613e24613274565b5b613e3185828601613d9a565b92509250509250929050565b600060408284031215613e5357613e52613383565b5b81905092915050565b600080600060808486031215613e7557613e7461326f565b5b600084013567ffffffffffffffff811115613e9357613e92613274565b5b613e9f86828701613388565b9350506020613eb086828701613e3d565b9250506060613ec1868287016132c2565b9150509250925092565b613ed481613646565b82525050565b613ee381613810565b82525050565b604082016000820151613eff60008501826133f0565b506020820151613f1260208501826133f0565b50505050565b608082016000820151613f2e6000850182613ecb565b506020820151613f416020850182613eda565b506040820151613f546040850182613ee9565b50505050565b600060c082019050613f6f6000830185613f18565b613f7c6080830184613590565b9392505050565b60008060408385031215613f9a57613f9961326f565b5b6000613fa8858286016132c2565b9250506020613fb9858286016132c2565b9150509250929050565b600060608284031215613fd957613fd861326f565b5b6000613fe784828501613627565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061403757607f821691505b60208210810361404a57614049613ff0565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61408881613939565b82525050565b60006040820190506140a3600083018561407f565b6140b06020830184613cfc565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b600082356001606003833603038112614111576141106140e6565b5b80830191505092915050565b6000808335600160200384360303811261413a576141396140e6565b5b80840192508235915067ffffffffffffffff82111561415c5761415b6140eb565b5b602083019250600182023603831315614178576141776140f0565b5b509250929050565b6000602082840312156141965761419561326f565b5b60006141a484828501613a9e565b91505092915050565b600082905092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261421a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826141dd565b61422486836141dd565b95508019841693508086168417925050509392505050565b600061425761425261424d846132d7565b613b6a565b6132d7565b9050919050565b6000819050919050565b6142718361423c565b61428561427d8261425e565b8484546141ea565b825550505050565b600090565b61429a61428d565b6142a5818484614268565b505050565b5b818110156142c9576142be600082614292565b6001810190506142ab565b5050565b601f82111561430e576142df816141b8565b6142e8846141cd565b810160208510156142f7578190505b61430b614303856141cd565b8301826142aa565b50505b505050565b600082821c905092915050565b600061433160001984600802614313565b1980831691505092915050565b600061434a8383614320565b9150826002028217905092915050565b61436483836141ad565b67ffffffffffffffff81111561437d5761437c614050565b5b614387825461401f565b6143928282856142cd565b6000601f8311600181146143c157600084156143af578287013590505b6143b9858261433e565b865550614421565b601f1984166143cf866141b8565b60005b828110156143f7578489013582556001820191506020850194506020810190506143d2565b868310156144145784890135614410601f891682614320565b8355505b6001600288020188555050505b50505050505050565b600082825260208201905092915050565b6000819050919050565b60006144546020840184613960565b905092915050565b61446581613939565b82525050565b600061447a6020840184613a9e565b905092915050565b61448b8161379d565b82525050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126144bd576144bc61449b565b5b83810192508235915060208301925067ffffffffffffffff8211156144e5576144e4614491565b5b6001820236038313156144fb576144fa614496565b5b509250929050565b600082825260208201905092915050565b82818337600083830152505050565b600061452f8385614503565b935061453c838584614514565b614545836131f9565b840190509392505050565b6000606083016145636000840184614445565b614570600086018261445c565b5061457e602084018461446b565b61458b6020860182614482565b5061459960408401846144a0565b85830360408701526145ac838284614523565b925050508091505092915050565b60006145c68383614550565b905092915050565b6000823560016060038336030381126145ea576145e961449b565b5b82810191505092915050565b6000602082019050919050565b600061460f838561442a565b9350836020840285016146218461443b565b8060005b8781101561466557848403895261463c82846145ce565b61464685826145ba565b9450614651836145f6565b925060208a01995050600181019050614625565b50829750879450505050509392505050565b60006020820190508181036000830152614692818486614603565b90509392505050565b600080fd5b600080fd5b600080858511156146b9576146b861469b565b5b838611156146ca576146c96146a0565b5b6001850283019150848603905094509492505050565b600081905092915050565b60006146f682613af3565b61470081856146e0565b93506147108185602086016131cf565b80840191505092915050565b600061472883856146e0565b9350614735838584614514565b82840190509392505050565b600061474d82866146eb565b915061475a82848661471c565b9150819050949350505050565b60006147738385613afe565b9350614780838584614514565b614789836131f9565b840190509392505050565b600060208201905081810360008301526147af818486614767565b90509392505050565b600082356001610140038336030381126147d5576147d46140e6565b5b80830191505092915050565b60006147f06020840184613667565b905092915050565b61480181613810565b811461480c57600080fd5b50565b60008135905061481e816147f8565b92915050565b6000614833602084018461480f565b905092915050565b6060820161484c6000830183614445565b614859600085018261445c565b5061486760208301836147e1565b6148746020850182613ecb565b506148826040830183614824565b61488f6040850182613eda565b50505050565b600060e0820190506148aa600083018a61483b565b6148b76060830189613cfc565b81810360808301526148ca818789614767565b90506148d960a08301866135fd565b81810360c08301526148ec818486614767565b905098975050505050505050565b600080fd5b614908826131f9565b810181811067ffffffffffffffff8211171561492757614926614050565b5b80604052505050565b600061493a613265565b905061494682826148ff565b919050565b600067ffffffffffffffff82111561496657614965614050565b5b61496f826131f9565b9050602081019050919050565b600061498f61498a8461494b565b614930565b9050828152602081018484840111156149ab576149aa6148fa565b5b6149b68482856131cf565b509392505050565b600082601f8301126149d3576149d261367c565b5b81516149e384826020860161497c565b91505092915050565b600060208284031215614a0257614a0161326f565b5b600082015167ffffffffffffffff811115614a2057614a1f613274565b5b614a2c848285016149be565b91505092915050565b600080fd5b600060408284031215614a5057614a4f614a35565b5b614a5a6040614930565b90506000614a6a848285016132f8565b6000830152506020614a7e848285016132f8565b60208301525092915050565b600060408284031215614aa057614a9f61326f565b5b6000614aae84828501614a3a565b91505092915050565b6000606082019050614acc600083018661407f565b614ad96020830185613885565b614ae66040830184613885565b949350505050565b6000604082019050614b036000830185613885565b614b106020830184613885565b9392505050565b6000602082019050614b2c600083018461407f565b92915050565b600060208284031215614b4857614b4761326f565b5b6000614b568482850161480f565b91505092915050565b6000819050919050565b6000614b84614b7f614b7a84614b5f565b613b6a565b61379d565b9050919050565b614b9481614b69565b82525050565b6000608082019050614baf60008301876135fd565b614bbc6020830186613cfc565b614bc96040830185614b8b565b8181036060830152614bdb8184613b0f565b905095945050505050565b6000604082019050614bfb600083018561407f565b614c086020830184613885565b9392505050565b6000606082019050614c2460008301866135fd565b614c316020830185613885565b614c3e6040830184613885565b949350505050565b60006040820190508181036000830152614c608185613b0f565b90508181036020830152614c748184613b0f565b90509392505050565b600081519050614c8c816139b5565b92915050565b600060208284031215614ca857614ca761326f565b5b6000614cb684828501614c7d565b91505092915050565b6000614cca82613af3565b614cd48185614503565b9350614ce48185602086016131cf565b614ced816131f9565b840191505092915050565b614d018161334d565b82525050565b600060a083016000830151614d1f600086018261445c565b506020830151614d326020860182613ecb565b5060408301518482036040860152614d4a8282614cbf565b91505060608301518482036060860152614d648282614cbf565b9150506080830151614d796080860182614cf8565b508091505092915050565b60006040820190508181036000830152614d9e8185614d07565b9050614dad60208301846135fd565b9392505050565b600081519050614dc3816132e1565b92915050565b600060408284031215614ddf57614dde614a35565b5b614de96040614930565b90506000614df984828501614db4565b6000830152506020614e0d84828501614db4565b60208301525092915050565b600060408284031215614e2f57614e2e61326f565b5b6000614e3d84828501614dc9565b91505092915050565b60007fffff00000000000000000000000000000000000000000000000000000000000082169050919050565b6000614e7e83836141ad565b82614e898135614e46565b92506002821015614ec957614ec47fffff000000000000000000000000000000000000000000000000000000000000836002036008026141dd565b831692505b505092915050565b600081519050614ee081613650565b92915050565b600081519050614ef5816147f8565b92915050565b600060808284031215614f1157614f10614a35565b5b614f1b6060614930565b90506000614f2b84828501614ed1565b6000830152506020614f3f84828501614ee6565b6020830152506040614f5384828501614dc9565b60408301525092915050565b600060808284031215614f7557614f7461326f565b5b6000614f8384828501614efb565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614ff5826132d7565b9150615000836132d7565b9250826150105761500f614f8c565b5b828204905092915050565b6000615026826132d7565b9150615031836132d7565b925082820261503f816132d7565b9150828204841483151761505657615055614fbb565b5b5092915050565b600061506983836141ad565b826150748135613646565b925060208210156150b4576150af7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff836020036008026141dd565b831692505b505092915050565b60007fffffffffffffffff00000000000000000000000000000000000000000000000082169050919050565b60006150f483836141ad565b826150ff81356150bc565b9250600882101561513f5761513a7fffffffffffffffff000000000000000000000000000000000000000000000000836008036008026141dd565b831692505b505092915050565b6000615152826132d7565b915061515d836132d7565b925082820190508082111561517557615174614fbb565b5b92915050565b60008160c01b9050919050565b60006151938261517b565b9050919050565b6151ab6151a682613810565b615188565b82525050565b60008160e01b9050919050565b60006151c9826151b1565b9050919050565b6151e16151dc82613939565b6151be565b82525050565b6000819050919050565b6152026151fd826132d7565b6151e7565b82525050565b6000615214828761519a565b60088201915061522482866151d0565b60048201915061523482856151f1565b60208201915061524482846146eb565b915081905095945050505050565b6000819050919050565b61526d61526882613646565b615252565b82525050565b600061527f828561525c565b60208201915061528f828461519a565b6008820191508190509392505050565b60006152ab828761525c565b6020820191506152bb828661519a565b6008820191506152cb828561525c565b6020820191506152db82846146eb565b915081905095945050505050565b6000815190506152f8816132ab565b92915050565b6000602082840312156153145761531361326f565b5b6000615322848285016152e9565b91505092915050565b600060608201905061534060008301866135fd565b61534d60208301856135fd565b61535a6040830184613885565b949350505050565b600061536e82846146eb565b91508190509291505056fea26469706673582212204001969c4b1e2478f52d0ed991c0790cc8f06f77c798e9ce06301cdfda23e52064736f6c63430008180033",
  linkReferences: {},
  deployedLinkReferences: {},
} as const;

export const TimelockController = {
  _format: "hh-sol-artifact-1",
  contractName: "TimelockController",
  sourceName: "@openzeppelin/contracts/governance/TimelockController.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "minDelay",
          type: "uint256",
        },
        {
          internalType: "address[]",
          name: "proposers",
          type: "address[]",
        },
        {
          internalType: "address[]",
          name: "executors",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "admin",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "AccessControlBadConfirmation",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "neededRole",
          type: "bytes32",
        },
      ],
      name: "AccessControlUnauthorizedAccount",
      type: "error",
    },
    {
      inputs: [],
      name: "FailedInnerCall",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "delay",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "minDelay",
          type: "uint256",
        },
      ],
      name: "TimelockInsufficientDelay",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "targets",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "payloads",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "values",
          type: "uint256",
        },
      ],
      name: "TimelockInvalidOperationLength",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "caller",
          type: "address",
        },
      ],
      name: "TimelockUnauthorizedCaller",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "predecessorId",
          type: "bytes32",
        },
      ],
      name: "TimelockUnexecutedPredecessor",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "operationId",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "expectedStates",
          type: "bytes32",
        },
      ],
      name: "TimelockUnexpectedOperationState",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "target",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "CallExecuted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "CallSalt",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "target",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "predecessor",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "delay",
          type: "uint256",
        },
      ],
      name: "CallScheduled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "Cancelled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "oldDuration",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newDuration",
          type: "uint256",
        },
      ],
      name: "MinDelayChange",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      inputs: [],
      name: "CANCELLER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "EXECUTOR_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PROPOSER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "cancel",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "target",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "payload",
          type: "bytes",
        },
        {
          internalType: "bytes32",
          name: "predecessor",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "execute",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "targets",
          type: "address[]",
        },
        {
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
        {
          internalType: "bytes[]",
          name: "payloads",
          type: "bytes[]",
        },
        {
          internalType: "bytes32",
          name: "predecessor",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "executeBatch",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "getMinDelay",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "getOperationState",
      outputs: [
        {
          internalType: "enum TimelockController.OperationState",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "getTimestamp",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "target",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "bytes32",
          name: "predecessor",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "hashOperation",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "targets",
          type: "address[]",
        },
        {
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
        {
          internalType: "bytes[]",
          name: "payloads",
          type: "bytes[]",
        },
        {
          internalType: "bytes32",
          name: "predecessor",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "hashOperationBatch",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "isOperation",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "isOperationDone",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "isOperationPending",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "id",
          type: "bytes32",
        },
      ],
      name: "isOperationReady",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC1155BatchReceived",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC1155Received",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      name: "onERC721Received",
      outputs: [
        {
          internalType: "bytes4",
          name: "",
          type: "bytes4",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "callerConfirmation",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "target",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
        {
          internalType: "bytes32",
          name: "predecessor",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "delay",
          type: "uint256",
        },
      ],
      name: "schedule",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "targets",
          type: "address[]",
        },
        {
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
        {
          internalType: "bytes[]",
          name: "payloads",
          type: "bytes[]",
        },
        {
          internalType: "bytes32",
          name: "predecessor",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "delay",
          type: "uint256",
        },
      ],
      name: "scheduleBatch",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "newDelay",
          type: "uint256",
        },
      ],
      name: "updateDelay",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ],
  bytecode:
    "0x60806040523480156200001157600080fd5b5060405162003266380380620032668339818101604052810190620000379190620005a8565b6200004c6000801b306200020a60201b60201c565b50600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146200009957620000976000801b826200020a60201b60201c565b505b60005b83518110156200015257620000f57fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1858381518110620000e157620000e062000658565b5b60200260200101516200020a60201b60201c565b50620001457ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78385838151811062000131576200013062000658565b5b60200260200101516200020a60201b60201c565b508060010190506200009c565b5060005b8251811015620001bc57620001af7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e638483815181106200019b576200019a62000658565b5b60200260200101516200020a60201b60201c565b5080600101905062000156565b50836002819055507f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5600085604051620001f8929190620006e5565b60405180910390a15050505062000712565b60006200021e83836200030d60201b60201c565b6200030257600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200029e6200037760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905062000307565b600090505b92915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b620003a88162000393565b8114620003b457600080fd5b50565b600081519050620003c8816200039d565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200041e82620003d3565b810181811067ffffffffffffffff8211171562000440576200043f620003e4565b5b80604052505050565b6000620004556200037f565b905062000463828262000413565b919050565b600067ffffffffffffffff821115620004865762000485620003e4565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004c9826200049c565b9050919050565b620004db81620004bc565b8114620004e757600080fd5b50565b600081519050620004fb81620004d0565b92915050565b600062000518620005128462000468565b62000449565b905080838252602082019050602084028301858111156200053e576200053d62000497565b5b835b818110156200056b5780620005568882620004ea565b84526020840193505060208101905062000540565b5050509392505050565b600082601f8301126200058d576200058c620003ce565b5b81516200059f84826020860162000501565b91505092915050565b60008060008060808587031215620005c557620005c462000389565b5b6000620005d587828801620003b7565b945050602085015167ffffffffffffffff811115620005f957620005f86200038e565b5b620006078782880162000575565b935050604085015167ffffffffffffffff8111156200062b576200062a6200038e565b5b620006398782880162000575565b92505060606200064c87828801620004ea565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000819050919050565b6000819050919050565b6000620006bc620006b6620006b08462000687565b62000691565b62000393565b9050919050565b620006ce816200069b565b82525050565b620006df8162000393565b82525050565b6000604082019050620006fc6000830185620006c3565b6200070b6020830184620006d4565b9392505050565b612b4480620007226000396000f3fe6080604052600436106101bb5760003560e01c80638065657f116100ec578063bc197c811161008a578063d547741f11610064578063d547741f1461069e578063e38335e5146106c7578063f23a6e61146106e3578063f27a0c9214610720576101c2565b8063bc197c81146105fb578063c4d252f514610638578063d45c443514610661576101c2565b806391d14854116100c657806391d148541461052b578063a217fddf14610568578063b08e51c014610593578063b1c5f427146105be576101c2565b80638065657f1461049a5780638f2a0bb0146104d75780638f61f4f514610500576101c2565b80632ab0f5291161015957806336568abe1161013357806336568abe146103ce578063584b153e146103f757806364d62353146104345780637958004c1461045d576101c2565b80632ab0f5291461032b5780632f2ff15d1461036857806331d5075014610391576101c2565b8063134008d311610195578063134008d31461025857806313bc9f2014610274578063150b7a02146102b1578063248a9ca3146102ee576101c2565b806301d5062a146101c757806301ffc9a7146101f057806307bd02651461022d576101c2565b366101c257005b600080fd5b3480156101d357600080fd5b506101ee60048036038101906101e99190611a0a565b61074b565b005b3480156101fc57600080fd5b5061021760048036038101906102129190611b11565b610823565b6040516102249190611b59565b60405180910390f35b34801561023957600080fd5b50610242610835565b60405161024f9190611b83565b60405180910390f35b610272600480360381019061026d9190611b9e565b610859565b005b34801561028057600080fd5b5061029b60048036038101906102969190611c38565b610916565b6040516102a89190611b59565b60405180910390f35b3480156102bd57600080fd5b506102d860048036038101906102d39190611da6565b61094f565b6040516102e59190611e38565b60405180910390f35b3480156102fa57600080fd5b5061031560048036038101906103109190611c38565b610963565b6040516103229190611b83565b60405180910390f35b34801561033757600080fd5b50610352600480360381019061034d9190611c38565b610982565b60405161035f9190611b59565b60405180910390f35b34801561037457600080fd5b5061038f600480360381019061038a9190611e53565b6109ba565b005b34801561039d57600080fd5b506103b860048036038101906103b39190611c38565b6109dc565b6040516103c59190611b59565b60405180910390f35b3480156103da57600080fd5b506103f560048036038101906103f09190611e53565b610a15565b005b34801561040357600080fd5b5061041e60048036038101906104199190611c38565b610a90565b60405161042b9190611b59565b60405180910390f35b34801561044057600080fd5b5061045b60048036038101906104569190611e93565b610afd565b005b34801561046957600080fd5b50610484600480360381019061047f9190611c38565b610bbf565b6040516104919190611f37565b60405180910390f35b3480156104a657600080fd5b506104c160048036038101906104bc9190611b9e565b610c0e565b6040516104ce9190611b83565b60405180910390f35b3480156104e357600080fd5b506104fe60048036038101906104f99190612054565b610c4d565b005b34801561050c57600080fd5b50610515610e0f565b6040516105229190611b83565b60405180910390f35b34801561053757600080fd5b50610552600480360381019061054d9190611e53565b610e33565b60405161055f9190611b59565b60405180910390f35b34801561057457600080fd5b5061057d610e9d565b60405161058a9190611b83565b60405180910390f35b34801561059f57600080fd5b506105a8610ea4565b6040516105b59190611b83565b60405180910390f35b3480156105ca57600080fd5b506105e560048036038101906105e09190612143565b610ec8565b6040516105f29190611b83565b60405180910390f35b34801561060757600080fd5b50610622600480360381019061061d91906122e2565b610f0d565b60405161062f9190611e38565b60405180910390f35b34801561064457600080fd5b5061065f600480360381019061065a9190611c38565b610f22565b005b34801561066d57600080fd5b5061068860048036038101906106839190611c38565b610ff4565b60405161069591906123c0565b60405180910390f35b3480156106aa57600080fd5b506106c560048036038101906106c09190611e53565b611011565b005b6106e160048036038101906106dc9190612143565b611033565b005b3480156106ef57600080fd5b5061070a600480360381019061070591906123db565b6111f1565b6040516107179190611e38565b60405180910390f35b34801561072c57600080fd5b50610735611206565b60405161074291906123c0565b60405180910390f35b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161077581611210565b6000610785898989898989610c0e565b90506107918184611224565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a6040516107cd969594939291906124bf565b60405180910390a36000801b841461081857807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d03878560405161080f9190611b83565b60405180910390a25b505050505050505050565b600061082e826112f5565b9050919050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610885816000610e33565b61089b5761089a8161089561136f565b611377565b5b60006108ab888888888888610c0e565b90506108b781856113c8565b6108c38888888861147c565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a6040516108fb949392919061251b565b60405180910390a361090c81611501565b5050505050505050565b60006002600381111561092c5761092b611ec0565b5b61093583610bbf565b600381111561094757610946611ec0565b5b149050919050565b600063150b7a0260e01b9050949350505050565b6000806000838152602001908152602001600020600101549050919050565b600060038081111561099757610996611ec0565b5b6109a083610bbf565b60038111156109b2576109b1611ec0565b5b149050919050565b6109c382610963565b6109cc81611210565b6109d68383611571565b50505050565b60008060038111156109f1576109f0611ec0565b5b6109fa83610bbf565b6003811115610a0c57610a0b611ec0565b5b14159050919050565b610a1d61136f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a81576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a8b8282611662565b505050565b600080610a9c83610bbf565b905060016003811115610ab257610ab1611ec0565b5b816003811115610ac557610ac4611ec0565b5b1480610af5575060026003811115610ae057610adf611ec0565b5b816003811115610af357610af2611ec0565b5b145b915050919050565b6000610b0761136f565b90503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b7957806040517fe2850c59000000000000000000000000000000000000000000000000000000008152600401610b70919061255b565b60405180910390fd5b7f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d560025483604051610bac929190612576565b60405180910390a1816002819055505050565b600080610bcb83610ff4565b905060008103610bdf576000915050610c09565b60018103610bf1576003915050610c09565b42811115610c03576001915050610c09565b60029150505b919050565b6000868686868686604051602001610c2b9695949392919061259f565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610c7781611210565b878790508a8a9050141580610c925750858590508a8a905014155b15610ce1578989905086869050898990506040517fffb03211000000000000000000000000000000000000000000000000000000008152600401610cd8939291906125fb565b60405180910390fd5b6000610cf38b8b8b8b8b8b8b8b610ec8565b9050610cff8184611224565b60005b8b8b9050811015610dbe5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610d4357610d42612632565b5b9050602002016020810190610d589190612661565b8d8d86818110610d6b57610d6a612632565b5b905060200201358c8c87818110610d8557610d84612632565b5b9050602002810190610d97919061269d565b8c8b604051610dab969594939291906124bf565b60405180910390a3806001019050610d02565b506000801b8414610e0257807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d038785604051610df99190611b83565b60405180910390a25b5050505050505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b60008888888888888888604051602001610ee99897969594939291906129a2565b60405160208183030381529060405280519060200120905098975050505050505050565b600063bc197c8160e01b905095945050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610f4c81611210565b610f5582610a90565b610fac5781610f646002611754565b610f6e6001611754565b176040517f5ead8eb5000000000000000000000000000000000000000000000000000000008152600401610fa3929190612a10565b60405180910390fd5b6001600083815260200190815260200160002060009055817fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7060405160405180910390a25050565b600060016000838152602001908152602001600020549050919050565b61101a82610963565b61102381611210565b61102d8383611662565b50505050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6361105f816000610e33565b611075576110748161106f61136f565b611377565b5b86869050898990501415806110905750848490508989905014155b156110df578888905085859050888890506040517fffb032110000000000000000000000000000000000000000000000000000000081526004016110d6939291906125fb565b60405180910390fd5b60006110f18a8a8a8a8a8a8a8a610ec8565b90506110fd81856113c8565b60005b8a8a90508110156111db5760008b8b838181106111205761111f612632565b5b90506020020160208101906111359190612661565b905060008a8a8481811061114c5761114b612632565b5b9050602002013590503660008a8a8681811061116b5761116a612632565b5b905060200281019061117d919061269d565b9150915061118d8484848461147c565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58868686866040516111c4949392919061251b565b60405180910390a350505050806001019050611100565b506111e581611501565b50505050505050505050565b600063f23a6e6160e01b905095945050505050565b6000600254905090565b6112218161121c61136f565b611377565b50565b61122d826109dc565b1561127a578161123d6000611754565b6040517f5ead8eb5000000000000000000000000000000000000000000000000000000008152600401611271929190612a10565b60405180910390fd5b6000611284611206565b9050808210156112cd5781816040517f543366090000000000000000000000000000000000000000000000000000000081526004016112c4929190612576565b60405180910390fd5b81426112d99190612a68565b6001600085815260200190815260200160002081905550505050565b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061136857506113678261177a565b5b9050919050565b600033905090565b6113818282610e33565b6113c45780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016113bb929190612a9c565b60405180910390fd5b5050565b6113d182610916565b61141d57816113e06002611754565b6040517f5ead8eb5000000000000000000000000000000000000000000000000000000008152600401611414929190612a10565b60405180910390fd5b6000801b8114158015611436575061143481610982565b155b1561147857806040517f90a9a61800000000000000000000000000000000000000000000000000000000815260040161146f9190611b83565b60405180910390fd5b5050565b6000808573ffffffffffffffffffffffffffffffffffffffff168585856040516114a7929190612af5565b60006040518083038185875af1925050503d80600081146114e4576040519150601f19603f3d011682016040523d82523d6000602084013e6114e9565b606091505b50915091506114f882826117f4565b50505050505050565b61150a81610916565b61155657806115196002611754565b6040517f5ead8eb500000000000000000000000000000000000000000000000000000000815260040161154d929190612a10565b60405180910390fd5b60018060008381526020019081526020016000208190555050565b600061157d8383610e33565b61165757600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506115f461136f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061165c565b600090505b92915050565b600061166e8383610e33565b1561174957600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506116e661136f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a46001905061174e565b600090505b92915050565b600081600381111561176957611768611ec0565b5b60ff166001901b60001b9050919050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806117ed57506117ec82611818565b5b9050919050565b6060826118095761180482611882565b611811565b819050611812565b5b92915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000815111156118955780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611906826118db565b9050919050565b611916816118fb565b811461192157600080fd5b50565b6000813590506119338161190d565b92915050565b6000819050919050565b61194c81611939565b811461195757600080fd5b50565b60008135905061196981611943565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126119945761199361196f565b5b8235905067ffffffffffffffff8111156119b1576119b0611974565b5b6020830191508360018202830111156119cd576119cc611979565b5b9250929050565b6000819050919050565b6119e7816119d4565b81146119f257600080fd5b50565b600081359050611a04816119de565b92915050565b600080600080600080600060c0888a031215611a2957611a286118d1565b5b6000611a378a828b01611924565b9750506020611a488a828b0161195a565b965050604088013567ffffffffffffffff811115611a6957611a686118d6565b5b611a758a828b0161197e565b95509550506060611a888a828b016119f5565b9350506080611a998a828b016119f5565b92505060a0611aaa8a828b0161195a565b91505092959891949750929550565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611aee81611ab9565b8114611af957600080fd5b50565b600081359050611b0b81611ae5565b92915050565b600060208284031215611b2757611b266118d1565b5b6000611b3584828501611afc565b91505092915050565b60008115159050919050565b611b5381611b3e565b82525050565b6000602082019050611b6e6000830184611b4a565b92915050565b611b7d816119d4565b82525050565b6000602082019050611b986000830184611b74565b92915050565b60008060008060008060a08789031215611bbb57611bba6118d1565b5b6000611bc989828a01611924565b9650506020611bda89828a0161195a565b955050604087013567ffffffffffffffff811115611bfb57611bfa6118d6565b5b611c0789828a0161197e565b94509450506060611c1a89828a016119f5565b9250506080611c2b89828a016119f5565b9150509295509295509295565b600060208284031215611c4e57611c4d6118d1565b5b6000611c5c848285016119f5565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611cb382611c6a565b810181811067ffffffffffffffff82111715611cd257611cd1611c7b565b5b80604052505050565b6000611ce56118c7565b9050611cf18282611caa565b919050565b600067ffffffffffffffff821115611d1157611d10611c7b565b5b611d1a82611c6a565b9050602081019050919050565b82818337600083830152505050565b6000611d49611d4484611cf6565b611cdb565b905082815260208101848484011115611d6557611d64611c65565b5b611d70848285611d27565b509392505050565b600082601f830112611d8d57611d8c61196f565b5b8135611d9d848260208601611d36565b91505092915050565b60008060008060808587031215611dc057611dbf6118d1565b5b6000611dce87828801611924565b9450506020611ddf87828801611924565b9350506040611df08782880161195a565b925050606085013567ffffffffffffffff811115611e1157611e106118d6565b5b611e1d87828801611d78565b91505092959194509250565b611e3281611ab9565b82525050565b6000602082019050611e4d6000830184611e29565b92915050565b60008060408385031215611e6a57611e696118d1565b5b6000611e78858286016119f5565b9250506020611e8985828601611924565b9150509250929050565b600060208284031215611ea957611ea86118d1565b5b6000611eb78482850161195a565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60048110611f0057611eff611ec0565b5b50565b6000819050611f1182611eef565b919050565b6000611f2182611f03565b9050919050565b611f3181611f16565b82525050565b6000602082019050611f4c6000830184611f28565b92915050565b60008083601f840112611f6857611f6761196f565b5b8235905067ffffffffffffffff811115611f8557611f84611974565b5b602083019150836020820283011115611fa157611fa0611979565b5b9250929050565b60008083601f840112611fbe57611fbd61196f565b5b8235905067ffffffffffffffff811115611fdb57611fda611974565b5b602083019150836020820283011115611ff757611ff6611979565b5b9250929050565b60008083601f8401126120145761201361196f565b5b8235905067ffffffffffffffff81111561203157612030611974565b5b60208301915083602082028301111561204d5761204c611979565b5b9250929050565b600080600080600080600080600060c08a8c031215612076576120756118d1565b5b60008a013567ffffffffffffffff811115612094576120936118d6565b5b6120a08c828d01611f52565b995099505060208a013567ffffffffffffffff8111156120c3576120c26118d6565b5b6120cf8c828d01611fa8565b975097505060408a013567ffffffffffffffff8111156120f2576120f16118d6565b5b6120fe8c828d01611ffe565b955095505060606121118c828d016119f5565b93505060806121228c828d016119f5565b92505060a06121338c828d0161195a565b9150509295985092959850929598565b60008060008060008060008060a0898b031215612163576121626118d1565b5b600089013567ffffffffffffffff811115612181576121806118d6565b5b61218d8b828c01611f52565b9850985050602089013567ffffffffffffffff8111156121b0576121af6118d6565b5b6121bc8b828c01611fa8565b9650965050604089013567ffffffffffffffff8111156121df576121de6118d6565b5b6121eb8b828c01611ffe565b945094505060606121fe8b828c016119f5565b925050608061220f8b828c016119f5565b9150509295985092959890939650565b600067ffffffffffffffff82111561223a57612239611c7b565b5b602082029050602081019050919050565b600061225e6122598461221f565b611cdb565b9050808382526020820190506020840283018581111561228157612280611979565b5b835b818110156122aa5780612296888261195a565b845260208401935050602081019050612283565b5050509392505050565b600082601f8301126122c9576122c861196f565b5b81356122d984826020860161224b565b91505092915050565b600080600080600060a086880312156122fe576122fd6118d1565b5b600061230c88828901611924565b955050602061231d88828901611924565b945050604086013567ffffffffffffffff81111561233e5761233d6118d6565b5b61234a888289016122b4565b935050606086013567ffffffffffffffff81111561236b5761236a6118d6565b5b612377888289016122b4565b925050608086013567ffffffffffffffff811115612398576123976118d6565b5b6123a488828901611d78565b9150509295509295909350565b6123ba81611939565b82525050565b60006020820190506123d560008301846123b1565b92915050565b600080600080600060a086880312156123f7576123f66118d1565b5b600061240588828901611924565b955050602061241688828901611924565b94505060406124278882890161195a565b93505060606124388882890161195a565b925050608086013567ffffffffffffffff811115612459576124586118d6565b5b61246588828901611d78565b9150509295509295909350565b61247b816118fb565b82525050565b600082825260208201905092915050565b600061249e8385612481565b93506124ab838584611d27565b6124b483611c6a565b840190509392505050565b600060a0820190506124d46000830189612472565b6124e160208301886123b1565b81810360408301526124f4818688612492565b90506125036060830185611b74565b61251060808301846123b1565b979650505050505050565b60006060820190506125306000830187612472565b61253d60208301866123b1565b8181036040830152612550818486612492565b905095945050505050565b60006020820190506125706000830184612472565b92915050565b600060408201905061258b60008301856123b1565b61259860208301846123b1565b9392505050565b600060a0820190506125b46000830189612472565b6125c160208301886123b1565b81810360408301526125d4818688612492565b90506125e36060830185611b74565b6125f06080830184611b74565b979650505050505050565b600060608201905061261060008301866123b1565b61261d60208301856123b1565b61262a60408301846123b1565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215612677576126766118d1565b5b600061268584828501611924565b91505092915050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126126ba576126b961268e565b5b80840192508235915067ffffffffffffffff8211156126dc576126db612693565b5b6020830192506001820236038313156126f8576126f7612698565b5b509250929050565b600082825260208201905092915050565b6000819050919050565b612724816118fb565b82525050565b6000612736838361271b565b60208301905092915050565b60006127516020840184611924565b905092915050565b6000602082019050919050565b60006127728385612700565b935061277d82612711565b8060005b858110156127b6576127938284612742565b61279d888261272a565b97506127a883612759565b925050600181019050612781565b5085925050509392505050565b600082825260208201905092915050565b600080fd5b82818337505050565b60006127ee83856127c3565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115612821576128206127d4565b5b6020830292506128328385846127d9565b82840190509392505050565b600082825260208201905092915050565b6000819050919050565b600082825260208201905092915050565b60006128768385612859565b9350612883838584611d27565b61288c83611c6a565b840190509392505050565b60006128a484848461286a565b90509392505050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126128d9576128d86128b7565b5b83810192508235915060208301925067ffffffffffffffff821115612901576129006128ad565b5b600182023603831315612917576129166128b2565b5b509250929050565b6000602082019050919050565b6000612938838561283e565b93508360208402850161294a8461284f565b8060005b8781101561299057848403895261296582846128bc565b612970868284612897565b955061297b8461291f565b935060208b019a50505060018101905061294e565b50829750879450505050509392505050565b600060a08201905081810360008301526129bd818a8c612766565b905081810360208301526129d281888a6127e2565b905081810360408301526129e781868861292c565b90506129f66060830185611b74565b612a036080830184611b74565b9998505050505050505050565b6000604082019050612a256000830185611b74565b612a326020830184611b74565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612a7382611939565b9150612a7e83611939565b9250828201905080821115612a9657612a95612a39565b5b92915050565b6000604082019050612ab16000830185612472565b612abe6020830184611b74565b9392505050565b600081905092915050565b6000612adc8385612ac5565b9350612ae9838584611d27565b82840190509392505050565b6000612b02828486612ad0565b9150819050939250505056fea264697066735822122019f22248b1bb53802f85e0536ee14e2ac76d3c768c8a4d58c514ec3040a3b14f64736f6c63430008180033",
  deployedBytecode:
    "0x6080604052600436106101bb5760003560e01c80638065657f116100ec578063bc197c811161008a578063d547741f11610064578063d547741f1461069e578063e38335e5146106c7578063f23a6e61146106e3578063f27a0c9214610720576101c2565b8063bc197c81146105fb578063c4d252f514610638578063d45c443514610661576101c2565b806391d14854116100c657806391d148541461052b578063a217fddf14610568578063b08e51c014610593578063b1c5f427146105be576101c2565b80638065657f1461049a5780638f2a0bb0146104d75780638f61f4f514610500576101c2565b80632ab0f5291161015957806336568abe1161013357806336568abe146103ce578063584b153e146103f757806364d62353146104345780637958004c1461045d576101c2565b80632ab0f5291461032b5780632f2ff15d1461036857806331d5075014610391576101c2565b8063134008d311610195578063134008d31461025857806313bc9f2014610274578063150b7a02146102b1578063248a9ca3146102ee576101c2565b806301d5062a146101c757806301ffc9a7146101f057806307bd02651461022d576101c2565b366101c257005b600080fd5b3480156101d357600080fd5b506101ee60048036038101906101e99190611a0a565b61074b565b005b3480156101fc57600080fd5b5061021760048036038101906102129190611b11565b610823565b6040516102249190611b59565b60405180910390f35b34801561023957600080fd5b50610242610835565b60405161024f9190611b83565b60405180910390f35b610272600480360381019061026d9190611b9e565b610859565b005b34801561028057600080fd5b5061029b60048036038101906102969190611c38565b610916565b6040516102a89190611b59565b60405180910390f35b3480156102bd57600080fd5b506102d860048036038101906102d39190611da6565b61094f565b6040516102e59190611e38565b60405180910390f35b3480156102fa57600080fd5b5061031560048036038101906103109190611c38565b610963565b6040516103229190611b83565b60405180910390f35b34801561033757600080fd5b50610352600480360381019061034d9190611c38565b610982565b60405161035f9190611b59565b60405180910390f35b34801561037457600080fd5b5061038f600480360381019061038a9190611e53565b6109ba565b005b34801561039d57600080fd5b506103b860048036038101906103b39190611c38565b6109dc565b6040516103c59190611b59565b60405180910390f35b3480156103da57600080fd5b506103f560048036038101906103f09190611e53565b610a15565b005b34801561040357600080fd5b5061041e60048036038101906104199190611c38565b610a90565b60405161042b9190611b59565b60405180910390f35b34801561044057600080fd5b5061045b60048036038101906104569190611e93565b610afd565b005b34801561046957600080fd5b50610484600480360381019061047f9190611c38565b610bbf565b6040516104919190611f37565b60405180910390f35b3480156104a657600080fd5b506104c160048036038101906104bc9190611b9e565b610c0e565b6040516104ce9190611b83565b60405180910390f35b3480156104e357600080fd5b506104fe60048036038101906104f99190612054565b610c4d565b005b34801561050c57600080fd5b50610515610e0f565b6040516105229190611b83565b60405180910390f35b34801561053757600080fd5b50610552600480360381019061054d9190611e53565b610e33565b60405161055f9190611b59565b60405180910390f35b34801561057457600080fd5b5061057d610e9d565b60405161058a9190611b83565b60405180910390f35b34801561059f57600080fd5b506105a8610ea4565b6040516105b59190611b83565b60405180910390f35b3480156105ca57600080fd5b506105e560048036038101906105e09190612143565b610ec8565b6040516105f29190611b83565b60405180910390f35b34801561060757600080fd5b50610622600480360381019061061d91906122e2565b610f0d565b60405161062f9190611e38565b60405180910390f35b34801561064457600080fd5b5061065f600480360381019061065a9190611c38565b610f22565b005b34801561066d57600080fd5b5061068860048036038101906106839190611c38565b610ff4565b60405161069591906123c0565b60405180910390f35b3480156106aa57600080fd5b506106c560048036038101906106c09190611e53565b611011565b005b6106e160048036038101906106dc9190612143565b611033565b005b3480156106ef57600080fd5b5061070a600480360381019061070591906123db565b6111f1565b6040516107179190611e38565b60405180910390f35b34801561072c57600080fd5b50610735611206565b60405161074291906123c0565b60405180910390f35b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161077581611210565b6000610785898989898989610c0e565b90506107918184611224565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a6040516107cd969594939291906124bf565b60405180910390a36000801b841461081857807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d03878560405161080f9190611b83565b60405180910390a25b505050505050505050565b600061082e826112f5565b9050919050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610885816000610e33565b61089b5761089a8161089561136f565b611377565b5b60006108ab888888888888610c0e565b90506108b781856113c8565b6108c38888888861147c565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a6040516108fb949392919061251b565b60405180910390a361090c81611501565b5050505050505050565b60006002600381111561092c5761092b611ec0565b5b61093583610bbf565b600381111561094757610946611ec0565b5b149050919050565b600063150b7a0260e01b9050949350505050565b6000806000838152602001908152602001600020600101549050919050565b600060038081111561099757610996611ec0565b5b6109a083610bbf565b60038111156109b2576109b1611ec0565b5b149050919050565b6109c382610963565b6109cc81611210565b6109d68383611571565b50505050565b60008060038111156109f1576109f0611ec0565b5b6109fa83610bbf565b6003811115610a0c57610a0b611ec0565b5b14159050919050565b610a1d61136f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a81576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a8b8282611662565b505050565b600080610a9c83610bbf565b905060016003811115610ab257610ab1611ec0565b5b816003811115610ac557610ac4611ec0565b5b1480610af5575060026003811115610ae057610adf611ec0565b5b816003811115610af357610af2611ec0565b5b145b915050919050565b6000610b0761136f565b90503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b7957806040517fe2850c59000000000000000000000000000000000000000000000000000000008152600401610b70919061255b565b60405180910390fd5b7f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d560025483604051610bac929190612576565b60405180910390a1816002819055505050565b600080610bcb83610ff4565b905060008103610bdf576000915050610c09565b60018103610bf1576003915050610c09565b42811115610c03576001915050610c09565b60029150505b919050565b6000868686868686604051602001610c2b9695949392919061259f565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610c7781611210565b878790508a8a9050141580610c925750858590508a8a905014155b15610ce1578989905086869050898990506040517fffb03211000000000000000000000000000000000000000000000000000000008152600401610cd8939291906125fb565b60405180910390fd5b6000610cf38b8b8b8b8b8b8b8b610ec8565b9050610cff8184611224565b60005b8b8b9050811015610dbe5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610d4357610d42612632565b5b9050602002016020810190610d589190612661565b8d8d86818110610d6b57610d6a612632565b5b905060200201358c8c87818110610d8557610d84612632565b5b9050602002810190610d97919061269d565b8c8b604051610dab969594939291906124bf565b60405180910390a3806001019050610d02565b506000801b8414610e0257807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d038785604051610df99190611b83565b60405180910390a25b5050505050505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b60008888888888888888604051602001610ee99897969594939291906129a2565b60405160208183030381529060405280519060200120905098975050505050505050565b600063bc197c8160e01b905095945050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610f4c81611210565b610f5582610a90565b610fac5781610f646002611754565b610f6e6001611754565b176040517f5ead8eb5000000000000000000000000000000000000000000000000000000008152600401610fa3929190612a10565b60405180910390fd5b6001600083815260200190815260200160002060009055817fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7060405160405180910390a25050565b600060016000838152602001908152602001600020549050919050565b61101a82610963565b61102381611210565b61102d8383611662565b50505050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6361105f816000610e33565b611075576110748161106f61136f565b611377565b5b86869050898990501415806110905750848490508989905014155b156110df578888905085859050888890506040517fffb032110000000000000000000000000000000000000000000000000000000081526004016110d6939291906125fb565b60405180910390fd5b60006110f18a8a8a8a8a8a8a8a610ec8565b90506110fd81856113c8565b60005b8a8a90508110156111db5760008b8b838181106111205761111f612632565b5b90506020020160208101906111359190612661565b905060008a8a8481811061114c5761114b612632565b5b9050602002013590503660008a8a8681811061116b5761116a612632565b5b905060200281019061117d919061269d565b9150915061118d8484848461147c565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58868686866040516111c4949392919061251b565b60405180910390a350505050806001019050611100565b506111e581611501565b50505050505050505050565b600063f23a6e6160e01b905095945050505050565b6000600254905090565b6112218161121c61136f565b611377565b50565b61122d826109dc565b1561127a578161123d6000611754565b6040517f5ead8eb5000000000000000000000000000000000000000000000000000000008152600401611271929190612a10565b60405180910390fd5b6000611284611206565b9050808210156112cd5781816040517f543366090000000000000000000000000000000000000000000000000000000081526004016112c4929190612576565b60405180910390fd5b81426112d99190612a68565b6001600085815260200190815260200160002081905550505050565b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061136857506113678261177a565b5b9050919050565b600033905090565b6113818282610e33565b6113c45780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016113bb929190612a9c565b60405180910390fd5b5050565b6113d182610916565b61141d57816113e06002611754565b6040517f5ead8eb5000000000000000000000000000000000000000000000000000000008152600401611414929190612a10565b60405180910390fd5b6000801b8114158015611436575061143481610982565b155b1561147857806040517f90a9a61800000000000000000000000000000000000000000000000000000000815260040161146f9190611b83565b60405180910390fd5b5050565b6000808573ffffffffffffffffffffffffffffffffffffffff168585856040516114a7929190612af5565b60006040518083038185875af1925050503d80600081146114e4576040519150601f19603f3d011682016040523d82523d6000602084013e6114e9565b606091505b50915091506114f882826117f4565b50505050505050565b61150a81610916565b61155657806115196002611754565b6040517f5ead8eb500000000000000000000000000000000000000000000000000000000815260040161154d929190612a10565b60405180910390fd5b60018060008381526020019081526020016000208190555050565b600061157d8383610e33565b61165757600160008085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506115f461136f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061165c565b600090505b92915050565b600061166e8383610e33565b1561174957600080600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506116e661136f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a46001905061174e565b600090505b92915050565b600081600381111561176957611768611ec0565b5b60ff166001901b60001b9050919050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806117ed57506117ec82611818565b5b9050919050565b6060826118095761180482611882565b611811565b819050611812565b5b92915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000815111156118955780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611906826118db565b9050919050565b611916816118fb565b811461192157600080fd5b50565b6000813590506119338161190d565b92915050565b6000819050919050565b61194c81611939565b811461195757600080fd5b50565b60008135905061196981611943565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126119945761199361196f565b5b8235905067ffffffffffffffff8111156119b1576119b0611974565b5b6020830191508360018202830111156119cd576119cc611979565b5b9250929050565b6000819050919050565b6119e7816119d4565b81146119f257600080fd5b50565b600081359050611a04816119de565b92915050565b600080600080600080600060c0888a031215611a2957611a286118d1565b5b6000611a378a828b01611924565b9750506020611a488a828b0161195a565b965050604088013567ffffffffffffffff811115611a6957611a686118d6565b5b611a758a828b0161197e565b95509550506060611a888a828b016119f5565b9350506080611a998a828b016119f5565b92505060a0611aaa8a828b0161195a565b91505092959891949750929550565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611aee81611ab9565b8114611af957600080fd5b50565b600081359050611b0b81611ae5565b92915050565b600060208284031215611b2757611b266118d1565b5b6000611b3584828501611afc565b91505092915050565b60008115159050919050565b611b5381611b3e565b82525050565b6000602082019050611b6e6000830184611b4a565b92915050565b611b7d816119d4565b82525050565b6000602082019050611b986000830184611b74565b92915050565b60008060008060008060a08789031215611bbb57611bba6118d1565b5b6000611bc989828a01611924565b9650506020611bda89828a0161195a565b955050604087013567ffffffffffffffff811115611bfb57611bfa6118d6565b5b611c0789828a0161197e565b94509450506060611c1a89828a016119f5565b9250506080611c2b89828a016119f5565b9150509295509295509295565b600060208284031215611c4e57611c4d6118d1565b5b6000611c5c848285016119f5565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611cb382611c6a565b810181811067ffffffffffffffff82111715611cd257611cd1611c7b565b5b80604052505050565b6000611ce56118c7565b9050611cf18282611caa565b919050565b600067ffffffffffffffff821115611d1157611d10611c7b565b5b611d1a82611c6a565b9050602081019050919050565b82818337600083830152505050565b6000611d49611d4484611cf6565b611cdb565b905082815260208101848484011115611d6557611d64611c65565b5b611d70848285611d27565b509392505050565b600082601f830112611d8d57611d8c61196f565b5b8135611d9d848260208601611d36565b91505092915050565b60008060008060808587031215611dc057611dbf6118d1565b5b6000611dce87828801611924565b9450506020611ddf87828801611924565b9350506040611df08782880161195a565b925050606085013567ffffffffffffffff811115611e1157611e106118d6565b5b611e1d87828801611d78565b91505092959194509250565b611e3281611ab9565b82525050565b6000602082019050611e4d6000830184611e29565b92915050565b60008060408385031215611e6a57611e696118d1565b5b6000611e78858286016119f5565b9250506020611e8985828601611924565b9150509250929050565b600060208284031215611ea957611ea86118d1565b5b6000611eb78482850161195a565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60048110611f0057611eff611ec0565b5b50565b6000819050611f1182611eef565b919050565b6000611f2182611f03565b9050919050565b611f3181611f16565b82525050565b6000602082019050611f4c6000830184611f28565b92915050565b60008083601f840112611f6857611f6761196f565b5b8235905067ffffffffffffffff811115611f8557611f84611974565b5b602083019150836020820283011115611fa157611fa0611979565b5b9250929050565b60008083601f840112611fbe57611fbd61196f565b5b8235905067ffffffffffffffff811115611fdb57611fda611974565b5b602083019150836020820283011115611ff757611ff6611979565b5b9250929050565b60008083601f8401126120145761201361196f565b5b8235905067ffffffffffffffff81111561203157612030611974565b5b60208301915083602082028301111561204d5761204c611979565b5b9250929050565b600080600080600080600080600060c08a8c031215612076576120756118d1565b5b60008a013567ffffffffffffffff811115612094576120936118d6565b5b6120a08c828d01611f52565b995099505060208a013567ffffffffffffffff8111156120c3576120c26118d6565b5b6120cf8c828d01611fa8565b975097505060408a013567ffffffffffffffff8111156120f2576120f16118d6565b5b6120fe8c828d01611ffe565b955095505060606121118c828d016119f5565b93505060806121228c828d016119f5565b92505060a06121338c828d0161195a565b9150509295985092959850929598565b60008060008060008060008060a0898b031215612163576121626118d1565b5b600089013567ffffffffffffffff811115612181576121806118d6565b5b61218d8b828c01611f52565b9850985050602089013567ffffffffffffffff8111156121b0576121af6118d6565b5b6121bc8b828c01611fa8565b9650965050604089013567ffffffffffffffff8111156121df576121de6118d6565b5b6121eb8b828c01611ffe565b945094505060606121fe8b828c016119f5565b925050608061220f8b828c016119f5565b9150509295985092959890939650565b600067ffffffffffffffff82111561223a57612239611c7b565b5b602082029050602081019050919050565b600061225e6122598461221f565b611cdb565b9050808382526020820190506020840283018581111561228157612280611979565b5b835b818110156122aa5780612296888261195a565b845260208401935050602081019050612283565b5050509392505050565b600082601f8301126122c9576122c861196f565b5b81356122d984826020860161224b565b91505092915050565b600080600080600060a086880312156122fe576122fd6118d1565b5b600061230c88828901611924565b955050602061231d88828901611924565b945050604086013567ffffffffffffffff81111561233e5761233d6118d6565b5b61234a888289016122b4565b935050606086013567ffffffffffffffff81111561236b5761236a6118d6565b5b612377888289016122b4565b925050608086013567ffffffffffffffff811115612398576123976118d6565b5b6123a488828901611d78565b9150509295509295909350565b6123ba81611939565b82525050565b60006020820190506123d560008301846123b1565b92915050565b600080600080600060a086880312156123f7576123f66118d1565b5b600061240588828901611924565b955050602061241688828901611924565b94505060406124278882890161195a565b93505060606124388882890161195a565b925050608086013567ffffffffffffffff811115612459576124586118d6565b5b61246588828901611d78565b9150509295509295909350565b61247b816118fb565b82525050565b600082825260208201905092915050565b600061249e8385612481565b93506124ab838584611d27565b6124b483611c6a565b840190509392505050565b600060a0820190506124d46000830189612472565b6124e160208301886123b1565b81810360408301526124f4818688612492565b90506125036060830185611b74565b61251060808301846123b1565b979650505050505050565b60006060820190506125306000830187612472565b61253d60208301866123b1565b8181036040830152612550818486612492565b905095945050505050565b60006020820190506125706000830184612472565b92915050565b600060408201905061258b60008301856123b1565b61259860208301846123b1565b9392505050565b600060a0820190506125b46000830189612472565b6125c160208301886123b1565b81810360408301526125d4818688612492565b90506125e36060830185611b74565b6125f06080830184611b74565b979650505050505050565b600060608201905061261060008301866123b1565b61261d60208301856123b1565b61262a60408301846123b1565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215612677576126766118d1565b5b600061268584828501611924565b91505092915050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126126ba576126b961268e565b5b80840192508235915067ffffffffffffffff8211156126dc576126db612693565b5b6020830192506001820236038313156126f8576126f7612698565b5b509250929050565b600082825260208201905092915050565b6000819050919050565b612724816118fb565b82525050565b6000612736838361271b565b60208301905092915050565b60006127516020840184611924565b905092915050565b6000602082019050919050565b60006127728385612700565b935061277d82612711565b8060005b858110156127b6576127938284612742565b61279d888261272a565b97506127a883612759565b925050600181019050612781565b5085925050509392505050565b600082825260208201905092915050565b600080fd5b82818337505050565b60006127ee83856127c3565b93507f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115612821576128206127d4565b5b6020830292506128328385846127d9565b82840190509392505050565b600082825260208201905092915050565b6000819050919050565b600082825260208201905092915050565b60006128768385612859565b9350612883838584611d27565b61288c83611c6a565b840190509392505050565b60006128a484848461286a565b90509392505050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126128d9576128d86128b7565b5b83810192508235915060208301925067ffffffffffffffff821115612901576129006128ad565b5b600182023603831315612917576129166128b2565b5b509250929050565b6000602082019050919050565b6000612938838561283e565b93508360208402850161294a8461284f565b8060005b8781101561299057848403895261296582846128bc565b612970868284612897565b955061297b8461291f565b935060208b019a50505060018101905061294e565b50829750879450505050509392505050565b600060a08201905081810360008301526129bd818a8c612766565b905081810360208301526129d281888a6127e2565b905081810360408301526129e781868861292c565b90506129f66060830185611b74565b612a036080830184611b74565b9998505050505050505050565b6000604082019050612a256000830185611b74565b612a326020830184611b74565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612a7382611939565b9150612a7e83611939565b9250828201905080821115612a9657612a95612a39565b5b92915050565b6000604082019050612ab16000830185612472565b612abe6020830184611b74565b9392505050565b600081905092915050565b6000612adc8385612ac5565b9350612ae9838584611d27565b82840190509392505050565b6000612b02828486612ad0565b9150819050939250505056fea264697066735822122019f22248b1bb53802f85e0536ee14e2ac76d3c768c8a4d58c514ec3040a3b14f64736f6c63430008180033",
  linkReferences: {},
  deployedLinkReferences: {},
} as const;
