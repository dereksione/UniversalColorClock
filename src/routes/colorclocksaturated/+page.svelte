<script>
    import { saturatedHue } from "../../ucc-script/retrieve";
    import { onMount } from "svelte";

    let time = new Date();
    let expandVisible = true;
    /**
     * @type {any}
     */
    let timeout;
    const expandButtonTimeout = 3000;

    $: [r, g, b] = saturatedHue(time);

    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    let isFullscreen = false;

    /**
     * @param {{ key: any; }} event
     */
    function keyEventHandler(event) {
        if (event.key === "Escape") {
            if (isFullscreen) exitFullScreen();

            console.log("Esc press detected");
        } else if (event.key === "f") {
            isFullscreen ? exitFullScreen() : enterFullScreen();
            isFullscreen = !isFullscreen;

            console.debug("F press detected");
        }
    }

    function enterFullScreen() {
        if (!document.fullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                // Firefox
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                // Chrome, Safari and Opera
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                // IE/Edge
                document.documentElement.msRequestFullscreen();
            }
        }
    }

    function exitFullScreen() {
        if (document.fullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                // @ts-ignore
            } else if (document.mozCancelFullScreen) {
                // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                // Chrome, Safari and Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                // IE/Edge
                document.msExitFullscreen();
            }
        }
    }

    // Expand button
    function toggleExpandVisibility() {
        clearTimeout(timeout);
        expandVisible = true;

        timeout = setTimeout(() => {
            expandVisible = false;
        }, expandButtonTimeout);
    }

    onMount(() => {
        window.addEventListener("mousemove", toggleExpandVisibility);
        window.addEventListener("keydown", toggleExpandVisibility);

        return () => {
            window.removeEventListener("mousemove", toggleExpandVisibility);
            window.removeEventListener("keydown", toggleExpandVisibility);
        };
    });

    function handleButtonClick() {
        enterFullScreen();
        exitFullScreen();
    }
</script>

<svelte:window on:keydown={keyEventHandler} />

<div class="container" style="background-color: rgb({`${r},${g},${b}`})">
    {#if expandVisible}
        <button class="expand" on:click={handleButtonClick}>&#x26F6 </button>
    {/if}
</div>

<style>
    .expand {
        font-size: 60px;
        background-color: inherit;
        border: none;
        color: white;
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .expand:focus {
        outline: none;
        border: none;
    }

    .container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
    }
</style>
