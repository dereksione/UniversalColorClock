<script>
    import timelapse from "../assets/timelapse.mp4";
  </script>
  
  <style>
    .container {
      display: flex;
      /* justify-content: center; */
      width: 100%;
      height: 1040px;
      overflow: hidden;
    }
  
    .responsive-video {
      width: auto;
      height: 100%;
    }
  </style>
  
  <div class="container">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="responsive-video" src={timelapse} autoplay loop muted></video>
  </div>