<script>
// import Google and Facebook
import GoogleIcon from '$lib/assets/google.svg';
import FacebookIcon from '$lib/assets/facebook.svg';
import { page } from '$app/stores';
let errorCode = 0;

let isLogin = true;
console.log(isLogin);

function changeLoginState() {
  isLogin = !isLogin;
  console.log(isLogin);
}
</script>
<div class="background"></div>
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
          <input class="i18n appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="電子信箱">
          <p class="text-xs italic">請注意區分大小寫.</p>
        </div>
        <div class="mb-6">
          <label class="i18n block text-gray-700 text-sm font-bold mb-2" for="password">
            密碼
          </label>
          <input class="i18n appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline {errorCode > 0 ? 'border-red-500' : '' }" id="password" type="password" placeholder="密碼">
          {#if errorCode > 0}
          <p class="i18n text-red-500 text-xs italic">至少有大寫字母、小寫字母、數字或特殊符號中任意兩種的組合</p>
          {/if}
        </div>
        <div class="flex items-center justify-between">
          <button class="i18n next-button" type="button" on:click={location.href='/home'}>
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
    z-index: 99;
    width: 100vw;
    height: 100vh;
    /* padding: 20px; */
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

