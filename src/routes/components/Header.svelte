<script context="module" lang="ts">
	let header: HTMLElement;

	export function getHeight() {
		return header.offsetHeight;
	}
</script>

<script lang="ts">
	import HeaderDesktop from './headerComponents/HeaderDesktop.svelte';
	import HeaderMobile from './headerComponents/HeaderMobile.svelte';
</script>

<header bind:this={header} class="w-full fixed">
	<HeaderDesktop />
	<HeaderMobile />
</header>
