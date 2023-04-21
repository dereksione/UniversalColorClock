<script>
    import Navbar from "./Navbar.svelte";
    import Purchasebar from "./Purchasebar.svelte";
    import ColorDemobar from "./ColorDemobar.svelte";
    import PurchaseFramebar from "./PurchaseFramebar.svelte";
    import RicciAbout from "./RicciAbout.svelte";
    import Infobar from "./Infobar.svelte";
    import BottomBar from "./BottomBar.svelte";
    import Previewbar from "./Previewbar.svelte";
    import VideoWithOverlay from "./VideoWithOverlay.svelte";

    // Update store values every min
    import { beforeUpdate, onMount } from "svelte";
    import { updateTimeEveryMin } from "./clock";

    onMount(updateTimeEveryMin);
</script>

<Navbar />
<VideoWithOverlay />
<Purchasebar />
<ColorDemobar />
<PurchaseFramebar />
<RicciAbout />
<Infobar />
<BottomBar />
<Previewbar />
