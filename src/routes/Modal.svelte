<!-- Modal.svelte -->
<script>
    import { ethers } from "ethers";
    import { fetchNFTs } from "../web3/token-gating";
    import { onMount } from "svelte";

    /**
     * @type {any}
     */
    export let closeModal;
    /**
     * @type {string | undefined}
     */
    let walletAddress;
    /**
     * @type {any[]}
     */
    let NFTsOwned = [];
    
    const contractId = "0xdCF17ce7044869C235b570e7a4Fd63DeCc0169B9";

    let selectedNFT = 1441;

    $: console.log(selectedNFT);
    $: console.log(walletAddress);

    onMount(async () => {
        await fetch();
    })

    async function fetch() {
        let provider = new ethers.providers.Web3Provider(window.ethereum);
            let signer = provider.getSigner();
            console.log("signer", signer);
            walletAddress = await signer.getAddress();

            NFTsOwned = await fetchNFTs(walletAddress);
    }
</script>

<div class="modal-backdrop" on:click={closeModal}>
    <div class="modal-content" on:click={(e) => e.stopPropagation()}>
        <slot>
            <select bind:value={selectedNFT}>
                {#each NFTsOwned as NFT}
                    <option value={NFT}>
                        {NFT}
                    </option>
                {/each}
            </select>
            <!-- <io-print-button
                blockchain="eth"
                contract-id={contractId}
                token-id={`${selectedNFT}`}
                owner-id={walletAddress}
                asset-url="https://openseauserdata.com/files/55cf5265b7c6467a5d43d21a56644e1e.mp4"
                redirect-url="https://universalcolorclock.xyz"
                item-title="Ricci Albenda's Universal Color Clock"
            /> -->
        </slot>
    </div>
</div>

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background-color: white;
        height: 20rem;
        width: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        border-radius: 4px;
        position: relative;
    }

    select {
        width: 80%;
        height: 40px;
    }
</style>
