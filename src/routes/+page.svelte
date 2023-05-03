<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import bell from '$lib/images/bell.svg';
	// set a variable name
	let lastname = "殊樵";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- this need to seprate into different file -->
<div class="greetings function-block">
	<div class="w-100 flex-block">
		<div class="greeting_message">
			<h2>
				<span>嗨，<span class="lastname">{lastname}</span>！</span>
				<br>
				<span>今天過得好嗎？</span>
			</h2>
		</div>
		<div class="notification-icon">
			<a href="/notification">
				<img width="100%" height="auto" src="{bell}" alt="notification icon" />
			</a>
		</div>
	</div>
	<div class="quick-search-btn">
		<span>尋找最適合你的中醫及診所</span>
	</div>
</div>

<div class="thematic-break"></div>

<div class="recent function-block">
	<div class="flex-block w-100">
		<div class="corner">
			<!-- <a href=""></a> -->
			近期常見症狀
		</div>
		<div class="corner">
			<a href="">查看更多</a>
		</div>
	</div>
	<div class="recent-data">
		<div class="symptoms">
			<div class="symptoms-text">
				<p>標題</p>
				<p>症狀</p>
			</div>
			<div class="symptoms-preview">
				<div class="symptoms-icon"></div>
			</div>
		</div>
	</div>
</div>

<!-- <section> -->
	<!-- <h1>The app here	</h1> -->

	<!-- <Counter /> -->
<!-- </section> -->

<style>
	.function-block {
		padding: 1rem;
		background: #d9d9d9;
	}

	.greetings { }
	.greeting_message {
		width:100%;
		font-weight:bold;
	}
	.greeting_message .lastname {
		font-weight:900;
	}
	h2 {
		font-size: 1.3rem;
	}
	.w-100 {
		width:100%;
	}
	.flex-block {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.notification-icon {
		width: 2rem;
		height: 2rem;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		border: 1px solid white;
		border-radius: 50%;
		background: white;
	}
	.notification-icon img {
		width: 100%;
		height: 80%;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}

	.quick-search-btn {
		--bg-theme: #f5f5f5;
		--bg-hover: #e5e5e5;
		--bg-active: #d5d5d5;
		width: 100%;
		height: 3rem;
		background: var(--bg-theme);
		border-radius: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.quick-search-btn > span {
		font-size: 1.2rem;
	}
	.quick-search-btn:hover {
		background: var(--bg-hover);
	}
	.quick-search-btn:active {
		background: var(--bg-active);
	}

	.thematic-break {
		width: 100%;
		height: 10px;
		/* background: blue; */
	}

	.recent { /* recent symptoms */
		display: block;
		justify-content: space-between;
		font-size: 0.75rem;
	}
	.recent-data {
		--bg-color: white;
		width: 100%;
		background: var(--bg-color);
	}
	.symptoms {
		display: flex;
		/* display: inline; */
		/* padding: 0.5em 0rem; */
	}
	.symptoms-text {
		width: 70%;
		background: lightblue;
		/* display: inline-block; */
		vertical-align: middle;
		object-fit: contain;
	}
	.symptoms-text > p {
		line-height: 0.5rem;
		font-size: 1rem;
	}
	.symptoms-preview {
		
		/* background: lightgreen; */
		width:30%;
		display: inline-block;
		/* verical center */
		vertical-align: middle;
		/* horizental right */
		background: lightcoral;
	}
	.symptoms-icon {
		--size: 2rem;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		background: #d9d9d9;

		object-fit: contain;
	}
	/* .info-loading::before{
		--height: 1rem;
		content: "";
		display: flex;
		margin-bottom: 10px;
		width: var(--width);
		height: var(--height);
		border-radius: calc(var(--height) / 2);
		background: #d9d9d9;
	}
	.symptoms-text{
		display: flex;
		flex-direction: column;
		width: 60%;
	}
	.symptoms-preview {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		background: #f5f5f5;
		width:50px;
		height:50px;
		border-radius: 50%;
	} */
	.corner {
		width: 6em;
		padding-bottom: 1em;
	}
	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.corner img {
		width: 2em;
		/* height: 2em; */
		object-fit: contain;
	}
</style>
