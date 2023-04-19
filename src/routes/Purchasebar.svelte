<script>
    import Clock from "./Clock.svelte";
    import GreyButton from "./GreyButton.svelte";
    import { normalHue } from "../ucc-script/retrieve";
    import { onMount } from "svelte";

    let time = new Date();

    $: [r, g, b] = normalHue(time);

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    let quantity = 1;

    function handleQuantitySelection() {
        
    }
</script>

<div class="container">
    <div class="text-container" id="purchase-section">
        <div class="tagline-big">
            <p style="color: rgb({`${r},${g},${b}`})">
                The UC Clock displays 1440 different hues, one for each minute
                of the day.
            </p>
        </div>
        <div class="tagline-desc">
            You can view it on any device with a browser, projected on the wall
            or in a custom frame. Each mint is unique, having its own chosen
            minute and corresponding 1441st color that can be toggled on or off
            like a visual alarm.
        </div>
        <div class="bottom-container" >
            <div class="clock">
                <Clock />
            </div>
            <div class="buy-container" >
                <div class="caption-wrapper">
                    <div class="buy-top-caption caption">SELECT QUANTITY</div>
                </div>
                <div class="top-buttons">
                    <div class="one-button">
                        <GreyButton buttonText={"1"} />
                    </div>
                    <div class="one-button">
                        <GreyButton buttonText={"2"} />
                    </div>
                    <div class="one-button">
                        <GreyButton buttonText={"3"} />
                    </div>
                </div>
                <div class="caption-wrapper">
                    <div class="buy-bottom-caption caption">PURCHASE WITH</div>
                </div>
                <div class="bottom-buttons">
                    <div class="one-button">
                        <GreyButton buttonText={"USD"} buttonWidth="140px" />
                    </div>
                    <div class="one-button eth">
                        <GreyButton buttonText={"ETH"} buttonWidth="140px" />
                    </div>
                </div>
                <div class="mint-disclaimer" style="color:rgb({`${r},${g},${b}`})">
                    *This is a randomized mint. You will be assigned a minute based on the algorithm of the mint. 
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        padding: 0;
        margin: 0;
        height: 960px;
        background-color: black;
        display: flex;
        justify-content: center;
    }

    .text-container {
        justify-content: center;
        font-weight: 200;
        /* margin-left: 350px; */
        width: 1050px;
    }

    .tagline-big, .tagline-desc {
        font-family: SeravekBasicExtraLight;
    }

    .tagline-big {
        font-size: 60px;
        padding-top: 160px;
    }

    .tagline-desc {
        color: white;
        font-family: SeravekBasicExtraLight;
        padding-top: 40px;
        font-size: 32px;
    }

    .caption-wrapper, .mint-disclaimer {
        font-family: SeravekBasicLight;
    }

    .caption-wrapper {
        display: flex;
        justify-content: center;
    }

    .bottom-container {
        display: flex;
        padding-top: 50px;
        justify-content: center;
    }

    .clock {
        font-family: SimplexUCCABold;
        font-size: 80px;
        font-weight: 800;
        margin-top: 20px;
        margin-right: 120px;
        white-space: nowrap;
    }

    .buy-container {
        color: white;
        font-size: 19px;
    }

    .buy-top-caption {
        margin-top: 50px;
        margin-bottom: 20px;
    }

    .buy-bottom-caption {
        margin-top: 40px;
        margin-bottom: 20px;
    }

    .top-buttons,
    .bottom-buttons {
        display: flex;
        justify-content: center;
    }

    .one-button {
        margin-right: 20px;
    }

    .eth {
        margin-left: 15px;
    }

    .mint-disclaimer {
        font-size: 14px;
        /* margin-left: 30px; */
        margin-top: 30px;
        justify-content: center;
    }

</style>
