if (
	(localStorage.theme !== undefined && localStorage.theme === 'dark') ||
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	document.documentElement.classList.add('dark');
} else {
	document.documentElement.classList.remove('dark');
}
