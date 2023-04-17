<script>
    import { onMount } from "svelte";
    import { getNormalHueFromHoursMins, getSaturatedHueFromHoursMins, getHueCode } from "../ucc-script/retrieve";

    let normalSpectrum;
    let normalHeight;
    let normalWidth;
    let saturatedSpectrum;

    function paintCanvas(width, height, data, huepickerFn) {
        let col = 0;

        outer:
        while (true) {
            for (let hour = 0; hour < 24; hour++) {
                for (let mins = 0; mins < 60; mins+=5) {
                    if (col === width) break outer;

                    console.log("hour", hour, "mins", mins);
                    const [r, g, b] = huepickerFn(hour.toString(), mins.toString());

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

    function setUpCtx(element, huepickerFn) {
        const ctx = element.getContext('2d');
        const width = element.width;
        const height = element.height;
        const imageData = ctx.createImageData(width, height);
        let data = imageData.data;
        paintCanvas(width, height, data, huepickerFn);

        ctx.putImageData(imageData, 0, 0);
    }

    onMount(() => {
        setUpCtx(normalSpectrum, getNormalHueFromHoursMins);
        setUpCtx(saturatedSpectrum, getSaturatedHueFromHoursMins);
  });
</script>

<div class="container">
    <div class="top-hue inner"></div>
    <div class="middle-hue inner">
        <div class="normal-spectrum">
            <canvas bind:this={normalSpectrum} />
        </div>
        <div class="saturated-spectrum" >
            <canvas bind:this={saturatedSpectrum}/>
        </div>
    </div>
    <div class="bot-hue inner">
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

    .top-hue {
        background-color: #a27aef;
    }

    .bot-hue {
        background-color: #8a00ff;
    }


</style>