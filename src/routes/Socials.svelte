<script>
    import twitter from "../assets/twitter.png";
    import insta from "../assets/insta.png";
</script>

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

<style>
    .socials {
        display: flex;
    }

    a {
        color: white;
        text-decoration: inherit;
    }

    .section {
        padding: 0px;
        box-sizing: border-box;
        margin-bottom: 30px;
    }

    .list-heading {
        margin-bottom: 10px;
        font-size: 18px;
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

    @media (max-width: 1400px) {
        .section {
            width: 630px;
            justify-content: center;
        }
    }
</style>
