<script>
  // loading human svg from static folder
  import { ChevronLeft, MagnifyingGlass } from 'svelte-heros-v2';
  import HumanSvg, { focusBody } from './CMAX-Human.svelte'
	import { onMount } from 'svelte';
  let menuNotReady = true;
  let currentBodyFocus;
  let symptomsList = {
    head: [
      1,2,3,4,5,6,7,8,9,0
    ],
    chest: [
      4,5,6
    ],
    left_arm: [
      7,8,9
    ],
    right_arm: [
      10,11,12
    ],
    stomach: [
      13,14,15
    ], 
    symphysis: [
      16,17,18
    ],
    left_leg: [
      19,20,21
    ],
    right_leg: [
      22,23,24
    ],
    left_knee: [
      25,26,27
    ],
    right_knee: [
      28,29,30
    ],
    left_calves: [
      31,32,33
    ],
    right_calves: [
      34,35,36
    ],
    left_foot: [
      37,38,39
    ],
    right_foot: [
      39,40,41
    ],
  }

  function returnToDefault() {
    currentBodyFocus = undefined;
  }
  // function goto previous page
  function gotoPreviousPage() {
    window.history.back();
  }

  function cancelSelection( ){
    currentBodyFocus = undefined;
    focusBody(undefined);
  }
  function whitespaceCancel(){
    if (currentBodyFocus === undefined) {
      cancelSelection();
    }
  }
  // when currentBodyFocus change
  $: {
    if (currentBodyFocus !== undefined) {
      menuNotReady = false;
    }
    
  }

</script>
<svelte:head>
  <meta name="theme-color" id="theme-color" content="#FFFFFF">
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
<div class="main">
  <div class="headerbar prevent-select border-b flex items-center">
    <div class="flex-none pl-5" on:click={()=>location.href='/'}>
      <ChevronLeft/>
    </div>
    <div class="relative flex-1 w-max mx-5">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlass size="20"/>
            <!-- <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> -->
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full placeholder:text-xs" placeholder="搜尋醫院與醫生" required>
    </div>
    <div class="flex-none text-right pr-5" on:click={gotoPreviousPage}>
      取消
    </div>
  </div>
  <div class="body-control">
    <div class="feature-slot p-5">
      <div class="rotate example">
        <span class="text-xs">旋轉</span>
      </div>
      <div class="gender example">
        <span class="text-xs">性別</span>
      </div>
    </div>
    <div class="bodySelection flex justify-center items-center" on:click={whitespaceCancel}>
      <HumanSvg bind:currentBodyFocus/>
    </div>
  </div>
  
</div>
<div class="process bottom-0 border-t">
  <div class="selection rounded-t-lg {currentBodyFocus === undefined ? 'hide-menu' : 'show-menu'} {menuNotReady ? 'not-ready' : ''}">
    <div class="selection-header px-5 flex items-center">
      <ChevronLeft on:click={cancelSelection} class="mx-2"/>
      <span>{currentBodyFocus === undefined ? '' : currentBodyFocus}</span>
    </div>
    {#if currentBodyFocus !== undefined}
    <div class="selection-body z-0">
      {#each symptomsList[currentBodyFocus] as symptom}
        <div class="selection-item p-5 border-b text-base">
          {symptom}
        </div>
      {/each}
    </div>
    {/if}
  </div>
  <div class="next-process p-5 border-t z-10">
    <div class="grid grid-cols-2 mb-4">
      <div class="symptoms-selection grid-span-1">已選症狀：0/5</div>
      <div class="grid-span-1 text-right text-xs">清空症狀</div>
    </div>
    <div class="next-step text-center p-2 rounded-lg">
      下一步
    </div>
  </div>
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

  .headerbar {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .process {
    margin-top: -160px;
    height:130px;
    background: var(--white-f);
    width: 100%;
  }
  .selection-item, .selection {
    background: var(--white-f);
  }
  .not-ready {
    display:none;
  }
  .process > .show-menu {
    margin-top: -300px;
  }
  .process > .hide-menu {
    margin-top: 0px;
  }
  .hide-menu {
    position: relative;
    animation: slide-up 0.3s forwards;
    opacity: 0;
  }
  .show-menu {
    position: relative;
    animation: slide-down 0.3s forwards;
    opacity: 1;
  }
  @keyframes slide-up {
    0% {
      height: 300px;
      opacity: 1;
    }
    100% {
      height: 0px;
      opacity: 0;
    }
  }
  @keyframes slide-down {
    0% {
      height: 0px;
      opacity: 0;
    }
    100% {
      height: 300px;
      opacity: 1;
    }
  }
  .selection {
    transition-duration: 0.5s;
  }
  .selection::after{
    /* set top border */
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    border-radius: 10px 10px 0px 0px;
    background: var(--white-f);
    /* border: 1px  solid black; */
    border-top: 1px solid var(--blue-2);
    background: var(--blue-1);

  }
  .selection-header {
    background: var(--blue-1);
    padding-bottom: 10px;
  }
  .selection-body {
    height: 265px;
    overflow: auto;
  }

  .symptoms-selection {
    color: var(--blue-4);
  }

  .next-process > .next-step {
    color: var(--white-f);
    background: var(--gray-2);
  }
  .main {
    height: 100vh;
    overflow: hidden;
  }
</style>