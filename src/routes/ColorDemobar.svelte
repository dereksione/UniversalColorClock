<script>
    import { onMount } from "svelte";
    import {
        getNormalHueFromHoursMins,
        getSaturatedHueFromHoursMins,
    } from "../ucc-script/retrieve";

    import { colorCode, normalColor, saturatedColor } from "./stores";

    /**
     * @type {HTMLCanvasElement}
     */
    let normalSpectrum;
    /**
     * @type {HTMLCanvasElement}
     */
    let saturatedSpectrum;

    /**
     * @type {string}
     */
    let hueString;
    /**
     * @type {{ r: any; g: any; b: any; }}
     */
    let hue;
    /**
     * @type {{ r: any; g: any; b: any; }}
     */
    let saturatedHue;

    colorCode.subscribe((val) => {
        hueString = val;
    });

    normalColor.subscribe((val) => {
        // @ts-ignore
        hue = val;
    });

    saturatedColor.subscribe((val) => {
        // @ts-ignore
        saturatedHue = val;
    });

    // @ts-ignore
    function paintCanvas(width, height, data, huepickerFn) {
        let col = 0;

        outer: while (true) {
            for (let hour = 0; hour < 24; hour++) {
                for (let mins = 0; mins < 60; mins += 5) {
                    if (col === width) break outer;

                    const [r, g, b] = huepickerFn(
                        hour.toString(),
                        mins.toString()
                    );

                    // Fills a column of pixel with a hue
                    for (let y = 0; y < height; y++) {
                        const index = (y * width + col) * 4;
                        data[index] = r; // red
                        data[index + 1] = g; // green
                        data[index + 2] = b; // blue
                        data[index + 3] = 255; // alpha (fully opaque)
                    }

                    col++; // Move on to the next co
                }
            }
        }
    }

    /**
     * @param {HTMLCanvasElement} element
     * @param {{ (hours: string, mins: string): number[]; (hours: string, mins: string): number[]; }} huepickerFn
     */
    function setUpCtx(element, huepickerFn) {
        const ctx = element.getContext("2d");
        const width = element.width;
        const height = element.height;
        // @ts-ignore
        const imageData = ctx.createImageData(width, height);
        let data = imageData.data;
        paintCanvas(width, height, data, huepickerFn);

        // @ts-ignore
        ctx.putImageData(imageData, 0, 0);
    }

    onMount(() => {
        setUpCtx(normalSpectrum, getNormalHueFromHoursMins);
        setUpCtx(saturatedSpectrum, getSaturatedHueFromHoursMins);
    });
</script>

<div class="container">
    <div
        class="top-hue inner"
        style="background-color: rgb({`${hue.r},${hue.g},${hue.b}`})"
    >
        <div class="text-outer">
            <div class="text-inner">YOUR CLOCK HAS ALL OF THESE</div>
        </div>
    </div>
    <div class="middle-hue inner">
        <div class="normal-spectrum">
            <canvas bind:this={normalSpectrum} />
        </div>
        <div class="saturated-spectrum">
            <canvas bind:this={saturatedSpectrum} />
        </div>
    </div>
    <div
        class="bot-hue inner"
        style="background-color: rgb({`${saturatedHue.r},${saturatedHue.g},${saturatedHue.b}`})"
    >
        <div class="text-outer">
            <div class="text-inner">AND ONE OF THESE</div>
        </div>
    </div>
</div>

<style>
    .container {
        height: 240px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .inner {
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .text-outer {
        width: 70%;
        height: 100%;
        display: flex;
        font-family: SeravekBasicExtraLight;
        font-size: 38px;
        align-items: center;
        justify-content: center;
    }

    .text-inner {
        display: flex;
        align-items: center;
    }

    .middle-hue {
        display: flex;
        flex-direction: column;
    }

    .normal-spectrum {
        height: 70%;
        width: 100%;
    }

    .saturated-spectrum {
        height: 30%;
        width: 100%;
    }

    canvas {
        width: 100%;
        height: 100%;
    }
</style>
