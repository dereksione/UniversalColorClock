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
        font-family: 'Roboto Condensed', sans-serif;
        font-style: light;
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        height: 950px;
    }

    .text-container {
        display: flex;
        width: 80%;
        max-width: 1310px;
        margin-top: 100px;
    }

    .flex-child {
        font-size: 18px;
        font-weight: 100;
        flex: 1;
        width: 50%;
        margin-right: 25px;
    }
</style>