<script>
    import DmintiAbout from "./DMINTIAbout.svelte";
    import DanaeAbout from "./DanaeAbout.svelte";
    import Faq from "./FAQ.svelte";

</script>

<div class="container">
    <div class="flex-child leftcol">
        <DmintiAbout />
        <DanaeAbout />
    </div>
    <div class="flex-child rightcol">
        <Faq />
    </div>
</div>

<style>
    .container {
        display: flex;
        background-color: black;
        color: white;
    }

    .flex-child {
        flex: 1;
        margin: 2rem;
    }
</style>