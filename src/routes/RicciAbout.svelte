<script>
    import { normalColor } from "./stores";

    /**
     * @type {{ r?: any; g?: any; b?: any; }}
     */
    let hue;

    normalColor.subscribe((val) => {
        hue = val;
    });
</script>

<div
    class="container"
    id="aboutRicci"
    style="background-color: rgb({`${hue.r},${hue.g},${hue.b}`})"
>
    <div class="inner-container">
        <p>
            Ricci Albenda (b. 1966, Brooklyn) lives and works in New York. In
            2020, Albenda had a solo exhibition at Parrasch Heinjen, Los
            Angeles, and in 2018, at 'T'space, Rhineback, New York. Other past
            solo exhibitions include the Museum of Modern Art, New York, and The
            Rachofsky House, Dallas. His work has been included in numerous
            group exhibitions at venues which include, The Guggenheim Museum,
            New York , Tel Aviv Museum of Art, Tel Aviv, Institute of
            Contemporary Art, Boston, Brooklyn Museum of Art, Brooklyn, Castello
            Di Rivoli, Turin, Museum of Modern Art, New York, MoMA PS1, Queens,
            Centre Georges Pompidou, Paris, and the New Museum, New York. Ricci
            Albenda's work is held in the permanent collections of the Musuem of
            Modern Art, New York, the Dallas Museum of Art, Dallas,
            Albright-Knox Art Gallery, Buffalo, Castello di Rivoli, Turin, The
            Solomon R. Guggenheim Museum, New York, and the Hessel Museum of
            Art, Annadale-on-Hudson, New York.
        </p>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        box-sizing: border-box;
    }

    .inner-container {
        font-family: SeravekBasicLight, sans-serif;
        font-weight: 100;
        font-size: 32px;
        max-width: 1310px;
        overflow-wrap: break-word;
        box-sizing: border-box;
        width: 100%;
    }

    @media (min-width: 768px) {
        .inner-container {
            width: 80%;
        }
    }

    @media (min-width: 1024px) {
        .inner-container {
            width: 70%;
        }
    }

    @media (min-width: 1300px) {
        .inner-container {
            width: 60%;
        }
    }
</style>

