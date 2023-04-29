<script>
    import timelapse from "../assets/timelapse.mp4";

    export let vidWidth;
    export let vidHeight;
</script>

<div class="container">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
        class="responsive-video"
        src={timelapse}
        autoplay
        loop
        muted
        playsinline
        controls
    />
</div>

<style>
    .container {
        /* display: flex; */
        /* justify-content: center; */
        width: 100%;
        height: 1040px;
        overflow: hidden;
    }

    .responsive-video {
        width: auto;
        height: 100%;
        object-fit: cover;
    }
    /* Media query for screens larger than the video width */
    @media (min-width: 1810px) {
        .container {
            justify-content: center;
        }

        .responsive-video {
            object-fit: contain;
        }
    }
</style>
