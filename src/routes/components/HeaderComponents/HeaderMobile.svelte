<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import SettingsButton from './SettingsButton.svelte';
	import MenuButton from './MenuButton.svelte';
	import CMB from './CMB.svelte';

	let showNavBar = false;
	const toggleShowNavBar = () => (showNavBar = !showNavBar);

	const navItems = [
		{ href: '/self', text: 'Bản thân' },
		{ href: '/stuff', text: 'Stuff' },
		{ href: '/', text: 'Trang chủ' },
		{ href: '/random', text: 'Linh tinh' },
		{ href: '/contact', text: 'Liên hệ' }
	];
</script>

<nav class="md:hidden">
	<div
		class="relative z-10 flex justify-between w-full items-center font-comfortaa px-4 pt-3 pb-2 border-b bg-white"
	>
		<div>
			<a href="/" class="font-comfortaa py-2 text-center text-xl">Cmb</a>
		</div>
		<div class="flex space-x-4">
			<SettingsButton size={25} />
			<MenuButton on:click={toggleShowNavBar} />
		</div>
	</div>
	{#if showNavBar}
		<div class="w-full flex flex-col divide-y text-lg border-b">
			{#each navItems as item, i}
				<a
					transition:fly={{ y: -50, duration: 200, delay: i * 40 }}
					class="block text-end pr-4 py-1
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
