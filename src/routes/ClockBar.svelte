<script>
    import { onMount } from "svelte";
    import Clock from "./Clock.svelte";
    import Dropdown from "./Dropdown.svelte";
    import GreyButton from "./GreyButton.svelte";

    import { buyQty, normalColor, timeString } from "./stores";

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
            Each mint is tethered to a specific randomly assigned minute of the
            day. All 1440 NFTs display the color clock in its entirety and the
            specific minute that each NFT is tethered to will appear brighter
            and more saturated during that minute than the rest of the clock.
            This enables you to own a unique color, exclusive to your NFT, that
            correlates to a distinct minute in the 24-hour clock.
        </div>
        <div class="tagline-desc">
            The Universal Color Clock can be viewed on any device with a
            browser, projected on the wall, or with any number of available
            custom NFT viewers or frames.
        </div>
        <div class="bottom-container">
            <div class="clock">
                <Clock {hue} {strTime} />
            </div>

        </div>
    </div>
</div>

<style>
    .container {
        width: 100%;
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
        padding-left: 30px;
    }

    .tagline-big {
        font-size: 60px;
        padding-top: 80px;
        padding-right: 30px;
    }

    .tagline-desc {
        color: white;
        font-family: SeravekBasicExtraLight;
        padding-top: 40px;
        font-size: 32px;
        padding-right: 70px;
    }

    .bottom-container {
        display: flex;
        padding-top: 50px;
        justify-content: center;
    }

    .clock {
        font-family: SimplexUCCABold;
        font-size: 70px;
        font-weight: 800;
        margin-top: 20px;
        white-space: nowrap;
    }

    @media (max-width: 800px) {
        .clock {
            font-size: 60px;
        }
    }

    @media (max-width: 650px) {
        .clock {
            font-size: 40px;
        }
    }

</style>
