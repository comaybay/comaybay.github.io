<!--
@component 
Lazyload a component after initial page load
-->
<script lang="ts">
	import { fly } from 'svelte/transition';

	type LoadComponentFunc = () => Promise<ComponentModule>;
	interface ComponentModule {
		default: any;
	}

	/** function that returns a component module */
	export let loadFunc: LoadComponentFunc;
	export let containerClassName = '';

	let start = Date.now();
</script>

<div class={containerClassName}>
	{#await loadFunc()}
		<slot />
	{:then loadedModule}
		{@const isInstanceLoadTime = Date.now() - start < 25}
		<div in:fly={isInstanceLoadTime ? { duration: 0 } : { duration: 300, y: 5 }}>
			<svelte:component this={loadedModule.default} />
		</div>
	{/await}
</div>
