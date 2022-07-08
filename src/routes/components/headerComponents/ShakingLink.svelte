<script lang="ts">
	import { randomRange, randomRangeInt } from 'src/utils/math';

	export let text: string;
	export let href: string;
	export let className = '';

	const rand = () => randomRange(-0.5, 0.5);
	const randomTransformStyle = () => `
    transform: translate(${rand()}px, ${rand()}px) 
               rotate(${randomRangeInt(-9, 9)}deg)
               scale(${randomRange(1, 1.1)})
  `;

	let textProps = text.split('').map(char => ({
		char,
		style: ''
	}));

	const duration = 150;
	let id: ReturnType<typeof setInterval>;

	function startShaking() {
		id = setTimeout(function shake() {
			textProps.forEach(props => (props.style = randomTransformStyle()));
			textProps = textProps;

			id = setTimeout(shake, duration);
		}, 0);
	}

	function stopShaking() {
		clearInterval(id);
		textProps.forEach(props => (props.style = ''));
		textProps = textProps;
	}
</script>

<a class={className} {href} on:mouseenter={startShaking} on:mouseleave={stopShaking}>
	{#each textProps as props}
		{#if props.char === ' '}
			<span>&nbsp;</span>
		{:else}
			<span class="inline-block transition" style={props.style}>
				{props.char}
			</span>
		{/if}
	{/each}
</a>
