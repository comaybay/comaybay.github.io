<script>
	import Content from '../components/Content.svelte';
	import SocialsDesktop from './components/SocialsDesktop.svelte';
	import SocialsMobile from './components/SocialsMobile.svelte';
	import t from './i18n';
</script>

<Content className="md:mt-10 font-light md:text-lg">
	<p class="md:text-xl">{$t.greetings}</p>
	<p class="md:ml-10 md:text-xl">{$t.introduction}</p>
	<p class="mt-5 md:mt-10">{$t.whatICreate}</p>
	<p class="mt-3">{$t.dontExpectQuality}</p>
	<p class="mt-3">{$t.ideaToReality}</p>
	<p class="mt-5 md:mt-10">{$t.checkOutMyStuff}</p>
	<SocialsMobile />
</Content>
<SocialsDesktop />
