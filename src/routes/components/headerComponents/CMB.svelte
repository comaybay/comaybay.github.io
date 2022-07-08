<script lang="ts">
	import { randomRange,randomRangeInt } from 'src/utils/math';

	export let className = '';

	const rand = () => randomRangeInt(-2, 2);
	const randomTransformStyle = () => `
    transform: translate(${rand()}px, ${rand()}px) 
               rotate(${randomRangeInt(-9, 9)}deg)
               scale(${randomRange(1, 1.05)})
  `;

	let titleProps = 'Cỏ May Bay'.split('').map(char => ({
		char,
		style: randomTransformStyle()
	}));

	const duration = 1000;
	setTimeout(() => {
		titleProps.forEach(props => (props.style = ''));
		titleProps = titleProps;
		setTimeout(loop, duration * 1.5);

		function loop() {
			titleProps.forEach(props => (props.style = randomTransformStyle()));
			titleProps = titleProps;
			setTimeout(loop, duration);
		}
	}, 0);
</script>

<div class="{className} font-comfortaa py-2 text-6xl text-slate-500 text-center">
	<a href="/">
		{#each titleProps as props}
			{#if props.char === ' '}
				<span class="px-1">&nbsp;</span>
			{:else}
				<span
					class="inline-block px-1 transition ease-[cubic-bezier(0.5,-1,0.5,2)] duration-[700ms]"
					style={props.style}
				>
					{props.char}
				</span>
			{/if}
		{/each}
	</a>
</div>
