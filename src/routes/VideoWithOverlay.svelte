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
            <div class="UCC">UNIVERSAL <br /> COLOR CLOCK</div>
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

<!--     
/* .vertically-centered {
    top: 55%;
    margin-right: 150px;
    transform: translateY(-50%);
    width: 700px;
    bottom: 30px;
    right: 30px;
} */ -->

<!-- <style> 
    .parent-container {
        position: relative;
        display: flex;
        background-color: black;
    }

    .overlay-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        color: white;
    }

    .text-overlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }

    /* .text-overlay {
        position: relative;
        color: white;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0);
        align-items: center;
    } */

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
</style> -->

<style>
    .parent-container {
        position: relative;
        overflow: hidden;
        background-color: black;
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
        margin-left: 400px;
        /* padding-left: 23%; */
        transform: translateY(-50%);
    }

    .countdown {
        font-family: SimplexUCCA;
        text-align: left;
        font-weight: 300;
        bottom: 30px;
        margin-right: 770px;
        color: rgba(252, 252, 252, 0.5);
    }

    .countdown-text {
        text-align: left;
        width: 100%;
        margin-bottom: 10px;
        font-family: SeravekBasicLight;
        font-size: 20px;
    }

    .countdown-numbers {
        font-size: 36px;
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
</style>
