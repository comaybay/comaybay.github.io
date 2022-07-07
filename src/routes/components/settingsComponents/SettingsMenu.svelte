<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { sineOut, sineIn } from 'svelte/easing';
	import SelectLanguage from './SelectLanguage.svelte';
	import clickoutside from 'src/actions/clickoutside';
	import SelectTheme from './SelectTheme.svelte';
	import { onDestroy, onMount } from 'svelte';

	const options = [SelectLanguage, SelectTheme];
	let menu: HTMLDivElement;

	window.addEventListener('resize', adjustMenuPosition);

	onMount(adjustMenuPosition);
	onDestroy(() => window.removeEventListener('resize', adjustMenuPosition));

	function adjustMenuPosition() {
		const padding = 30;
		const rect = menu.getBoundingClientRect();

		const diff = window.innerWidth - (rect.right + padding);
		const isOffscreen = diff < 0;
		let currentLeft = parseInt(menu.style.left);

		if (isOffscreen) {
			const newLeft = currentLeft + diff;
			menu.style.left = `${newLeft}px`;
		} else {
			const newLeft = Math.min(17, currentLeft + diff);
			console.log(currentLeft + diff);
			menu.style.left = `${newLeft}px`;
		}
	}
</script>

<div
	class="absolute -z-10 w-max top-10 bg-white border border-slate-500 shadow-lg py-2"
	style="left: 17px"
	transition:fade={{ duration: 150 }}
	bind:this={menu}
	use:clickoutside
	on:clickoutside
>
	{#each options as component, i}
		<div
			class="px-4 py-2 hover:border-slate-500 border-transparent border-x-4"
			in:fly={{
				x: -25,
				y: -50,
				duration: 150 + 40 * (options.length - 1 - i),
				easing: sineOut
			}}
			out:fly={{ x: -25, y: -50, duration: 150 + 40 * i, easing: sineIn }}
		>
			<svelte:component this={component} />
		</div>
	{/each}
</div>
