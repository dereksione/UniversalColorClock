<script>
    import DMlogo from "../assets/DMlogo.png";
    import twitter from "../assets/twitter.png";
    import insta from "../assets/insta.png";
</script>

<div class="container">
    <div class="inner-container">
        <div class="dminti-logo section">
            <img src={DMlogo} alt="DMINTI logo" />
        </div>
        <div class="contact-form section">
            <form>
                <div class="input-wrapper">
                    <input type="text" name="name" placeholder="Name" />
                    <div class="line" />
                </div>
                <div class="input-wrapper">
                    <input type="email" name="email" placeholder="Email" />
                    <div class="line" />
                </div>
                <div class="submit-wrapper">
                    <input type="submit" value="SIGN UP FOR UPDATES" />
                </div>
            </form>
        </div>
        <div class="about section">
            <div class="list-heading">ABOUT</div>
            <ul>
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Our Team</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                <li>
                    <a href="">Artist's project</a>
                </li>
            </ul>
        </div>
        <div class="community section">
            <div class="list-heading">COMMUNITY</div>
            <ul>
                <li>
                    <a href="">DMINTI metaverse</a>
                </li>
                <li>
                    <a href="">Events</a>
                </li>
                <li>
                    <a href="">Programming</a>
                </li>
                <li>
                    <a href="">DMINTI X MOCA podcast</a>
                </li>
                <li>
                    <a href="">Metaverse Mondays</a>
                </li>
                <li>
                    <a href="">NFT Thursdays</a>
                </li>
            </ul>
        </div>
        <div class="follow section">
            <div class="list-heading">FOLLOW</div>
            <a href="mailto:info@dminti.com">info@dminti.com</a>
            <div class="socials">
                    <a href="">
                        <img
                            id="twitter"
                            class="social-image"
                            src={twitter}
                            alt="Twitter logo"
                        />
                    </a>
                    <a href="">
                        <img
                            class="social-image"
                            id="insta"
                            src={insta}
                            alt="Instagram logo"
                        />
                    </a>
            </div>
        </div>
    </div>
</div>

<style>
    li {
        list-style: none;
        font-size: 16px;
    }

    .list-heading {
        font-size: 18px;
    }

    .list-heading,
    li {
        margin-bottom: 10px;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    a {
        color: white;
        text-decoration: inherit;
    }

    .contact-form {
        width: 640px;
        /* background-color: aqua; */
    }

    .dminti-logo {
        /* width: 80px; */
    }

    .container {
        height: 350px;
        background-color: black;
        display: flex;
        color: white;
        justify-content: center;
    }

    .inner-container {
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        justify-content: space-between;
        font-family: "Roboto Condensed", sans-serif;
        font-style: light;
        font-weight: 100;
    }

    .section {
        margin-top: 30px;
        padding: 0 10px; /* Add this */
        box-sizing: border-box; /* Add this */
    }

    .dminti-logo.section,
    .follow.section {
        padding: 0; /* Remove padding from the first and last sections */
    }

    .input-wrapper {
        position: relative;
        margin-bottom: 20px;
    }

    .line {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-top: 10px;
        width: 610px;
        height: 1px;
        background-color: white;
    }

    input[type="text"],
    input[type="email"] {
        border: none;
        outline: none;
        background: none;
        color: white;
    }

    input[type="submit"] {
        cursor: pointer;
    }

    input[type="submit"] {
        cursor: pointer;
        border: none;
        background: none;
        color: inherit;
        font: inherit;
    }

    .socials {
        margin-top: 10px;
        display: flex;
    }

    .social-image {
        max-width: 20px;
        padding-right: 5px;
        width: 100%;
        height: auto;
    }

    #twitter {
        padding-top: 7px;
    }

    #insta {
        max-width: 45px;
    }

    .submit-wrapper {
        text-align: right;
        align-self: flex-end;
        font-size: 16px;
    }
</style>
