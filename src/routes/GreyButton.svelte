<script>
  export let buttonText = "Default";
  export let buttonWidth = "90px";
  export let buttonColor = "#424040";
  export let buttonTextColor = "white";
  export let buttonHeight = "60px";
  export let fontSize = "20px";
  export let handleClick = () => {};
</script>

<button
  class="rounded-button"
  style="width: {buttonWidth}; height: {buttonHeight}; background-color: {buttonColor}; color: {buttonTextColor}; font-size: {fontSize}"
  on:click={handleClick}
  >{buttonText}</button
>

<style>
  .rounded-button {
    font-family: SeravekBasicLight;
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.2s;
  }

  .rounded-button:hover {
    background-color: darkgrey;
  }
</style>
