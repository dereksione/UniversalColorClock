<script>
    import { onMount } from "svelte";
    import timelapse from "../assets/timelapse.mp4";
    import clock from "../assets/clock.mp4";

    let timeNow = new Date();

    const vidHeight = "1080px";
    const vidWidth = "1810px";

    $: [hoursLeft, minsLeft] = calculateCountdown(timeNow);
    $: daysLeft = daysBetween(timeNow, mintDate);

    const mintDate = new Date("2023-04-30"); // April 30th, 2023 - 00:00:00

    /**
     *
     * @param {Date} timeNow
     */
    function calculateCountdown(timeNow) {
        let dateDiff = mintDate - timeNow;
        let delta = new Date(dateDiff);

        return [delta.getHours(), delta.getMinutes()];
    }

    /**
     *
     * @param {Date} date1
     * @param {Date} date2
     */
    function daysBetween(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
        const timeDiff = Math.abs(date2.getTime() - date1.getTime()); // Difference in milliseconds
        const numDays = Math.floor(timeDiff / oneDay); // Round down to get number of days

        return numDays;
    }

    onMount(() => {
        const interval = setInterval(() => {
            timeNow = new Date();
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<div class="parent-container">
    <div class="overlay-container">
        <video class="responsive-video" src={clock} autoplay loop muted playsinline/>
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

    .responsive-video {
        position: absolute;
        min-width: 100%;
        min-height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
