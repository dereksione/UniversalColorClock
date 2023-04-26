<script>
    import largeframe from "../assets/largeframe.png";
    import smallframe from "../assets/smallframe.png";

    import { normalHue } from "../ucc-script/retrieve";
    import { onMount } from "svelte";
    let time = new Date();

    $: [r, g, b] = normalHue(time);
    $: colorString = `rgb(${r},${g},${b})`;

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<dev class="container">
    <div class="inner-container">
        <div class="right-col col">
            <div class="large-asset asset">
                <img
                    src={largeframe}
                    alt="Large Digital Art Frame showing the color for the current time"
                    style="background-color: {colorString}"
                />
            </div>
            <div class="purchase-text">
                <h1>INQUIRE TO PURCHASE</h1>
                <p>
                    See more examples at
                    <a style="color: {colorString}" href=""> Muse Frames </a>
                </p>
            </div>
        </div>
        <div class="left-col col">
            <div class="frame-text left-content">
                <div class="text">
                    <span style="color: {colorString};">Customize the frame</span> with
                    your token to bring Ricci Albenda's Universal Color Clock
                    into your home!
                </div>
            </div>
            <div class="small-frame left-content">
                <div class="small-asset asset">
                    <img
                        src={smallframe}
                        alt="Smaller Digital Art Frame showing the color for the current time"
                        style="background-color: {colorString}"
                    />
                </div>
                <div class="purchase-text">
                    <h1>INQUIRE TO PURCHASE</h1>
                    <p>
                        See more examples at
                        <a style="color: {colorString}" href=""
                            >Infinite Objects</a
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</dev>

<style>
    .container {
        width: 100%;
        height: 1200px;
        background-color: white;
        align-items: center;
    }

    .inner-container {
        width: 80%;
        max-width: 1310px;
        height: 80%;
        font-family: "Montserrat", sans-serif;
        font-weight: 200;
    }

    .container,
    .inner-container,
    .frame-text,
    .asset {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .col {
        height: 100%;
        padding-left: 10%;
        padding-right: 10%;
    }

    .right-col {
        width: 50%;
        height: 100%;
    }

    .left-col {
        width: 50%;
    }

    .left-content {
        padding-left: 10%;
        padding-right: 10%;
        flex-direction: column;
    }

    .text {
        display: inline-grid;
    }

    .frame-text {
        height: 40%;
        font-size: 38px;
        padding-bottom: 7%;
        margin: 0;
    }

    .purchase-text {
        height: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
