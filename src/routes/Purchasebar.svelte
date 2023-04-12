<script>
    import Clock from "./Clock.svelte";

    let clockColor = "orange";
</script>

<div class="container">
    <Clock {clockColor} />
</div>

<style>
    .container {
        height: 960px;
        background-color: black;
    }
</style>
