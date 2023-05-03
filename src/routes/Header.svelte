<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav id="menu">
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">
					<div class="circle"></div>
					首頁
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/search' ? 'page' : undefined}>
				<a href="/search">
					<div class="circle"></div>
					搜尋
				</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>
				<a href="/about">
					<div class="circle"></div>
					我的
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	/* set background variable in the root */
	:root {
		--background: ;
		--menu-circle: #fafafa;
	}

	#menu {
		/* put the navbar bottom of the screen and place in the center */
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		background: var(--theme-main);
		/* background-size: contain;
		display: flex;
		justify-content: center;
		align-items: center; */
		border-top: 1px solid var(--theme-dark-80);
	}

	#menu > ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 5em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
		top: 1rem;
	} 
	#menu > ul > li {
		position: relative;
		height: 100%;
		width: calc(100% / 3);
		text-align: center;
	}
	#menu > ul > li[aria-current='page'] .circle {
		background: var(--theme-main-60);
	}

	#menu > ul > li::before {
	}
	#menu > ul > li > a {
		position: relative;
		font-size: 0.7rem;
		color: #000000;
	}
	.circle {
		position: relative;
		--size: 2rem;
		left: calc(50% - var(--size)/2);
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		background: var(--menu-circle);
	}
	a {
		text-decoration: none;
	}
</style>
