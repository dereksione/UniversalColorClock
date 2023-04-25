// Imports the Alchemy SDK
import { Alchemy, Network } from "alchemy-sdk";
import configFile from "./config.json";

const contractAddress = configFile.contract;

// Configures the Alchemy SDK
const config = {
    apiKey: configFile.apiKey, // Replace with your API key
    network: configFile.testnet ? Network.ETH_SEPOLIA : Network.ETH_MAINNET, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

/**
    * @param {string} address
    * @returns { Promise<number[]> } An array of NFT token ids
    */
export async function fetchNFTs(address = "0x5a227909fb9a81ACd94925961783f8322Cd5bBf7") {
    /**
     * @type {number[]}
     */
    let nftsOwned = [];

    let optionalParams = {
        contractAddresses: [contractAddress],
        omitMetadata: true,
    }

    //Call the method to get the nfts owned by this address
    let response = await alchemy.nft.getNftsForOwner(address, optionalParams);

    nftsOwned = response.ownedNfts.map(val => {
        return Number(val.tokenId)
    });

    console.log(nftsOwned);

    return nftsOwned
}
