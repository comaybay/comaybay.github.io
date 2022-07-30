<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import SelectLanguage from '../componentsSettings/SelectLanguage.svelte';
	import SelectMode from '../componentsSettings/SelectTheme.svelte';
	import SettingsButton from '../componentsSettings/SettingsButton.svelte';
	import MenuButton from './MenuButton.svelte';
	import navigationItems from './navigationItems';

	const settingsItems = [SelectLanguage, SelectMode];

	let showNavBar = false;
	let showSettings = false;

	$: if (showSettings) {
		showNavBar = false;
	}

	function toggleShowNavBar() {
		showNavBar = !showNavBar;

		if (showNavBar) {
			showSettings = false;
		}
	}

	function calculateFlyProps(itemsLength: number, index: number) {
		const x = 50 * (index % 2 === 0 ? 1 : -1);
		const y = -50;
		const baseDelay = 40;
		const duration = 150;
		return {
			in: { y, x, duration, delay: index * baseDelay },
			out: { y, x, duration, delay: (itemsLength - 1 - index) * baseDelay }
		};
	}

	function closeMenu() {
		showSettings = false;
		showNavBar = false;
	}
</script>

<nav class="sticky z-10 top-0 md:hidden">
	<div class="relative z-50 flex justify-between w-full items-center font-comfortaa px-4 pt-3 pb-2 border-b bg-white">
		<div>
			<a href="/" class="font-comfortaa text-slate-500 py-2 text-center text-xl" onclick={closeMenu}> Cmb </a>
		</div>
		<div class="flex space-x-4">
			<SettingsButton bind:active={showSettings} />
			<MenuButton on:click={toggleShowNavBar} />
		</div>
	</div>

	{#if showNavBar || showSettings}
		<div
			on:click={closeMenu}
			transition:fade={{ duration: 100 }}
			class="absolute top-0 z-10 w-full bg-black bg-opacity-30 h-screen"
		/>
	{/if}

	{#if showNavBar}
		<div class="absolute z-20 w-full flex flex-col divide-y text-lg">
			{#each $navigationItems as item, i}
				{@const flyProps = calculateFlyProps($navigationItems.length, i)}
				<a
					in:fly={flyProps.in}
					out:fly={flyProps.out}
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
	{:else if showSettings}
		<div class="absolute z-20 w-full flex flex-col divide-y">
			{#each settingsItems as item, i}
				{@const flyProps = calculateFlyProps($navigationItems.length, i)}
				<div
					in:fly={flyProps.in}
					out:fly={flyProps.out}
					style="z-index: {$navigationItems.length - i}"
					class="px-4 py-2 w-full flex justify-end bg-white"
				>
					<svelte:component this={item} />
				</div>
			{/each}
		</div>
	{/if}
</nav>
