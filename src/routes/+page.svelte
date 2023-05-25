<script>
		import { Bell, Squares2x2, FaceSmile, Map, ChatBubbleOvalLeftEllipsis, Eye } from 'svelte-heros-v2';
		let lastname = '殊橋';
		let symptomsRank = [
			{
				name: '發燒',
				view: 3578,
			},
			{
				name: '紅疹',
				view: 1324
			}
		];
</script>

<div class="">
	<div class="top-content content-slot mx-auto grid grid-cols-4 gap-4 content-around p-5">
		<div class="col-span-3 text-white">
			<p class="text-xs">Hi，<span class="lastname font-semibold">{lastname}</span>！</p>
			<p class="text-base">今天過得好嗎？</p>
		</div>
		<div class="flex justify-end">
			<div class="notification">
				<div class="notification-btn rounded-full w-10 h-10 flex justify-center items-center">
					<Bell variation="outline" size="24" class="bell" />
				</div>
			</div>
		</div>
		<div class="col-span-4">
			<p class="quicksearch-btn p-2 rounded-lg text-center">
				尋找最適合的中醫及診所
			</p>
		</div>
	</div>

	<div class="signin-slot m-5 text-white flex justify-center items-center outline">
		<h1>月兔</h1>
	</div>

	<div class="recent-slot grid m-5">

		<div class="grid grid-cols-4 gap-4 pb-2 white-text">
			<p class="col-span-3 text-sm gap-4 pb-2 white-text">最近常見症狀</p>
			<p class="text-sm text-end">查看更多</p>
		</div>

		<div class="grid grid-cols-2">

			<div class="symptoms-card flex col-span rounded px-5 py-3.5 text-sm">
				<div class="flex justify-start">
					{symptomsRank[0]['name']}
				</div>
				<div class="flex justify-end mr-0 ml-auto items-center">
					<Eye variation="outline" size="14" class="eye" />
					<span>{symptomsRank[0]['view']}</span>
				</div>
			</div>

			<div class="symptoms-card flex col-span rounded px-5 py-3.5 text-sm">
				<div class="flex justify-start">
					{symptomsRank[1]['name']}
				</div>
				<div class="flex justify-end mr-0 ml-auto items-center">
					<Eye variation="outline" size="14" class="eye" />
					<span>{symptomsRank[1]['view']}</span>
				</div>
			</div>

		</div>
	</div>

	<div class="service-slot m-5">
		<span class="text-white">服務</span>
		<div class="service-card grid grid-cols-4 rounded-lg py-5">

			<div class="service-items col">
				<div class="service-icon flex justify-center items-center rounded-full mb-2">
					<Squares2x2 color="white" size="24"/>
				</div>
				<span class="text-sm">症狀分類</span>
			</div>

			<div class="service-items col">
				<div class="service-icon flex justify-center items-center rounded-full mb-2">
					<FaceSmile color="white" size="24"/>
				</div>
				<span class="text-sm">症狀檢查器</span>
			</div>

			<div class="service-items col">
				<div class="service-icon flex justify-center items-center rounded-full mb-2">
					<Map color="white" size="24"/>
				</div>
				<span class="text-sm">診所地圖</span>
			</div>

			<div class="service-items col">
				<div class="service-icon flex justify-center items-center rounded-full mb-2">
					<ChatBubbleOvalLeftEllipsis color="white" size="24"/>
				</div>
				<span class="text-sm">許願池</span>
			</div>

		</div>
	</div>
</div>

<style>
	.notification-btn {
		color: var(--blue-3);
		background: var(--white-f);
	}
	.quicksearch-btn {
		color: var(--gray-5);
		background: var(--white-f);
	}

	.signin-slot {
		height: 250px;
	}

	.symptoms-card {
		background: var(--white-75p);
	}
	.symptoms-card:first-child{
		margin-right: 5px;
	}
	.symptoms-card:last-child{
		margin-left: 5px;
	}

	.service-card {
		background: var(--white-75p);
	}

	.service-items {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.service-icon {
		width: 57px;
		height: 57px;
		background: var(--linear-2);
	}
</style>