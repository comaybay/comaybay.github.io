<script lang="ts">
	import { randomRangeInt, randomRange } from 'src/utils/math';

	const rand = () => randomRangeInt(-2, 2);
	const randomTransformStyle = () => `
    transform: translate(${rand()}px, ${rand()}px) 
               rotate(${randomRangeInt(-9, 9)}deg)
               scale(${randomRange(1, 1.05)})
  `;

	let titleProps = 'Cỏ May Bay'.split('').map(char => ({
		char,
		style: ''
	}));

	const duration = 1000;
	setInterval(() => {
		titleProps.forEach(props => (props.style = randomTransformStyle()));
		titleProps = titleProps;
	}, duration);
</script>

<h1 class="my-4 font-comfortaa py-2 text-center text-6xl mx-28">
	{#each titleProps as props}
		<span
			class="inline-block whitespace-pre transition ease-[cubic-bezier(0.5,-1,0.5,2)] duration-[700ms]"
			style={props.style}
		>
			{props.char}
		</span>
	{/each}
</h1>
