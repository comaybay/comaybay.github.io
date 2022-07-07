export default function clickOutside(node: Node, handler: OnClickOusideHandler): SvelteActionReturnType {
  const handleClick = (e: MouseEvent) => {
    if (!node.contains(event.target as Node)) {
      handler(e);
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    }
  };
}

export type OnClickOusideHandler = (e: MouseEvent) => void;
