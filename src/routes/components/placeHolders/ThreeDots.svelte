<script lang="ts">
	const dotClasses = 'w-6 h-6 md:w-8 md:h-8 border-4 border-slate-500 rounded-full animation';
</script>

<div class="pt-3 flex space-x-2 justify-center" aria-label="Loading...">
	<div class="{dotClasses} anim-delay-1" />
	<div class="{dotClasses} anim-delay-2" />
	<div class="{dotClasses} " />
</div>

<style>
	.animation {
		animation: bounce 1s infinite;
	}

	.anim-delay-1 {
		animation-delay: -400ms;
	}

	.anim-delay-2 {
		animation-delay: -200ms;
	}

	@keyframes bounce {
		0%,
		100% {
			border-radius: 100%;
			transform: translateY(-35%) scale(1);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
		50% {
			opacity: 0.1;
			transform: translateY(0) scale(0.85);
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}
</style>
