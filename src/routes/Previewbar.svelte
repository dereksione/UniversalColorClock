<script>
    import GreyButton from "./GreyButton.svelte";
</script>

<div class="container">
    <div class="centered">
        <div class="base-button items">
            <GreyButton
                buttonText="Base"
                buttonColor="#a27aef"
                buttonWidth="140px"
                buttonHeight="40px"
                buttonTextColor="black"
                fontSize="17px"
            />
        </div>
        <div class="preview-text items">
            <p>◀ &nbsp PREVIEW THE CLOCK ON YOUR DEVICE &nbsp ▶ </p>
        </div>
        <div class="base-button items">
            <GreyButton
                buttonText="Bright"
                buttonColor="#8a00ff"
                buttonWidth="140px"
                buttonHeight="40px"
                buttonTextColor="black"
                fontSize="17px"
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
        background: linear-gradient(to right, #a27aef, #8a00ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .items {
        margin-left: 20px;
    }

    .centered {
        font-family: 'Montserrat', sans-serif;
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
