import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { BridgeToken, BridgeTokenInterface } from "../BridgeToken";
export declare class BridgeToken__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): BridgeTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BridgeToken;
}
