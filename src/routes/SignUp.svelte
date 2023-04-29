<div class="container">
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
</div>

<style>
    .container {
        width: 650px;
        margin-top: 50px;
        padding: 0 10px; /* Add this */
        box-sizing: border-box; /* Add this */
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

    .submit-wrapper {
        text-align: right;
        align-self: flex-end;
        font-size: 16px;
    }

    @media (max-width: 750px) {
        .section {
            width: 500px;
        }

        .line {
            width: 500px;
        }
    }
</style>
