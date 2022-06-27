<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	import '../tailwind.css';
	import Header, { getHeight } from './components/Header.svelte';

	let style = '';
	const updateStyle = () => (style = `padding-top: ${getHeight()}px;`);
	onMount(updateStyle);

	//update style when breakpoint changes
	if (browser) {
		//equivalent of 'md' tailwind
		matchMedia('(min-width: 768px)').addEventListener('change', updateStyle);
	}
</script>

<Header />
<div {style}>
	<slot />
</div>
