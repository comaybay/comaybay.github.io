<script lang="ts">
	import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	import SettingsButton from './SettingsButton.svelte';
	import MenuButton from './MenuButton.svelte';
	import navigationItems from './navigationItems';

	let showNavBar = false;
	const toggleShowNavBar = () => (showNavBar = !showNavBar);
</script>

<nav class="sticky top-0 md:hidden">
	<div
		class="relative z-50 flex justify-between w-full items-center font-comfortaa px-4 pt-3 pb-2 border-b bg-white"
	>
		<div>
			<a href="/" class="font-comfortaa text-slate-500 py-2 text-center text-xl">Cmb</a>
		</div>
		<div class="flex space-x-4">
			<SettingsButton size={25} />
			<MenuButton on:click={toggleShowNavBar} />
		</div>
	</div>
	{#if showNavBar}
		<div
			on:click={() => (showNavBar = false)}
			transition:fade={{ duration: 100 }}
			class="absolute top-0 z-10 w-full bg-black bg-opacity-30 h-screen"
		/>
		<div class="absolute z-20 w-full flex flex-col divide-y text-lg">
			{#each $navigationItems as item, i}
				{@const x = 50 * (i % 2 === 0 ? 1 : -1)}
				<a
					in:fly={{ y: -50, x, duration: 150, delay: i * 40 }}
					out:fly={{ y: -50, x, duration: 150, delay: ($navigationItems.length - 1 - i) * 40 }}
					style="z-index: {$navigationItems.length - i}"
					class="relative block text-end pr-4 py-1 bg-white 
          {item.href === $page.url.pathname ? 'border-r-4 border-r-slate-500' : ''}"
					href={item.href}
					on:click={toggleShowNavBar}
				>
					{item.text}
				</a>
			{/each}
		</div>
	{/if}
</nav>
