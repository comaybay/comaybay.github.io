<script lang="ts">
	import CMB from './CMB.svelte';
	import SettingsButton from './SettingsButton.svelte';
</script>

<CMB/>
<div class="mx-4 hidden md:flex justify-center">
	<nav class="flex items-center space-x-8 text-xl font-comfortaa px-4 pb-1 border-b">
		<a href="/self">Bản thân</a>
		<a href="/stuff">Stuff</a>
		<a href="/">Trang chủ</a>
		<a href="/random">Linh tinh</a>
		<a href="/contact">Liên hệ</a>
	</nav>
	<div class="ml-2 mb-0.5 w-0">
		<SettingsButton />
	</div>
</div>
