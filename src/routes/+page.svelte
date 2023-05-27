<script>
	import moonAndRabitSvg from '$lib/assets/Moon&Rabit.svg';
	import cloudSvg from '$lib/assets/Cloud.svg';
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
	import mountainSvg from '$lib/assets/mountain.svg';

</script>

<div class="main">
	<div class="top-content content-slot mx-auto grid grid-cols-4 gap-4 content-around p-5">
		<div class="col-span-3 text-white">
			<p class="text-xs">Hi，<span class="lastname font-semibold">{lastname}</span>！</p>
			<p class="text-base">今天過得好嗎？</p>
		</div>
		<div class="flex justify-end">
			<div class="notification">
				<a href="/notification">

					<div class="notification-btn rounded-full w-10 h-10 flex justify-center items-center">
						<Bell variation="outline" size="24" class="bell" />
					</div>
				</a>
			</div>
		</div>
		<div class="col-span-4">
			<a href="/search">
				<p class="quicksearch-btn p-2 rounded-lg text-center">
					尋找最適合的中醫及診所
				</p>
			</a>
		</div>
	</div>

	<div class="signin-slot m-5 text-white flex justify-center items-center">
		<img src="{moonAndRabitSvg}" alt="">
		<img class="front-cover" src="{cloudSvg}" alt="">
	</div>

	<div class="recent-slot grid m-5">

		<div class="grid grid-cols-4 gap-4 pb-2 white-text text-base">
			<p class="col-span-3 gap-4 pb-2 white-text">最近常見症狀</p>
			<p class="text-end">
				<a href="#">
					查看更多
				</a>
			</p>
		</div>

		<div class="grid grid-cols-2">

			<div class="symptoms-card flex col-span rounded px-5 py-3.5 text-sm" data-rank="1">
				<div class="flex justify-start">
					{symptomsRank[0]['name']}
				</div>
				<div class="flex justify-end mr-0 ml-auto items-center visit">
					<div class="visit-eye">
						<Eye variation="outline" size="14"/>
					</div>
					<span>{symptomsRank[0]['view']}</span>
				</div>
			</div>

			<div class="symptoms-card flex col-span rounded px-5 py-3.5 text-sm" data-rank="2">
				<div class="flex justify-start">
					{symptomsRank[1]['name']}
				</div>
				<div class="flex justify-end mr-0 ml-auto items-center visit">
					<div class="visit-eye">
						<Eye variation="outline" size="14"/>
					</div>
					<span>{symptomsRank[1]['view']}</span>
				</div>
			</div>

		</div>
	</div>

	<div class="service-slot m-5">
		<span class="text-white">服務</span>
		<div class="service-card grid grid-cols-4 rounded-lg py-5 mt-2">

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

	<!-- divisor for show content behind navbar -->
	<div class="p-5"></div>
	
</div>
<img class="mountainSvg" src={mountainSvg} alt="" />

<style>
	.notification-btn {
		color: var(--blue-3);
		background: var(--white-f);
	}
	.quicksearch-btn {
		color: var(--gray-5);
		background: var(--white-f);
	}

	.signin-slot > .front-cover {
		position: absolute;
		/* add keyframe */
		/* animation: front-cover 100s ease-in-out infinite; */
	}

	/* animation of front-cover */
	@keyframes front-cover {
		0% {
			transform: translateX(-150%);
		}
		100% {
			transform: translateX(150%);
		}
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
	.symptoms-card::after {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		/* transform: translateY(-100%); */
		/* transform to top left  */
		transform: translate(-120%, -120%);
		font-size: 9px;
		width:17px;
		height:17px;
		content: attr(data-rank);
		border: 1px solid var(--white-f);
		border-radius: 50%;
		background: var(--linear-gold);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.1);
	}
	.visit > .visit-eye {
		margin-right: 8px;
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


	.mountainSvg {
		position: fixed;
		left: 0px;
		bottom: var(--menu-height);
		width: 100%;
		height:auto;
		z-index: -1;
	}
</style>