<script>
    // @ts-nocheck

    import largeframe from "../assets/largeframe.png";
    import smallframe from "../assets/smallframe.png";

    import { normalHue } from "../ucc-script/retrieve";
    import { onMount } from "svelte";
    import Modal from "./Modal.svelte";
    import { ethers } from "ethers";
    import { fetchNFTs } from "../web3/token-gating";

    let time = new Date();

    $: [r, g, b] = normalHue(time);
    $: colorString = `rgb(${r},${g},${b})`;

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    let NFTsOwned = [];
    let walletAddress;

    // initialise modal state and content
    let showModal = false;
    let modalContent;

    // pass in component as parameter and toggle modal state
    function toggleModal(component) {
        modalContent = component;
        showModal = !showModal;
    }

    async function showTestModal() {
        // @ts-ignore
        if (typeof window.ethereum !== "undefined") {
            // @ts-ignore
            let provider = new ethers.providers.Web3Provider(window.ethereum);
            let signer = provider.getSigner();
            console.log("signer", signer);
            walletAddress = await signer.getAddress();

            NFTsOwned = await fetchNFTs(walletAddress);
            if (NFTsOwned.length === 0) {
                alert(
                    "You do not own any NFTs in this collection. Please buy some to access this feature!"
                );
                return;
            }
        } else {
            alert("Please connect your wallet to access this feature");
            return;
        }

        toggleModal(Modal);
    }
</script>

<div class="container">
    <div class="inner-container">
        <div class="right-col col">
            <div class="large-asset asset">
                <img
                    src={largeframe}
                    alt="Large Digital Art Frame showing the color for the current time"
                    style="background-color: {colorString}"
                />
            </div>
            <div class="purchase-text right-purchase-text">
                <h1>
                    PURCHASE <a
                        href="https://dminti.com/universalcolorclock-purchase/"
                        style="color: {colorString};">HERE</a
                    >
                </h1>
                <p>
                    Shop all options at
                    <a
                        style="color: {colorString}"
                        href="https://www.museframe.io/?sca_ref=3686575.AhWpj6nnhB"
                    >
                        Muse Frames
                    </a>
                </p>
            </div>
        </div>
        <div class="left-col col">
            <div class="frame-text left-content">
                <div class="text">
                    <span style="color: {colorString};"
                        >Customize the frame</span
                    > with your token to bring Ricci Albenda's Universal Color Clock
                    into your home!
                </div>
            </div>
            <div class="small-frame left-content">
                <div class="small-asset asset">
                    <img
                        src={smallframe}
                        alt="Smaller Digital Art Frame showing the color for the current time"
                        style="background-color: {colorString}"
                    />
                </div>
                <div class="purchase-text">
                    <h1>
                        PURCHASE
                        <!-- <button
                            on:click={() => showTestModal()}
                            style="color: {colorString};">HERE</button
                        > -->
                        <a
                            href="https://dminti.com/universalcolorclock-purchase/"
                            style="color: {colorString};">HERE</a
                        >
                    </h1>
                    <p>
                        See more examples at
                        <a
                            style="color: {colorString}"
                            href="https://infiniteobjects.com/"
                            >Infinite Objects</a
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

{#if showModal}
    <Modal closeModal={() => toggleModal(null)}>
        <svelte:component
            this={modalContent}
            closeModal={() => toggleModal(null)}
        />
    </Modal>
{/if}

<style>
    .container {
        height: 1000px;
        background-color: white;
        align-items: center;
    }

    .inner-container {
        width: 80%;
        max-width: 1310px;
        font-family: "Montserrat", sans-serif;
        font-weight: 200;
    }

    button {
        background: none;
        border: none;
        padding: 0;
        font-family: inherit;
        font-size: inherit;
        text-decoration: underline;
        cursor: pointer;
    }

    .container,
    .inner-container,
    .frame-text,
    .asset {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1230px) {
        .inner-container {
            margin-top: 40px;
        }

        .container,
        .inner-container {
            flex-direction: column;
            justify-content: left;
            align-items: left;
        }

        .right-purchase-text {
            margin-left: 35px;
        }

        .container {
            height: 1800px;
        }

        .col {
            margin-bottom: 40px;
        }

        .right-col {
            max-height: 900px;
        }

        .left-content {
            max-height: 1400px;
        }

        .left-col {
            max-height: 1800px;
        }

        .small-asset {
            margin-top: 60px;
        }
    }

    @media (max-width: 1230px) {
        .container {
            height: 2000px;
        }
    }

    @media (max-width: 850px) {
        .right-purchase-text {
            margin-left: 15px;
        }
    }

    .right-col {
        width: 50%;
        max-width: 655px;
    }

    .left-col {
        width: 50%;
        max-width: 655px;
    }

    .left-content {
        padding-left: 10%;
        padding-right: 10%;
        flex-direction: column;
    }

    .text {
        display: inline-grid;
    }

    .frame-text {
        height: 40%;
        font-size: 38px;
        padding-bottom: 7%;
        margin: 0;
    }

    .purchase-text {
        height: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
</style>
