<script>
  // loading human svg from static folder
  import { ChevronLeft } from 'svelte-heros-v2';
  import HumanSvg, { focusBody } from './CMAX-Human.svelte'
  let currentBodyFocus;
  let symptomsList = {

  }
  $: focusBody( currentBodyFocus );

  function returnToDefault() {
    currentBodyFocus = undefined;
  }
</script>
<svelte:head>
  <meta name="theme-color" id="theme-color" content="#1A5B5B">
  <style>
    body{
      background: #FFFFFF !important;
    }
    header, footer > * {
      display: none;
    }
  </style>
</svelte:head>

<!-- svg -->
<div class="">
  <div class="headerbar grid grid-cols-3 p-5 prevent-select border">
    <div class="return">
      <a href="/">
        <ChevronLeft/>
      </a>
    </div>
    <div class="flex justify-center">Search</div>
    <div class="readed flex justify-end cursor-pointer">Cancel</div>
  </div>
  <div class="body-control">
    <div class="feature-slot p-5">
      <div class="rotate example">
        <span>旋轉</span>
      </div>
      <div class="gender example">
        <span>性別</span>
      </div>
      <div class="state example">
        <span>{currentBodyFocus}</span>
      </div>
    </div>
    <div class="flex justify-center items-center">

      <HumanSvg bind:currentBodyFocus/>
    </div>
  </div>
  <!-- <button class="border" on:click={checkBodyState}>Check</button>   -->
</div>

<style>
  .example {
    position: absolute;
    width:40px;
    text-align: center;
    padding-bottom: 10px;
  }
  /* increase margin-top by number of element */
  .example:nth-child(1) {
    margin-top: 0px;
  }
  .example:nth-child(2) {
    margin-top: 80px;
  }
  .example:nth-child(3) {
    margin-top: 160px;
  }

  .example::before {
    content: ' ';
    width: 40px;
    height:40px;
    display: block;
    background: var(--gray-4);
    border-radius: 50%;
    
  }
</style>