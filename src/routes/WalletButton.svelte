
<script>
    // @ts-ignore
    export let defaultText = "CONNECT WALLET";
    export let connectedText = "VIEW YOUR NFTS";
    export let textColor = "white";
  
    let isConnected = false;
    let account = "";

    async function handleClick() {
      if (isConnected) {
        tokenGated()
      } else {
        connectWallet()
      }
    }
    
    function tokenGated() {
      location.href = "/colorclock"
    }
  
    async function connectWallet() {
      // @ts-ignore
      if (typeof window.ethereum !== "undefined") {
        try {
          // @ts-ignore
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          isConnected = true;
          account = accounts[0];
          console.log("Connected wallet address:", account);
        } catch (error) {
          isConnected = false;
          // @ts-ignore
          console.error("Failed to connect:", error.message);
        }
      } else {
        isConnected = false;
        console.error("Failed to connect: Ethereum browser not detected");
      }
    }
  </script>
  
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
  