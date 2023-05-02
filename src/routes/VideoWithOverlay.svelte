<script>
    import { onMount } from "svelte";
    import timelapse from "../assets/timelapse.mp4";
    import clock from "../assets/clock.mp4";

    import { getNormalHueFromMins } from "../ucc-script/retrieve";

    const vidHeight = "1080px";
    const vidWidth = "1810px";

    const cycleLength = 24;
    let cycleMin = 1;

    $: [r, g, b] = getNormalHueFromMins(cycleMin);
    $: colorString = `rgb({${r},${g},${b}})`;

    onMount(() => {
        let refreshDuration = Math.floor((cycleLength * 1000) / 1440);

        const interval = setInterval(() => {
            cycleMin = cycleMin === 1400 ? 1 : cycleMin + 1;
        }, refreshDuration);

        return () => {
            clearInterval(interval);
        };
    });

</script>

<div class="parent-container">
    <div class="overlay-container" style="background-color: rgb({`${r},${g},${b}`})">
        <!-- <video class="responsive-video" src={clock} autoplay loop muted playsinline/> -->
        <div class="text-overlay vertically-centered">
            <div class="UCC">UNIVERSAL <br /> COLOR CLOCK</div>
            <div class="tacky-line">Fluid color. Precision time.</div>
        </div>
    </div>
</div>

<style>
    .parent-container {
        position: relative;
        overflow: hidden;
        background-color: black;
        width: 100%;
        height: 1080px;
    }

    .overlay-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .text-overlay {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
        padding: 1rem;
        color: white;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0);
    }

    .vertically-centered {
        top: 55%;
        margin-left: 40%;
        /* padding-left: 23%; */
        transform: translateY(-50%);
    }

    .UCC {
        font-family: SimplexUCCA;
        font-size: 90px;
        font-weight: 300;
    }

    .tacky-line {
        width: 100%;
        font-family: SeravekBasicLight;
        padding: 0;
        margin: 0;
        font-size: 42px;
        font-weight: 300;
        color: black;
    }

    @media (max-width: 700px) {

        .vertically-centered {
            margin-left: 10%;
        }
    }

    @media(max-width: 400px) {
        .vertically-centered {
            margin-left: -10%;
        }

        .UCC {
        font-family: SimplexUCCA;
        font-size: 70px;
        font-weight: 300;
    }
    }
</style>
