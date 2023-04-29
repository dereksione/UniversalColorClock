<script>
    import { onMount } from 'svelte';
    import { buyQty } from './stores';
  
    export let buttonText = 'Select';
    export let buttonWidth = '90px';
    export let buttonColor = '#424040';
    export let buttonTextColor = 'white';
    export let buttonHeight = '60px';
    export let fontSize = '20px';
    export let options = ["1", "2", "3", "4", "5", "6"];
    export let selected = "1"; // 1 is selected by default is nobody changed it
  
    let dropdownVisible = false;
  
    function toggleDropdown() {
      dropdownVisible = !dropdownVisible;
    }
  
    /**
     * @param {string} option
     */
    function selectOption(option) {
      selected = option;
      buttonText = option;
      dropdownVisible = false;
      buyQty.set(buttonText);
    }
  
    onMount(() => {
      if (options.length > 0) {
        selected = options[0];
        buttonText = selected;
      }
    });
  </script>
  
  <div class="dropdown-container" style="width: {buttonWidth}">
    <button
      class="rounded-button"
      style="width: {buttonWidth}; height: {buttonHeight}; background-color: {buttonColor}; color: {buttonTextColor}; font-size: {fontSize}"
      on:click={toggleDropdown}
    >
      {buttonText}
    </button>
    {#if dropdownVisible}
      <ul class="dropdown-menu">
        {#each options as option}
          <li class="dropdown-item" style="background-color: {buttonColor};" on:click={() => selectOption(option)}>{option}</li>
        {/each}
      </ul>
    {/if}
  </div>
  
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
  
    .dropdown-container {
      position: relative;
      display: inline-block;
    }
  
    .dropdown-menu {
      position: absolute;
      width: 100%;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      list-style-type: none;
      margin: 0;
      padding: 0;
      z-index: 1;
      overflow: hidden;
    }
  
    .dropdown-item {
      font-family: SeravekBasicLight;
      padding: 10px 20px;
      cursor: pointer;
      white-space: nowrap;
      align-items: center;
      text-align: center;
      font-size: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .dropdown-item:first-child {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .dropdown-item:last-child {
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
  
    .dropdown-item:hover {
      background-color: darkgrey;
      color: white;
    }
  
    .dropdown-item:last-child {
      border-bottom: none;
    }
  </style>
  