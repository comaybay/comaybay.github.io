<!-- @component
Wrapper for page content.

This component will center and give limit content width. 
-->
<script lang="ts">
	export let className = '';
</script>

<div class="mt-4 flex justify-center">
	<div class="mx-4 max-w-5xl {className}">
		<slot />
	</div>
</div>
