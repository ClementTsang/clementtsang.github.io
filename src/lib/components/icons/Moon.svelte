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
	<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
</svg>
