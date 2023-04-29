<script>
    import DmintiAbout from "./DMINTIAbout.svelte";
    import Faq from "./FAQ.svelte";
</script>

<div class="container" id="infobar">
    <div class="text-container">
        <div class="flex-child leftcol">
            <DmintiAbout />
            <br />
            <br />
        </div>
        <div class="flex-child rightcol">
            <Faq />
        </div>
    </div>
</div>

<style>
    .container {
        font-family: "Roboto Condensed", sans-serif;
        font-style: light;
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        overflow-x: hidden;
    }

    .text-container {
        display: flex;
        width: 80%;

        margin-top: 100px;
        max-width: 1310px;
    }

    .flex-child {
        font-size: 18px;
        font-weight: 100;
        flex: 1;
        width: 50%;
        margin-right: 25px;
        box-sizing: border-box;
    }

    @media(min-width: 1199px) {
        .container {
            height: 950px;
        }
    }

    @media (max-width: 1199px) {
        .leftcol {
            margin-top: 20px;
        }
        .rightcol {
            margin-bottom: 100px;
        }

        .text-container {
            flex-direction: column;
            align-items: center;
        }
        .flex-child {
            margin-right: 0;
        }
    }
</style>
