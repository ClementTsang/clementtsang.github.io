<script lang="ts">
	export let size: number | string = 24;
</script>

<!--Icons are from https://lucide.dev/ -->
<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class={$$props.class}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<circle cx="12" cy="12" r="4" />
	<path d="M12 2v2" />
	<path d="M12 20v2" />
	<path d="m4.93 4.93 1.41 1.41" />
	<path d="m17.66 17.66 1.41 1.41" />
	<path d="M2 12h2" />
	<path d="M20 12h2" />
	<path d="m6.34 17.66-1.41 1.41" />
	<path d="m19.07 4.93-1.41 1.41" />
</svg>
