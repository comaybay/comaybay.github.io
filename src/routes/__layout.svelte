<script lang="ts">
	import { onMount } from 'svelte';

	import '../tailwind.css';
	import Header, { getHeight } from './components/Header.svelte';

	let style = '';
	onMount(() => (style = `padding-top: ${getHeight()}px;`));
</script>

<Header />
<div {style}>
	<slot />
</div>
