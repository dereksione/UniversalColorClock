<script>
    import { onMount } from "svelte";
    import timelapse from "../assets/timelapse.mp4";

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
        <video class="responsive-video" src={timelapse} autoplay loop muted />
        <div class="text-overlay vertically-centered">
            <div class="UCC">UNIVERSAL COLOR CLOCK</div>
            <div class="tacky-line">Fluid color. Precision time.</div>
        </div>
        <div class="text-overlay countdown">
            <div class="countdown-text">COUNTDOWN TO MINT</div>
            <div class="countdown-numbers">
                {daysLeft} DAYS {hoursLeft} HOURS {minsLeft} MINUTES
            </div>
        </div>
    </div>
</div>

<style>
    .parent-container {
        position: relative;
        display: flex;
        background-color: black;
    }

    .text-overlay {
        position: absolute;
        color: white;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0);
    }

    .vertically-centered {
        top: 55%;
        margin-right: 150px;
        transform: translateY(-50%);
        width: 700px;
        bottom: 30px;
        right: 30px;
    }

    .responsive-video {
        width: auto;
        height: 100%;
        object-fit: cover;
    }

    /* Media query for screens larger than the video width */
    @media (min-width: 1810px) {
        .parent-container {
            justify-content: center;
        }

        .responsive-video {
            object-fit: contain;
        }
    }

    .countdown {
        font-family: SimplexUCCA;
        font-weight: 300;
        margin-left: 300px;
        margin-bottom: 80px;
        bottom: 30px;
        left: 30px;
        color: rgba(252, 252, 252, 0.5);
    }

    .countdown-text {
        font-family: SeravekBasicLight;
        font-size: 20px;
    }

    .countdown-numbers {
        font-size: 36px;
    }

    .tacky-line {
        font-family: SeravekBasicLight;
        font-size: 42px;
        font-weight: 300;
        color: black;
    }

    .UCC {
        font-family: SimplexUCCA;
        font-size: 100px;
        font-weight: 300;
    }
</style>
