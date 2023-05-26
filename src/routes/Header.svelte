<script>
	import { page } from '$app/stores';
	import { Home, MagnifyingGlass, User } from 'svelte-heros-v2';
	import mountainSvg from '$lib/assets/mountain.svg';
</script>

<header>
	<img class="mountainSvg" src={mountainSvg} alt="Welcome" />
	<nav id="menu">
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="{$page.url.pathname === '/' ? 'activate' : ''}">
					<div class="navbar-icon">
						<Home variation="solid" size="32" />
					</div>
					<span>首頁</span>
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/search' ? 'page' : undefined}>
				<a href="/search" class="{$page.url.pathname === '/search' ? 'activate' : ''}">
					<div class="navbar-icon">
						<MagnifyingGlass variation="solid" size="32" />
					</div>
					<span>搜尋</span>
				</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about" class="{$page.url.pathname === '/about' ? 'activate' : ''}">
					<div class="navbar-icon">
						<User variation="outline" size="32" />
					</div>
					<span>我的</span>
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	:root {
		--menu-height: 5em;
	}
	.mountainSvg {
		position: fixed;
		bottom: var(--menu-height);
		width: 100%;
		height:auto;
		z-index: -1;
	}
	#menu {
		/* put the navbar bottom of the screen and place in the center */
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		background: var(--white-f);
	}

	#menu > ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: var(--menu-height);
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

	#menu > ul > li > a {
		position: relative;
		font-size: 0.7rem;
		color: var(--black-0);
	}

	.navbar-icon {
		--size: 2rem;

		position: relative;
		left: calc(50% - var(--size)/2);
		width: var(--size);
		height: var(--size);
	}

	a {
		text-decoration: none;
	}

	a.activate > * {
		color: var(--blue-4);
		background: var(--linear-1);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
