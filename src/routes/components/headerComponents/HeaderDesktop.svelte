<script lang="ts">
	import { page } from '$app/stores';
	import CMB from './CMB.svelte';
	import SettingsButton from '../settingsComponents/SettingsButton.svelte';
	import ShakingLink from './ShakingLink.svelte';
	import navigationItems from './navigationItems';
</script>

<CMB className="hidden md:block mt-4" />
<nav class="sticky top-0 hidden md:block pt-4 bg-white">
	<div class="flex justify-center mx-4">
		<div class="flex items-center space-x-8 text-xl font-comfortaa px-4 border-b">
			{#each $navigationItems as item}
				<ShakingLink
					className="transition h-full flex items-center pb-2
         {item.href === $page.url.pathname ? 'border-b-4 border-slate-500' : ''}"
					href={item.href}
					text={item.text}
				/>
			{/each}
		</div>
		<div class="relative ml-2 w-0">
			<SettingsButton />
		</div>
	</div>
</nav>
