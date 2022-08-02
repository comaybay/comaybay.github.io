<script lang="ts">
	import '../tailwind.css';
	import Header from './components/Header.svelte';
</script>

<Header />
<div class="relative z-0">
	<slot />
</div>
