<script lang="ts">
	import language,{ type Language } from 'src/stores/language';
	import i18n from './i18n';

	interface LanguageItem {
		code: Language;
		name: string;
		activeClassName: string;
	}

	let languageItems: LanguageItem[] = [
		{ code: 'vi', name: 'Tiếng Việt', activeClassName: 'text-red-700' },
		{ code: 'en', name: 'English', activeClassName: 'text-blue-700' }
	];

	const changeLanguage = (code: Language) => {
		language.set(code);
	};
</script>

<div class="relative flex items-baseline">
	<div class="flex items-baseline space-x-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 self-center"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<p>{$i18n.selectLanguage}</p>
	</div>
	<div class="flex divide-x divide-slate-400">
		{#each languageItems as item}
			<button
				class="px-2
        {item.code === $language ? item.activeClassName : 'text-slate-400 hover:text-slate-800'}"
				on:click={() => changeLanguage(item.code)}
			>
				{item.name}
			</button>
		{/each}
	</div>
</div>
