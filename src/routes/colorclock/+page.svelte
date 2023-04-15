<script>
    import { normalHue } from "../../ucc-script/retrieve";
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
</script>

<div class="container" style="background-color: rgb({`${r},${g},${b}`})" />

<style>
    .container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
    }
</style>
