<script>
	import CMAXLogo from '$lib/assets/CMAX_Logo.svg';
	// .boxie animation listener
	// body onload
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			// check session available
			// if available, redirect to home
			location.href = '/auth';
		}, 1000);
	});
</script>
<div class="background"></div>
<div class="container flex justify-center items-center text-center">
		<div class="mb-24 boxie">
			<img class="logo m-auto" src="{CMAXLogo}" alt="">
			<h1 class="i18n text-3xl font-[1000] p-5">中醫地圖</h1>
			<p class="i18n text-xl font-[800]">Chinese Medicine Mapping App X</p>
			<p class="i18n font-[800]">連結民眾與中醫的專業分科平台</p>
		</div>
</div>

<style>
	.background{
		position: fixed;
		width: 100vw;
		height: 100vh;
		background: white;
	}
	.container {
		z-index: 99;
		width:100vw;
		height: 100vh;
		background: #FFFFFF;
	}
	.boxie{
		position: relative;
		top: 0;
		animation: boxie 1s ease-in-out;
	}
	.logo {
		max-width: 250px;
		height: auto;
	}
	/* let boxie slide in (animation) */
	@keyframes boxie {
		0% {
			top: 100vh;
		}
		100% {
			top: 0;
		}
	}
	.app, main{
		margin: 0px !important;
		background: white !important;
	}
</style>