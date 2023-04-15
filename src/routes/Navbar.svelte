<script>
    import { tick } from "svelte";
    import Clock from "./Clock.svelte";
    // let currentTime;

    let clockColor = "orange";
</script>

<home>
    <header class="primary-header flex">
        <div class="clock">
            <Clock />
        </div>
        <nav class="nav-menu">
            <ul class="primary-navigation blank-list flex">
                <li>
                    <a href="#aboutRicci"> RICCI ALBENDA </a>
                </li>
                <li>
                    <a href="#infobar"> DMINTI </a>
                </li>
                <li>
                    <a href="#infobar"> FAQ </a>
                </li>
                <li>
                    <a href="https://www.google.com"> PREVIEW </a>
                </li>
                <li>
                    <a href="https://www.google.com"> PURCHASE NOW </a>
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

    .clock {
        font-family: "Lato", sans-serif;
        font-size: 42;
    }

    .primary-header {
        align-items: center;
        justify-content: space-between;
        background-color: black;
        margin: 0;
        padding: 0;
        height: 75px;
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%;
        z-index: 100; 
    }

    .blank-list {
        font-family: "Montserrat", sans-serif;
        font-size: 22;
        font-weight: 400;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: white;
        text-decoration: inherit;
    }

    a:hover {
        color: grey;
    }

    .primary-navigation {
    }
</style>
