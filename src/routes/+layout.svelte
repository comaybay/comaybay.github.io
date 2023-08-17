<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import 'src/tailwind.css';
</script>

<Header />
<div class="relative z-0">
	<slot />
</div>
