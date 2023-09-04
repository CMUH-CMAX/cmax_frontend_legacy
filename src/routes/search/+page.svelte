<script>
  import { ChevronLeft, MagnifyingGlass } from 'svelte-heros-v2';
  import { XMark, Squares2x2, FaceSmile, Map, ChatBubbleOvalLeftEllipsis, Eye } from 'svelte-heros-v2';
	function gotoPreviousPage() {
    window.history.back();
  }

   


  let bulletins = [
    {
      search_history: '橋書家很大',
      url: '/search/search_result'
    },
    {
      search_history: '橋書很大',
      url: '/search/search_result'
    },
    {
      search_history: '橋書大',
      url: '/search/search_result'
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


<div class= "main prevent-select bg-gray">
  <div class="headerbar prevent-select border-b flex items-center " >
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



  <div class="service-slot m-5 prevent-select bg-white border-b border-top ">
		<div class="service-card grid grid-cols-2  rounded-lg py-5 mt-2">
			<div class="service-items col">
				<div class="service-icon flex justify-center items-center rounded-full mb-2">
					<Squares2x2 color="#67BEBE" size="32"/>
				</div>
				<span class="text-sm">依症狀分類搜尋</span>
			</div>

      <a href="/search/body">
        <div class="service-items col">
          <div class="service-icon flex justify-center items-center rounded-full mb-2">
            <FaceSmile color="#67BEBE" size="32"/>
          </div>
          <span class="text-sm ">依身體部位搜尋</span>
        </div>
      </a> 
		</div>
	</div>

  <!-- history -->
  <div>
    <div class="p-3">
      <p>
        <span class="text-2xl font-bold">
          最近搜尋
        </span>
        <span class="hs">
          <div class="flex-none text-right pr-5 service-items clear text-gray-900" on:click={deletehs(bulletins.length)}>
            全部清除
          </div>
        </span>
      </p>

    </div>



    <div>
      <!-- for each bulletin -->
      {#each bulletins as bulletin}
      <div class="p-3 cursor-pointer">
        <p class="text-base">
          <span>
            <a href={bulletin.url}>{bulletin.search_history}</a>
            
          </span>
          <span class="hs">
            <div class="flex-none text-right pr-5 ">
              <XMark color="#A0A0A0" size="15"/>
            </div>
          </span>
        </p>
      </div>
      {/each}
    </div>
  
    <div class="last-updated text-center border text-xs p-5 text-gray-900">
      <span>沒有更多搜尋結果了</span>
    </div>



  </div>




</div>



<style>
  *{box-sizing: border-box;}

  .headerbar {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .service-card {
		background: var(--white-75p);
	}

	.service-items {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition-duration: 0.1s;
	}
	.service-items > * {
		cursor: pointer;
	}
	.service-items:hover {
		/* scale */
		transform: scale(1.1);
	}
	.service-icon {
		width: 57px;
		height: 57px;
		background: var(--white);
	}

  .hs{
    float:right;
  }

  .clear{
    cursor: pointer;
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