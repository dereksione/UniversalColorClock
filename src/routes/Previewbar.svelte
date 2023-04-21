<script>
    import GreyButton from "./GreyButton.svelte";
    import { normalColor, saturatedColor } from "./stores";

    /**
     * @type {{ r?: any; g?: any; b?: any; }}
     */
    let hue;
    /**
     * @type {{ r?: any; g?: any; b?: any; }}
     */
    let saturatedHue;

    normalColor.subscribe((val) => {
        hue = val;
    });

    saturatedColor.subscribe((val) => {
        saturatedHue = val;
    });

    /**
     * Returns a function that can be used as the on|click handler function for simple redirects
     * @param {string} redirect
     */
    function createRedirectOnClick(redirect) {
        return () => {
            window.location.href = redirect;
        };
    }

    $: hueString = `rgb(${hue.r},${hue.g},${hue.b})`;
    $: saturatedHueString = `rgb(${saturatedHue.r},${saturatedHue.g},${saturatedHue.b})`;

    /**
     * @type {string}
     */
    $: gradientStyle = `linear-gradient(to right, ${hueString}, ${saturatedHueString})`;
    $: textContent = "◀ &nbsp PREVIEW THE CLOCK ON YOUR DEVICE &nbsp ▶";
    $: previewTextStyle = `background: ${gradientStyle}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: transparent;`;
</script>

<div class="container">
    <div class="centered">
        <div class="base-button items">
            <GreyButton
                buttonText="Base"
                buttonColor={hueString}
                buttonWidth="140px"
                buttonHeight="40px"
                buttonTextColor="black"
                fontSize="17px"
                handleClick={createRedirectOnClick("/colorclock")}
            />
        </div>
        <div class="preview-text items">
            <p style="{previewTextStyle}">{@html textContent}</p>
        </div>
        <div class="base-button items">
            <GreyButton
                buttonText="Bright"
                buttonColor={saturatedHueString}
                buttonWidth="140px"
                buttonHeight="40px"
                buttonTextColor="black"
                fontSize="17px"
                handleClick={createRedirectOnClick("/colorclocksaturated")}
            />
        </div>
    </div>
</div>

<style>
    .container {
        position: fixed;
        bottom: 0;
        background-color: black;
        width: 100%;
        height: 65px;
        z-index: 100;
        align-items: center;
    }

    .preview-text {
        color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .items {
        margin-left: 20px;
    }

    .centered {
        font-family: "Montserrat", sans-serif;
        font-size: 21px;
        font-weight: 700;
        /* padding-top: 5px; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .base-button {
        height: 70%;
    }
</style>
