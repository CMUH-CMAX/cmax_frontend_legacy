<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import bell from '$lib/images/bell.svg';
	import { Bell } from 'svelte-heros-v2';

	// set a variable name, future will get it from API.
	let lastname = "殊樵";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="CMAX" />
</svelte:head>

<div class="content-slot mx-auto grid grid-cols-4 gap-4 content-around p-4">
	<div class="col-span-3">
		<p class="text-xl">嗨，<span class="lastname font-semibold">{lastname}</span>！</p>
		<p class="text-xl">今天過得好嗎？</p>
	</div>
	<div>
		<div class="notification flex justify-center items-center">
			<div class="notification-btn flex justify-center items-center rounded-full">
				<Bell variation="solid" size="20" />
			</div>
		</div>
	</div>
	<div class="col-span-4">
		<div class="quick-search-btn p-2 rounded-lg text-center">
			尋找最適合你的中醫及診所
		</div>
	</div>
</div>

<div class="m-2"></div>

<div class="content-slot mx-auto grid p-4">
	<div class="grid grid-cols-4 gap-4 pb-2">
		<p class="col-span-3 text-sm">最近常見症狀</p>
		<p class="text-sm font-bold">查看更多</p>
	</div>

	<div class="recent shadow rounded-md p-4 max-w-sm w-full mx-auto">
		<div class="animate-pulse flex space-x-4">
			<div class="flex-1 space-y-6 py-1">
				<div class="space-y-3">
					<div class="grid grid-cols-3 gap-4">
						<div class="h-2 bg-slate-700 rounded col-span-2"></div>
					</div>
					<div class="h-2 bg-slate-700 rounded"></div>
				</div>
			</div>
			<div class="rounded-full bg-slate-700 h-10 w-10"></div>
		</div>
	</div>
</div>

<div class="m-2"></div>

<div class="content-piece mx-auto">
	<div class="grid grid-cols-4 gap-4 text-center p-4 m-1">
		<div class="grid justify-center">
			<div class="box box-border md:box-content"></div>
			<p class="text-xs">症狀列別</p>
		</div>
		<div class="grid justify-center">
			<div class="box box-border md:box-content"></div>
			<p class="text-xs">症狀檢查器</p>
		</div>
		<div class="grid justify-center">
			<div class="box box-border md:box-content"></div>
			<p class="text-xs">診所地圖</p>
		</div>
		<div class="grid justify-center">
			<div class="box box-border md:box-content"></div>
			<p class="text-xs">許願池</p>
		</div>
	</div>
</div>

<style>
	.content-slot {
		width:100%;
		color: var(--theme-dark);
		background: var(--theme-main-80);
	}

	.content-piece {
		min-width: 80%;
		color: var(--theme-dark);
		background: var(--theme-main-80);
	}

	.quick-search-btn {
		color: var(--theme-dark);
		background: var(--theme-main-20);
	}

	.notification {
		width: 100%;
		height:100%;
	}
	.notification-btn {
		width: 2rem;
		height: 2rem;
		background: var(--theme-main-20);
	}

	.recent {
		color: var(--theme-dark);
		background: var(--theme-main-20);
	}
	.box {
		width: 4em;
		height: 4em;
		background: var(--theme-main-20);
	}
</style>