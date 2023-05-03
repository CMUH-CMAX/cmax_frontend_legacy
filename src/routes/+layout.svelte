<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<svelte:head>
	<!-- Google fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap" rel="stylesheet">
	<!-- Google fonts end -->
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>ZoneTwelve ;-P</p>
	</footer>
</div>

<style>

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		/* background: var(--theme-main-20); */
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
