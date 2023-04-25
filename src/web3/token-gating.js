// Imports the Alchemy SDK
import { Alchemy, Network } from "alchemy-sdk";

const contractAddress = "0xC0F084a3791e6541b44a790Dd65F807Ce657A210";

// Configures the Alchemy SDK
const config = {
    apiKey: "Gkaat5l3v9JWXtCf7S8odWmv0j7Qzc-M", // Replace with your API key
        network: Network.ETH_SEPOLIA, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

 /**
     * @param {string} address
     * @returns { Promise<number[]> } An array of NFT token ids
     */
export async function fetchNFTs(address) {
    /**
     * @type {number[]}
     */
    let nftsOwned = [];

    let optionalParams = {
        contractAddress: contractAddress,
        omitMetadata: true,
    }

    //Call the method to get the nfts owned by this address
    let response = await alchemy.nft.getNftsForOwner(address, optionalParams);

    nftsOwned = response.ownedNfts.map(val => {
        return Number(val.tokenId)
    });

    return nftsOwned
}
