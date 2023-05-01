<script>
    import GreyButton from "./GreyButton.svelte";

    import { buyQty, normalColor } from "./stores";

    let hue = {
        r: undefined,
        g: undefined,
        b: undefined,
    };

    /**
     * @type {string}
     */
    let strTime;

    normalColor.subscribe((val) => {
        // @ts-ignore
        hue = val;
    });

    let provider;
    /**
     * @type {ethers.providers.Provider | ethers.Signer | undefined}
     */
    let signer;
    /**
     * @type {string}
     */
    let userAddress;
    /**
     * @type {ethers.Contract}
     */
    let contract;

    import { ethers } from "ethers";

    import abi from "../web3/abi.json";
    import config from "../web3/config.json";
    import { getRandomInt } from "../web3/random";

    async function connectToWallet() {
        // @ts-ignore
        if (typeof window.ethereum !== "undefined") {
            // @ts-ignore
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            console.log("signer", signer);
            userAddress = await signer.getAddress();
            console.log(userAddress);
        } else {
            alert("Please install MetaMask to use this feature.");
        }
    }

    /**
     * @param {number} quantity
     */
    async function callMint(quantity) {
        try {
            await connectToWallet();
            const rand = getRandomInt();
            const price = 0.144 * quantity;

            let etherAmount = ethers.utils.parseEther(price.toString()); // Ether to Wei
            console.log("etherAmount", etherAmount);
            const contractFunc = "mintRandomTokens";

            // Send the transaction along with the specified Ether amount
            const overrides = {
                value: etherAmount, // Include the value in the overrides object
            };

            contract = new ethers.Contract(config.contract, abi, signer);
            console.log(contract[contractFunc]);
            console.log(signer);

            const contractArgs = [userAddress, quantity, rand];

            const tx = await contract[contractFunc](...contractArgs, overrides);
            const receipt = await tx.wait();

            console.log("tx receipt", receipt);
        } catch (e) {
            alert("Something went wrong. Are you connected to your wallet?");
        }
    }

    async function handleEthBuy() {
        console.log("here");
        await callMint(Number($buyQty));
    }
</script>

<div class="container" id="purchase-container">
    <div class="content-wrapper" >
        <div class="caption-wrapper wrapper">PURCHASE THE UNIVERSAL COLOR CLOCK</div>
        <div class="button-wrapper wrapper">
            <div class="one-button eth-button">
                <GreyButton
                    buttonText={"ETH"}
                    buttonWidth="140px"
                    handleClick={handleEthBuy}
                />
            </div>

            <div class="one-button usd-button">
                <GreyButton
                    buttonText={"USD"}
                    buttonWidth="140px"
                    handleClick={() => {
                        location.href =
                            "https://dminti.com/universalcolorclock-purchase/";
                    }}
                />
            </div>
        </div>
        <div class="disclaimer-wrapper wrapper">
            <div
                class="mint-disclaimer top-text"
                style="color:rgb({`${hue.r},${hue.g},${hue.b}`})"
            >
                <div class="top-text text">
                    *A maximum of six mints can be purchased at once
                </div>
                <div class="bot-text text">
                    **This is a randomized mint. <br /> You will be assigned a minute
                    based on the algorithm of the mint.
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    div,
    * {
        margin: 0;
        padding: 0;
    }

    .container {
        background-color: black;
        color: white;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    .content-wrapper {
        margin-top: 120px;
        max-width: 680px;
        width: 90%;
        margin-bottom: 20px;
        font-family: SeravekBasicLight;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .caption-wrapper {
        font-size: 40px;
        justify-content: center;
        text-align: center;
    }

    .button-wrapper {
        display: flex;
        width: 60%;
        justify-content: center;
        display: flex;
    }

    .one-button {
        width: 50%;
        display: flex;
        justify-content: center;
    }

    .disclaimer-wrapper {
        width: 80%;
        text-align: left;
        justify-content: center;
    }

    .top-text {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .wrapper {
        margin-bottom: 20px;
    }

    @media (min-width: 1200px) {
        .caption-wrapper {
            font-size: 50px;
        }
    }

    @media (min-width: 700px) {
        .disclaimer-wrapper {
            margin-left: 10rem;
        }
    }

    @media (max-width: 700px) {
        .container {
            height: 400px;
        }

        .button-wrapper {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .usd-button {
            margin-top: 20px;
        }

        .mint-disclaimer {
            font-size: 12px;
        }

        .disclaimer-wrapper {
            width: 70%;
        }
    }

    @media (max-width: 350px) {
        .caption-wrapper {
            font-size: 30px;
        }
    }

</style>
