import type { Action } from 'svelte/action';

const clickoutside: Action<HTMLElement, undefined, ClickOutsideAttributes> = (node: HTMLElement) => {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent('clickoutside'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};

interface ClickOutsideAttributes {
	'on:clickoutside': (e: CustomEvent<void>) => void;
}

export default clickoutside;
