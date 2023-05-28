<div class="flex justify-center items-center p-5 h-screen">
  <div id="search-page" class="bg-teal-800 text-white px-5 py-2  text-center">
    <h1>搜尋尚未完成</h1>
    <a href="/search/body" class="text-sm text-black">
      但是身體搜尋在這
    </a>
  </div>
</div>

<style>
  #search-page {
    border-radius: 10px;
    animation: search-page 5s infinite;
    font-size:24px;
  }
  /* animation search-page */
  @keyframes search-page {
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
  }
</style>