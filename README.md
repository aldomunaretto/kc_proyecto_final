# QMF Tech Token

Repository with QMF Tech multi-chain token powered by LayerZero.

It contains token contracts, scripts and tests.

## Set-up

Node 18 and Yarn are used to run this project.

Create `.env` file according to [env.d.ts](./env.d.ts).

```bash
# Install dependencies.
yarn
# Compile contracts.
yarn compile
# Run tests.
yarn test
```

## Contracts

The QMFTech multi-chain token is built with OpenZeppelin 5.0.2 ERC20 and LayerZero 2.1.18 OFT contracts.

Three contracts are used for the token, both contained in [QMFTechToken](./contracts/QMFTechToken.sol) file:

- `BaseQMFTechToken`: the bridged token to any LayerZero supported chain. This will be the token that will be deployed in any new chain that wants to be added with native bridging LayerZero support.
- `NativeQMFTechToken`: the native token that will have the initial mints or initial supply and will be deployed in the main chain.
- `TimelockController`: OpenZeppelin timelock implementation for extra security in owner actions.

## Deployment

Deployments are handled through the scripted actions.

The deployment flow could look like this at a high level:

1. Deploy native token at Arbitrum.
1. Deploy bridged token at Optimism.
1. Deploy bridged token at BSC.
1. Deploy bridged token at Polygon PoS.
1. Deploy bridged token at Polygon zkEVM.
1. Deploy bridged Token at Base.
1. Set peers for all relationships between chains:
   - Arbitrum - Optimism
   - Arbitrum - BSC
   - ...
   - Polygon zkEVM - Base

## Bridging

Sending tokens from one chain to another supported chain is handled natively by LayerZero OFT via the `send` function exposed by the token contract, native or bridged.

It can be handled through the scripted action [send](./src/actions/send.ts) or integrated in any other way.

LayerZero OFT send documentation: https://docs.layerzero.network/contracts/oft#calling-send

## Timelocks

Extra security is provided to sensitive token actions by using a timelock contract to handle token ownership.

OpenZeppelin's [TimelockController](https://docs.openzeppelin.com/contracts/5.x/api/governance#TimelockController) is used and imposes sensitive actions to be executed in, at least, 2 steps:

- Schedule action, with a minimum delay previously set in the timelock contract.
- Execute previously scheduled action after the delay has passed.

## Actions

> Note: if any modification is made to the contracts, the [contracts](./src/shared/contracts.ts) file should be updated manually. This is a workaround to Hardhat and viem typings not getting along too well yet.

### Deploy native token

The native token is the one that will mint the total supply and can **only** be minted in one chain.

To deploy this token, first modify the [deployNative](./src/actions/deployNative.ts) script with the chosen chain and the LayerZero endpoint for that chain.

Then, run it.

```bash
yarn ts src/actions/deployNative.ts
```

### Deploy bridged token

Bridged tokens will not mint any token on deployment and will be deployed on any chain.

To deploy this token, first modify the [deployBridged](./src/actions/deployBridged.ts) script with the chosen chain and the LayerZero endpoint for that chain.

Then, run it.

```bash
yarn ts src/actions/deployBridged.ts
```

### Set peers

Once multiple tokens (peers) are deployed, they need to be connected among themselves to allow bridging.

First, modify the [setPeers](./src/actions/setPeers.ts) script with the following information for each deployed token:

- Chain (`viem/chains` import).
- Deployed token address for the chain.
- LayerZero EID for the chain ([list](https://docs.layerzero.network/contracts/endpoint-addresses)).

Then, run it.

```bash
yarn ts src/actions/setPeers.ts
```

### Deploy timelock controller

Deploy a contract that will serve as the owner of the chain token in order to delay execution for owner-controlled actions such as new peer settings.

To deploy this contract, first modify the [deployTimelockController](./src/actions/deployTimelockController.ts) script with the chosen chain, the specified permissions, and the delay wanted (72h is recommended).

Then, run it.

```bash
yarn ts src/actions/deployTimelockController.ts
```

### Set timelock controller

Action to transfer token ownership to previously deployed OpenZeppelin TimelockController contract.

First, modify the [setTimelockController](./src/actions/setTimelockController.ts) script with:

- Token chain.
- Token address.
- Timelock controller address.

```bash
yarn ts src/actions/setTimelockController.ts
```

### Schedule peer settings

Action to schedule the peer setting actions for newly deployed tokens in new chains.

First, modify the [scheduleSetPeers](./src/actions/scheduleSetPeers.ts) script with:

- Peers.
- Timelock controller addresses for each chain.
- Execution delay.

```bash
yarn ts src/actions/scheduleSetPeers.ts
```

### Execute peer settings

Action to execute the peer setting actions for newly deployed tokens in new chains, after the actions have been scheduled and the delay has passed.

First, modify the [executeSetPeers](./src/actions/executeSetPeers.ts) script with:

- Peers.
- Timelock controller addresses for each chain.

```bash
yarn ts src/actions/executeSetPeers.ts
```

### Send

To bridge tokens from one chain to another, the `send` function has to be called in the origin chain token.

First, modify the [send](./src/actions/send.ts) script with the following information:

- Origin chain.
- Destination chain.
- Origin chain token address.
- Destination chain LayerZero EID.
- Destination chain receival TX gas limit.

```bash
yarn ts src/actions/send.ts
```
