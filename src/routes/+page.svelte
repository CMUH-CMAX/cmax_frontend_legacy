<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import bell from '$lib/images/bell.svg';
	import { Bell, Squares2x2, FaceSmile, Map, ChatBubbleOvalLeftEllipsis } from 'svelte-heros-v2';

	// set a variable name, future will get it from API.
	let lastname = "殊樵";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="CMAX" />
</svelte:head>

<div class="top-content rounded-b-lg content-slot shadow-md mx-auto grid grid-cols-4 gap-4 content-around p-4">
	<div class="col-span-3">
		<p class="text-xs">Hi，<span class="lastname font-semibold">{lastname}</span>！</p>
		<p class="text-xl">今天過得好嗎？</p>
	</div>
	<div>
		<div class="notification flex justify-center items-center">
			<div class="notification-btn flex justify-center items-center rounded-full">
				<Bell variation="outline" size="24" color="#FFFFFF" />
			</div>
		</div>
	</div>
	<div class="col-span-4">
		<div class="quick-search-btn p-2 rounded-lg text-center">
			尋找最適合你的中醫及診所
		</div>
	</div>
</div>

<div class="content-piece recent-slot grid">
	<div class="grid grid-cols-4 gap-4 pb-2">
		<p class="col-span-3 text-sm font-bold">最近常見症狀</p>
		<p class="text-xs text-end">查看更多</p>
	</div>

	<div class="recent shadow-md rounded-md">
		<div class="animate-pulse flex space-x-4 p-4">
			<div class="rounded-full bg-slate-700 h-10 w-10"></div>
			<div class="flex-1 space-y-6 py-1">
				<div class="space-y-3">
					<div class="grid grid-cols-8 gap-4">
						<div class="h-2 bg-slate-700 rounded col-span-2"></div>
					</div>
					<div class="h-2 bg-slate-700 rounded"></div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="shadow-md rounded-lg feature-slot">
	<div class="grid grid-cols-4 gap-4 text-center p-4">
		<div class="grid justify-center">
			<div class="box box-border md:box-content">
				<Squares2x2 color="white" size="24" />
			</div>
			<p class="text-sm pt-1">症狀列別</p>
		</div>
		<div class="grid justify-center">
			<div class="box box-border md:box-content">
				<FaceSmile color="white" size="24" />
			</div>
			<p class="text-sm pt-1">症狀檢查器</p>
		</div>
		<div class="grid justify-center">
			<div class="box box-border md:box-content">
				<Map color="white" size="24" />
			</div>
			<p class="text-sm pt-1">診所地圖</p>
		</div>
		<div class="grid justify-center">
			<div class="box box-border md:box-content">
				<ChatBubbleOvalLeftEllipsis color="white" size="24" />
			</div>
			<p class="text-sm pt-1">許願池</p>
		</div>
	</div>
</div>

<style>
	:root {
		--main-background-color: linear-gradient(180deg, #FFFFFF 0%, #9ACFD0 100%);;
	}
	.top-content {
		margin-bottom: 100px;
		background: rgba(255, 255, 255, 0.6);
	}
	.content-slot {
		width:100%;
		/* color: var(--text-color); */
		/* background: var(--background-color); */
	}

	.content-piece:not(:last-child) {
		margin-bottom: 20px;
	}

	.quick-search-btn {
		color: white;
		background: var(--theme-main-20);
	}

	.notification {
		width: 100%;
		height:100%;
	}
	.notification-btn {
		width: 40px;
		height: 40px;
		background: var(--linear-background-color);
	}
	.notification-btn > svg {
		color: white;
	}

	.recent {
		color: var(--theme-dark);
		background: var(--linear-background-color);
	}
	
	.feature-slot {
		background: rgba(255, 255, 255, 0.6);
	}
	.feature-slot, .recent-slot {
		margin: 0 20px;
	}
	.box {
		width: 4em;
		height: 4em;
		border-radius: 50%;
		background: var(--linear-background-color);
	}
	.box {
		position: relative;
		/* center */
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>