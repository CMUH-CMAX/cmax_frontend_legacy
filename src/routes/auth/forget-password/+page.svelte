<script>
  import { ChevronLeft } from 'svelte-heros-v2';
  // highlightNextButton will based on length of #email
  let emailAddress = '';
  let highlightNextButton = true;
  function next() {
    // I already disable the button when emailAddress is empty based on highlightNextButton
    console.log('next');
  }
  $: highlightNextButton = emailAddress.length > 0;
</script>
<div class="background"></div>
<div class="container">
  <!-- header bar that show title and return button -->
  <div class="headerbar grid grid-cols-3 p-5 prevent-select">
    <div class="return">
      <a href="/auth">
        <ChevronLeft color="#BAB6B2"/>
      </a>
    </div>
    <div class="flex justify-center">忘記密碼</div>
  </div>
  <!-- email field and next button -->
  <div class="form">
    <div class="w-full">
      <form class="bg-white">
        <div class="mb-4">
          <label class="i18n block text-gray-700 text-sm font-bold mb-2" for="email">
            電子信箱
          </label>
          <input class="i18n appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="請輸入Email" bind:value={emailAddress}>
          <p class="text-xs italic">請注意區分大小寫.</p>
        </div>
        <div class="flex items-center justify-between">
          <button on:click={next} class="i18n next-button {highlightNextButton ? 'next-available' : ''}" type="button" disabled='{!highlightNextButton}'>
            下一步
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  .container {
    z-index: 99;
    width:100vw;
    height: 100vh;
    background: #FFFFFF;
  }
  .form {
    margin: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
  .next-button {
    width: 100%;
    height: 40px;
    background: #F5F5F5;
    border-radius: 5px;
    border: none;
    color: #BAB6B2;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  .next-available {
    background: var(--linear-2);
    color: #FFFFFF;
  }
  /* override */
	.background{
		position: fixed;
		width: 100vw;
		height: 100vh;
		background: white;
	}
  .app, main {
    background: #fff !important;
  }
</style>