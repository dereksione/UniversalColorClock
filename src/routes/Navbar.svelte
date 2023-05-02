<script>
    import WalletButton from "./WalletButton.svelte";
    import { normalColor } from "./stores";

    const fileUrl =
        "https://medici-labs.mypinata.cloud/ipfs/QmXW1vADpGG6omWsrj7n9AuyQZfUNFCH3PBFBwDW2MBRyX";

    /**
     * @type {string}
     */
    let hueString;

    normalColor.subscribe((hue) => {
        hueString = `rgb(${hue.r},${hue.g},${hue.b})`;
    });

    import { onMount } from "svelte";

    let isOpen = false;

    // @ts-ignore
    function toggleMenu(event) {
        if (
            event.target.tagName === "A" &&
            event.target.closest(".fullscreen-menu")
        ) {
            isOpen = false;
        } else {
            isOpen = !isOpen;
        }
    }

    const handleResize = () => {
        if (window.innerWidth >= 700) {
            isOpen = false;
        }
    };

    onMount(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
</script>

<home>
    <header class="primary-header flex">
        <div class="clock">
            <div class="hamburger" on:click={toggleMenu}>
                <svg viewBox="0 0 100 80" width="30" height="30">
                    <rect width="100" height="10" fill={hueString} />
                    <rect y="30" width="100" height="10" fill={hueString} />
                    <rect y="60" width="100" height="10" fill={hueString} />
                </svg>
            </div>
        </div>
        <nav class="nav-menu">
            <ul class="primary-navigation blank-list flex">
                <li>
                    <a href="#aboutRicci" style="color: {hueString};">
                        RICCI ALBENDA
                    </a>
                </li>
                <li>
                    <a href={fileUrl} style="color: {hueString};" download>
                        ABOUT UCC</a
                    >
                </li>
                <li>
                    <a href="#infobar" style="color: {hueString};"> FAQ </a>
                </li>
                <li>
                    <a href="#infobar" style="color: {hueString};"> DMINTI </a>
                </li>
                <li>
                    <a href="#purchase-container" style="color: {hueString};">
                        PURCHASE NOW
                    </a>
                </li>
                <li>
                    <WalletButton textColor={hueString} />
                </li>
            </ul>
        </nav>
    </header>
</home>

{#if isOpen}
    <div class="fullscreen-menu" on:click={toggleMenu}>
        <a href="#aboutRicci" style="color: {hueString};"> RICCI ALBENDA </a>
        <a class="menu-link" href={fileUrl} style="color: {hueString};" download> ABOUT UCC</a>
        <a class="menu-link" href="#infobar" style="color: {hueString};"> FAQ </a>
        <a class="menu-link" href="#infobar" style="color: {hueString};"> DMINTI </a>
        <a class="menu-link" href="#purchase-container" style="color: {hueString};">
            PURCHASE NOW
        </a>
        <WalletButton textColor={hueString} />
    </div>
{/if}

<style>
    .flex {
        display: flex;
        gap: var(--gap, 4rem);
    }

    .clock {
        margin: 2rem;
    }

    .hamburger {
        display: none;
    }

    .nav-menu {
        margin: 3rem;
    }

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

    .fullscreen-menu {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 1);
        transition: all 0.3s ease;
    }

    @media (max-width: 900px) {
        .nav-menu {
            display: none;
        }

        .hamburger {
            display: block;
        }

        .fullscreen-menu {
            display: flex;
            z-index: 400000;
        }

        a {
            margin-bottom: 3rem;
            font-family: SeravekBasicLight;
            font-size: 64;
        }
    }
</style>
