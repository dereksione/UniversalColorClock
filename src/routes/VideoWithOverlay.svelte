<script>
    import Videobar from "./Videobar.svelte";
    import { onMount } from "svelte";

    let timeNow = new Date();

    $: [hoursLeft, minsLeft] = calculateCountdown(timeNow);
    $: daysLeft = daysBetween(timeNow, mintDate);

    const mintDate = new Date("2023-04-30"); // April 30th, 2023 - 00:00:00

    function calculateCountdown(timeNow) {
        let dateDiff = mintDate - timeNow;
        let delta = new Date(dateDiff);

        return [delta.getHours(), delta.getMinutes()];
    }

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
    <Videobar />
    <div class="text-overlay vertically-centered">
        <div class="UCC">UNIVERSAL COLOR CLOCK</div>
        <div class="tacky-line">Fluid color. Precision time.</div>
    </div>
    <div class="text-overlay countdown">
        <div class="countdown-text">COUNTDOWN TO MINT</div>
        <div class="countdown-numbers">
            {daysLeft} DAYS &nbsp; {hoursLeft} HOURS &nbsp; {minsLeft} MINUTES
        </div>
    </div>
</div>

<style>
    .parent-container {
        position: relative;
    }

    .text-overlay {
        position: absolute;
        color: white;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0);
        /* text-align: center; */
    }

    .vertically-centered {
        top: 55%;
        margin-right: 150px;
        transform: translateY(-50%);
        width: 700px;
        bottom: 30px;
        right: 30px;
    }

    .countdown {
        font-family: "Lato", sans-serif;
        font-weight: 300;
        margin-left: 300px;
        bottom: 30px;
        left: 30px;
        color: rgba(252, 252, 252, 0.5);
    }

    .countdown-text {
        font-size: 20px;
    }

    .countdown-numbers {
        font-size: 45px;
    }

    .tacky-line {
        font-family: "Montserrat", sans-serif;
        font-size: 30px;
        font-weight: 300;
        color: black;
    }

    .UCC {
        font-family: "Lato", sans-serif;
        font-size: 90px;
        font-weight: 600;
    }
</style>
