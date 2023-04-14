<script>
    import DmintiAbout from "./DMINTIAbout.svelte";
    import DanaeAbout from "./DanaeAbout.svelte";
    import Faq from "./FAQ.svelte";

</script>

<div class="container">
    <div class="flex-child leftcol">
        <DmintiAbout />
        <br />
        <br />
        <DanaeAbout />
    </div>
    <div class="flex-child rightcol">
        <Faq />
    </div>
</div>

<style>
    .container {
        display: flex;
        font-family: 'Roboto Condensed', sans-serif;
        font-style: light;
        padding-left: 250px;
        padding-right: 250px;
        padding-top: 150px;
        background-color: black;
        justify-content: center;
        align-content: center;
        color: white;
    }

    .flex-child {
        font-size: 18px;
        font-weight: 100;
        flex: 1;
        width: 620px;
        margin: 25px;
    }
</style>