<script>
  // @ts-ignore
  export let defaultText = "CONNECT WALLET";
  export let connectedText = "VIEW CLOCK";
  export let textColor = "white";

  import { walletAddress } from "./stores";

  let isConnected = false;

  let outerWidth = 0;

  async function handleClick() {
    if (isConnected) {
      tokenGated();
    } else {
      connectWallet();
    }
  }

  function tokenGated() {
    location.href = "/colorclocktokens";
  }

  // async function connectWallet() {
  //   // @ts-ignore
  //   if (typeof window.ethereum !== "undefined") {
  //     try {
  //       // @ts-ignore
  //       const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  //       isConnected = true;
  //       connectedWallet.set(accounts[0]);
  //     } catch (error) {
  //       isConnected = false;
  //       // @ts-ignore
  //       console.error("Failed to connect:", error.message);
  //     }
  //   } else {
  //     isConnected = false;
  //     console.error("Failed to connect: Ethereum browser not detected");
  //   }
  // }

  async function connectWallet() {
    // @ts-ignore
    if (typeof window.ethereum !== "undefined") {
      try {
        // @ts-ignore
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        isConnected = true; 
      } catch (error) {
        isConnected = false;
        // @ts-ignore
        console.error("Failed to connect:", error.message);
      }
    } else {
      isConnected = false;
      console.error("Failed to connect: Ethereum browser not detected");
      if (outerWidth > 800) {
        alert("Please install a wallet to use this feature.");
      } else {
        alert(
          "If you are on a mobile device, please open this page from within a wallet app. Otherwise, install a wallet to use this feature."
        );
      }
    }
  }
</script>

<svelte:window bind:outerWidth />

<button on:click={handleClick} style="color: {textColor}">
  {#if isConnected}
    {connectedText}
  {:else}
    {defaultText}
  {/if}
</button>

<style>
  button {
    text-decoration: inherit;
    background-color: transparent;
    border: none;
    font-size: inherit;
  }
</style>
