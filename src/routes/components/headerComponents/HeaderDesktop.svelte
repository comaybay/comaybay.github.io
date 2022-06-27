<script lang="ts">
	import { page } from '$app/stores';
	import CMB from './CMB.svelte';
	import SettingsButton from './SettingsButton.svelte';
	import ShakingLink from './ShakingLink.svelte';
	const navItems = [
		{ href: '/self', text: 'Bản thân' },
		{ href: '/stuff', text: 'Stuff' },
		{ href: '/', text: 'Trang chủ' },
		{ href: '/random', text: 'Linh tinh' },
		{ href: '/contact', text: 'Liên hệ' }
	];
</script>

<nav class="hidden md:block">
	<CMB />
	<div class="flex justify-center mx-4">
		<div class="flex items-center space-x-8 text-xl font-comfortaa px-4 border-b">
			{#each navItems as item}
				<ShakingLink
					className="transition h-full flex items-center pb-1
         {item.href === $page.url.pathname ? 'border-b-4 border-slate-500' : ''}"
					href={item.href}
					text={item.text}
				/>
			{/each}
		</div>
		<div class="ml-2 w-0">
			<SettingsButton />
		</div>
	</div>
</nav>
