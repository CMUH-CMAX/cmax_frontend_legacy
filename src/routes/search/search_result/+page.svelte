<script>
  import { ChevronLeft, MagnifyingGlass } from 'svelte-heros-v2';
  import { PaperAirplane, Heart, Phone, Bell, Squares2x2, FaceSmile, Map, ChatBubbleOvalLeftEllipsis, Eye } from 'svelte-heros-v2';
	function gotoPreviousPage() {
    window.history.back();
  }

  


  let bulletins = [
    {
      name: '橋書家很大',
      property: '# 家庭醫學',
      address: '台中美術館附近',
      dis: '212',
      tel: '9453777520'
    },
    {
      name: '橋書家大',
      property: '# 家庭醫學',
      address: '台中美術館附近',
      dis: '212',
      tel: '9453777520'
    },
    {
      name: '橋書大',
      property: '# 老大不小 老二賊大',
      address: '台中美術館附近',
      dis: '212',
      tel: '9453777520'
    }
  ]

  function deletehs(num_hs){
    bulletins = bulletins.slice(num_hs);
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


<div class= "main prevent-select bg-white">
  <div class="headerbar prevent-select border-b flex items-center">
    <!-- <div class="flex-none pl-5" on:click={()=>location.href='/'}>
      <ChevronLeft/>
    </div> -->
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



  <!-- history -->
  <div>
    <div class="p-3 border ">
      <p>
        <span class="text-sm font-bold">
          "{bulletins.length}"
        </span>
        <span class="text-gray-900 text-indent-2">
          中醫搜尋結果
          
        </span>
      </p>

    </div>



    <div>
      <!-- for each bulletin -->
      {#each bulletins as bulletin}
      <div class="p-5 cursor-pointer border-b ">
        <div class="m-2">
          <span class="text-2xl font-bold">
            {bulletin.name}
          </span>
          <span class="hs">
            <Heart size="20"/>
          </span>
        </div>
        <div class="m-2" >
          <p class="property_set">
            <span>
              {bulletin.property}
            </span>
          </p>
        </div>
        <div class="m-2">
          <p class="text_set">
            <span class="text-base ">
              地址 :
            </span>
            <span>
              {bulletin.address}
            </span>
            <span class="hs text-xs">
              <PaperAirplane size="12"/>
            </span>
            <span class="hs text-xs hs-dis">
              {bulletin.dis} m 
            </span>
          </p>
        </div>
        <div class="m-2">
          <p class="text_set">
            <span>
              電話 : 
            </span>
            <span>
              {bulletin.tel}
            </span>
            <span class="hs">
              <Phone size="12"/>
            </span>

          </p>
          
        </div>
      </div>
      {/each}
    </div>


  </div>




</div>



<style>
  *{box-sizing: border-box;}

  .headerbar {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .text_set{
    font-weight: 500;
  }


  .property_set{
    color: #67BEBE;
    font-weight: bold;
  }
  .hs{
    float:right;
  }

  .hs-dis{
    float:right;
    width: 50px;
  }
  /* #search-page {
    border-radius: 10px;
    animation: search-page 5s infinite;
    font-size:24px;
  } */
  /* animation search-page */
  /* @keyframes search-page {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }
    80% {
      opacity: 1;
      transform: translateY(-100px);
    }
    100% {
      opacity: 0;
      transform: translateY(-200px);
    }
  } */
</style>