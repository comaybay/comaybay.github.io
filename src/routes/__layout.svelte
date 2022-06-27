<script lang="ts">
	import '../tailwind.css';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import Header from './components/Header.svelte';
</script>

<Header />
<slot />
