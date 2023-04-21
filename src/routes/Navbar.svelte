<script>
    import { tick } from "svelte";
    import Clock from "./Clock.svelte";
    import WalletButton from "./WalletButton.svelte";
    // let currentTime;

    let clockColor = "orange";
</script>

<home>
    <header class="primary-header flex">
        <div class="clock">
            Placeholder
        </div>
        <nav class="nav-menu">
            <ul class="primary-navigation blank-list flex">
                <li>
                    <a href="#aboutRicci"> RICCI ALBENDA </a>
                </li>
                <li>
                    <a href="/colorclock"> ABOUT UCC</a>
                </li>
                <li>
                    <a href="#infobar"> FAQ </a>
                </li>
                <li>
                    <a href="#infobar"> DMINTI </a>
                </li>
                <li>
                    <a href="#purchase-section"> PURCHASE NOW </a>
                </li>
                <li>
                    <WalletButton />
                </li>
            </ul>
        </nav>
    </header>
</home>

<style>
    .flex {
        display: flex;
        gap: var(--gap, 4rem);
    }

    .clock,
    .nav-menu {
        margin: 3rem;
    }

    /* .clock {
        font-family: SimplexUCCA, sans-serif;
        font-size: 32px;
        align-items: center;
        padding-top: 20px;
    } */

    .primary-header {
        align-items: center;
        justify-content: space-between;
        background-color: black;
        margin: 0;
        padding: 0;
        height: 90px;
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%;
        z-index: 100; 
        display: flex;
    }

    .blank-list {
        font-family: SeravekBasicLight;
        font-size: 32;
        font-weight: 500;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: white;
        text-decoration: inherit;
        font-size: inherit;
    }

    a:hover {
        color: grey;
    }
</style>
