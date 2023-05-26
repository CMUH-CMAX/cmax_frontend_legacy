
<script>
  import { ChevronLeft } from 'svelte-heros-v2';
  let bulletin_type_translate = {
    'info': 'blue',
    'warning': 'red',
  }
  let bulletins = [
    {
      type: 'info',
      class: '公告',
      content: "自民國107年開始，民眾看診需自備散彈槍。",
      date: "2023年4月28日 4:49 AM",
      note: "帳戶資料"
    },
    {
      type: 'warning',
      class: '個人',
      content: "您已預約 24 小時候在「樵殊診所」14:30 的看診。",
      date: "2023年4月28日 4:49 AM",
      note: "帳戶資料"
    },
    {
      type: "info",
      class: '公告',
      content: "由於近期台中消波塊之亂，大量民眾流離失所，目前樵殊診所已開放民眾短暫居住，前往時請自備沐浴用品與禦寒衣物。",
      date: "2023年4月28日 4:49 AM",
      note: "帳戶資料"
    }
  ]
</script>
<svelte:head>
  <meta name="theme-color" id="theme-color" content="#67BEBE">
  <style>
    body{
      background: #FFFFFF !important;
    }
    header, footer > * {
      display: none;
    }
  </style>
</svelte:head>

<div>
  <div class="headerbar flex items-center">
    <div class="return px-5 absolute left-0">
      <a href="/">
        <ChevronLeft/>
      </a>
    </div>
    <div class="flex-1 flex justify-center">通知</div>
    <div class=" px-5 absolute right-0">全部已讀</div>
  </div>
  <!-- div grid with one element each row -->
  <div class="grid">
    <!-- for each bulletin -->
    {#each bulletins as bulletin}
    <div class="p-5 border-b">

      <div class="flex mb-1">
        <div class="bulletin-{bulletin_type_translate[bulletin.type] || "undefined"} text-white text-sm py-1 px-1.5 rounded-lg">
          {bulletin.class}
        </div>
      </div>
      <p class="primary text-base">{bulletin.content}</p>
      <p class="secondary text-sm text-gray">
        <span>{bulletin.date}</span>
        <span>・</span>
        <span>{bulletin.note}</span>
      </p>
    </div>
    {/each}
  </div>

  <div class="last-updated text-center text-xs p-5">
    <span>最後更新時間: {new Date().toISOString().replace(/T|Z/g, ' ')}</span>
  </div>

</div>

<style>
  .headerbar {
    background: #67BEBE;
    height: 64px;
    width: 100%;
  }
  .bulletin-blue {
    background: var(--blue-4);
  }
  .bulletin-red {
    background: var(--red-4);
  }
  .bulletin-undefined {
    background: var(--gray-4);
  }

  .primary {
    color: var(--black-0);
  }
  .secondary {
    color: var(--gray-4);
  }
  .last-updated {
    color: var(--gray-4);
  }

</style>