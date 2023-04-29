<script>
    import DMlogo from "../assets/DMlogo.png";
    import AboutMenu from "./AboutMenu.svelte";
    import Community from "./Community.svelte";
    import SignUp from "./SignUp.svelte";
    import Socials from "./Socials.svelte";
</script>

<div class="container">
    <div class="inner-container">
        <div class="dminti-logo section">
            <img src={DMlogo} alt="DMINTI logo" />
        </div>
        <SignUp />
        <AboutMenu />
        <Community />
        <Socials />
    </div>
</div>

<style>
    .container {
        background-color: black;
        display: flex;
        color: white;
        justify-content: center;
        padding-bottom: 40px;
        width: 100%;
    }

    .inner-container {
       
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-family: "Roboto Condensed", sans-serif;
        font-style: light;
        font-weight: 100;
        margin-top: 40px;
    }

    @media (min-width: 1300px) {
        .inner-container {
            width: 90%;
        }
    }

    @media (max-width: 1400px) {
        .inner-container {
            flex-direction: column;
            align-items: center;
            margin-bottom: 150px;
            justify-content: center;
            margin-left: 100px;
        }

        .dminti-logo {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .bot-cols {
            margin-left: 200px;
        }

        .socials {
            margin-left: 10px;
        }
    }
</style>
