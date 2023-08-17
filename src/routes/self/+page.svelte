<script>
	import Content from '$lib/components/Content.svelte';
	import LazyComponent from '$lib/components/LazyComponent.svelte';
	import ThreeDots from '$lib/components/placeholders/ThreeDots.svelte';
	import t from './i18n';
</script>

<Content className="md:mt-10 font-light md:text-lg">
	<p class="md:text-xl">{$t.greetings}</p>
	<p class="md:ml-10 md:text-xl">{$t.introduction}</p>
	<p class="mt-5 md:mt-10">{$t.whatICreate}</p>
	<p class="mt-3">{$t.dontExpectQuality}</p>
	<p class="mt-3">{$t.ideaToReality}</p>
	<p class="mt-5 md:mt-10">{$t.checkOutMyStuff}</p>

	<LazyComponent containerClassName="my-10 md:hidden" loadFunc={() => import('./SocialsMobile.svelte')}>
		<ThreeDots />
	</LazyComponent>
</Content>

<LazyComponent containerClassName="my-10 hidden md:block" loadFunc={() => import('./SocialsDesktop.svelte')}>
	<ThreeDots />
</LazyComponent>
