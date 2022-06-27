<script lang="ts">
	import CMB from './headerComponents/CMB.svelte';
	import HeaderDesktop from './headerComponents/HeaderDesktop.svelte';
	import HeaderMobile from './headerComponents/HeaderMobile.svelte';
</script>

<CMB className="hidden md:block mt-4" />
<header class="w-full sticky top-0">
	<HeaderDesktop />
	<HeaderMobile />
</header>
