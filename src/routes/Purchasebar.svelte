<script>
    import Clock from "./Clock.svelte";
    import GreyButton from "./GreyButton.svelte";

    import { normalColor, timeString } from "./stores";

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

    timeString.subscribe((val) => {
        strTime = val;
    });
</script>

<div class="container">
    <div class="text-container" id="purchase-section">
        <div class="tagline-big">
            <p style="color: rgb({`${hue.r},${hue.g},${hue.b}`})">
                The UC Clock displays 1440 different hues, one for each minute
                of the day.
            </p>
        </div>
        <div class="tagline-desc">
            Each mint is tethered to a specific randomly assigned minute of the day. 
            All 1440 NFTs display the color clock in its entirety and the specific minute that each NFT
            is tethered to will appear brighter and more saturated during that minute than the rest of
            the clock. This enables you to own a unique color, exclusive to your NFT, that correlates
             to a distinct minute in the 24-hour clock.
        </div>
        <div class="tagline-desc"> 
            The Universal Color Clock can be viewed on any device with a browser, projected on the wall,
             or with any number of available custom NFT viewers or frames.
        </div>
        <div class="bottom-container">
            <div class="clock">
                <Clock {hue} {strTime} />
            </div>
            <div class="buy-container">
                <div class="caption-wrapper">
                    <div class="buy-top-caption caption">SELECT QUANTITY</div>
                </div>
                <div class="top-buttons">
                    <div class="top-buttons-row first-row">
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
                    <div class="top-buttons-row second-row">
                        <div class="one-button">
                            <GreyButton buttonText={"4"} />
                        </div>
                        <div class="one-button">
                            <GreyButton buttonText={"5"} />
                        </div>
                        <div class="one-button">
                            <GreyButton buttonText={"6"} />
                        </div>
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
                <div
                    class="mint-disclaimer top-text"
                    style="color:rgb({`${hue.r},${hue.g},${hue.b}`})"
                >
                    <div class="top-text">
                        *A maximum of six mints can be purchased at once
                    </div>
                    <div class="bot-text">
                        **This is a randomized mint. You will be assigned a
                        minute based on the algorithm of the mint.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        width: 100%;
        height: 1460px;
        background-color: black;
        display: flex;
        justify-content: center;
    }

    .text-container {
        justify-content: center;
        font-weight: 200;
        width: 80%;
        max-width: 1310px;
        text-align: left;
    }

    .tagline-big,
    .tagline-desc {
        font-family: SeravekBasicExtraLight;
    }

    .tagline-big {
        font-size: 60px;
        padding-top: 160px;
        padding-right: 30px;
    }

    .tagline-desc {
        color: white;
        font-family: SeravekBasicExtraLight;
        padding-top: 40px;
        font-size: 32px;
        padding-right: 70px;
    }

    .caption-wrapper,
    .mint-disclaimer {
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

    .top-buttons {
        display: flex;
        flex-direction: column;
    }

    .top-buttons-row,
    .bottom-buttons {
        display: flex;
        margin-bottom: 20px;
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
        flex-direction: column;
        display: flex;
        margin-top: 30px;
        padding-right: 10%;
        padding-left: 10%;
        justify-content: center;
        text-align: center;
    }

    .bot-text {
        margin-top: 10px;
    }
</style>
