<script>
    export let buttonText = "Default";
    export let buttonWidth = "90px";
  </script>
  
  <button class="rounded-button" style="width: {buttonWidth}">{buttonText}</button>
  
  <style>
    .rounded-button {
      background-color: #424040;
      color: white;
      border: none;
      border-radius: 30px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      height: 60px;
      outline: none;
      transition: background-color 0.2s;
    }
  
    .rounded-button:hover {
      background-color: darkgrey;
    }
  </style>