<script>
// import Google and Facebook
import GoogleIcon from '$lib/assets/google.svg';
import FacebookIcon from '$lib/assets/facebook.svg';

let errorCode = 0;

let emailAddress = '', password = '';
let isLogin = true, highlightNextButton = false;
let nextStep = 2;

function changeLoginState() {
  isLogin = !isLogin;
  console.log(isLogin);
}
function submit() {
  // fake fetch
  nextStep = 2;
  setTimeout(() => {
    nextStep = 0;
    location.href = '/home';
  }, 1000);
}

$: highlightNextButton = emailAddress.length > 0 && password.length > 0;
$: if(nextStep == 2) submit()
// when nextStep = 2, fetch data from server (fake fetch, just wait 1 second)

</script>
<div class="background"></div>
<!-- loading container cover -->
{#if nextStep === 2}
<div class="container loading">
  <!-- loading circle -->
  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
</div>
{/if}
{#if nextStep === 1}
<div class="container policy">
  <div class="confirm-box">
    <span class="title mt-6">服務協定</span>
    <div class="policy-details px-6">
      <hr>
      <span class="p-6">
        歡迎您註冊OOOO。目前註冊前請您仔細閱讀以下服務協定與隱私政策的內容。特別是有關搜集、處理、分享您個人資料的目的、範圍等相關資料處理規則。
      </span>
      <br>
      <span>
        如您同意上述全部協定，請點擊同意上述全部協定後方可註冊OOOOApp。如您不同意任一協定內容，請停止註冊我們的服務。
      </span>
    </div>
    <!-- more info links, on the bottom -->
    <!-- bottom -->
    <div class="policy-info">
      <div class="text-center text-gray-500 text-xs">
        <span>登入即表示同意</span>
        <a href="/policy/service">服務協定</a>
        <a href="/policy/privacy">隱私權政策</a>
      </div>
      <!-- agree, disagree buttno -->
      <div class="policy-btn-box flex justify-start">
        <button class="i18n policy-btn" on:click={submit}>同意</button>
        <button class="i18n policy-btn" on:click={() => {nextStep = 0}}>不同意</button>
      </div>
    </div>
  </div>
</div>
{/if}
<div class="container">
  {#if isLogin}
  <h1 class="i18n welcome">歡迎來到中醫地圖</h1>
  {:else}
  <h1 class="i18n welcome">註冊中醫地圖</h1>
  {/if}
  <div class="form">
    <div class="w-full max-w-xs">
      <form class="bg-white">
        <div class="mb-4">
          <label class="i18n block text-gray-700 text-sm font-bold mb-2" for="username">
            電子信箱
          </label>
          <input class="i18n appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="電子信箱" bind:value="{emailAddress}">
          <p class="text-xs italic">請注意區分大小寫.</p>
        </div>
        <div class="mb-6">
          <label class="i18n block text-gray-700 text-sm font-bold mb-2" for="password">
            密碼
          </label>
          <input class="i18n appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline {errorCode > 0 ? 'border-red-500' : '' }" id="password" type="password" placeholder="密碼" bind:value="{password}">
          {#if errorCode > 0}
          <p class="i18n text-red-500 text-xs italic">至少有大寫字母、小寫字母、數字或特殊符號中任意兩種的組合</p>
          {/if}
        </div>
        <div class="flex items-center justify-between">
          <button class="i18n next-button {highlightNextButton ? 'next-available' : 'next-disabled'}" type="button" on:click={()=>{nextStep = 1}} disabled={!highlightNextButton}>
            下一步
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        {#if isLogin}
        <span>還沒有帳號？</span> <button on:click={changeLoginState}>立即註冊</button>
        {:else}
        <a href="/auth/forget-password" class="font-[1000]">忘記密碼？</a> <button on:click={changeLoginState}>立即登入</button>
        {/if}
      </p>
    </div>
  </div>
  <div class="grid other w-full max-w-xs">
    <div class="bottom-content">
      <!-- thematic divider -->
      <div class="thematic-divider">
        <div class="thematic-divider-line"></div>
        <div class="thematic-divider-text i18n">其他登入方式</div>
        <div class="thematic-divider-line"></div>
      </div>
      <div class="oauth">
        <div class="oauth-btn google-oauth">
          <img src="{GoogleIcon}" alt="" class="oauth-img">
          <span class="i18n oauth-text">Google</span>
        </div>
        <div class="oauth-btn facebook-oauth">
          <img src="{FacebookIcon}" alt="" class="oauth-img">
          <span class="i18n oauth-text">使用 Facebook 帳號登入</span>
        </div>
        <!-- privary policy -->
        <div class="text-center text-gray-500 text-xs">
          <span>登入即表示同意</span>
          <a href="/policy/service">服務協定</a>
          <a href="/policy/privacy">隱私權政策</a>
        </div>

      </div>
    </div>
  </div>
</div>

<style>
	.background{
		position: fixed;
		width: 100vw;
		height: 100vh;
		background: white;
	}
  .container {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    margin:0px auto;
    z-index: 98;
    width: 100vw;
    height: 100vh;
    /* padding: 20px; */
  }
  .loading{
    display: grid;
    place-items: center;

    z-index: 99;
    position: fixed;
    top:0px;
    width: 100vw;
    height: 100vh;    
    /* transparent gray background */
    background: rgba(0,0,0,0.5);

  }
  .loading > .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .loading > .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid var(--blue-4);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--blue-4) transparent transparent transparent;
  }
  .loading > .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .loading > .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .loading > .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid var(--blue-4);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--blue-4) transparent transparent transparent;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .policy {
    display: grid;
    place-items: center;

    z-index: 99;
    position: fixed;
    top:0px;
    width: 100vw;
    height: 100vh;    
    /* transparent gray background */
    background: rgba(0,0,0,0.5);

  }
  .policy-info {
    margin-top: 1rem;
  }
  .policy-btn-box {
    margin-top: 1rem;
  }
  .policy-btn {
    width: 50%;
    cursor: pointer;
    padding: 0.5rem 1rem;
  }
  .policy-btn:first-child {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #ddd;
    border-right-width: 1px;
    border-right-style: solid;
  }
  .policy-btn:last-child {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #ddd;
    border-left-width: 1px;
    border-left-style: solid;
  }
  .confirm-box {
    width: 80%;
    /* height: 80%; */
    background: white;
    padding-top: 1rem;
    text-align: center;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  hr {
    width: 100%;
    border: 1px solid #ddd;
  }
  .policy-btn {
    color: var(--blue-4);
  }
  input{
    padding: 0.5rem;
  }
  .form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: aliceblue; */
  }
  .next-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    margin: 0.25rem 0;
    color: #fff;
  }
  .next-disabled {
    background: #ddd;
  }
  .next-available {
    background: var(--linear-2);
  }
  .border-red-500 {
    border-color: #f56565;
  }
  .text-red-500 {
    color: #f56565;
  }
  .other{
    align-items: end;
    /* background-color: antiquewhite; */
  }
  .welcome {
    text-align: center;
    margin: 5rem 0 1rem 0;
    font-size: 1.5rem;
  }
  .thematic-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
  }
  .thematic-divider-line{
    width: 33%;
    height: 1px;
    background-color: #ddd;
  }
  .thematic-divider-text{
    margin: 0 0.20rem;
    font-size: 0.75rem;
    color: #999;
  }
  .oauth{
    width: 100%;
  }
  .oauth-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    margin: 0.25rem 0;
  }
  .oauth-img {
    /* width: 1rem; */
    margin-right: 0.5rem;
  }
  .google-oauth {
    background-color: #fff;
    color: #000;
  }
  .facebook-oauth {
    background-color: #1877F2;
    color: #fff;
  }
  .app, main {
    background: #fff !important;
  }
</style>

