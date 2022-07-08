<script lang="ts">
	import i18n from './i18n';

	type Theme = 'light' | 'dark' | 'system';

	interface ThemeItem {
		code: Theme;
		name: string;
	}

	let themeItems: ThemeItem[];
	$: themeItems = [
		{ code: 'light', name: $i18n.selectModeOptions.light },
		{ code: 'dark', name: $i18n.selectModeOptions.dark },
		{ code: 'system', name: $i18n.selectModeOptions.system }
	];

	let activeTheme = localStorage.getItem('theme') as Theme;

	function changeTheme(theme: Theme) {
		activeTheme = theme;
		localStorage.setItem('theme', theme);

		if (
			theme === 'dark' ||
			(theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<div class="relative flex items-baseline space-x-2">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6 self-center"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		stroke-width="2"
	>
		{#if activeTheme === 'light'}
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		{:else if activeTheme === 'dark'}
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
			/>
		{:else}
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
			/>
		{/if}
	</svg>
	<div class="flex items-center space-x-2">
		<p>{$i18n.selectMode}</p>
		{#each themeItems as item}
			<button
				class="py-1 px-3 border border-slate-400 rounded-md 
        {item.code === activeTheme
					? 'bg-slate-600 text-white'
					: 'text-slate-400 hover:text-slate-800 hover:border-slate-600'}"
				on:click={() => changeTheme(item.code)}
			>
				{item.name}
			</button>
		{/each}
	</div>
</div>
