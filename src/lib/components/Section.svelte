<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let id: string;
	export let pageSection = true;
	export let intersectionThreshold = 0;
	export let intersectionCallback: (targetId: string, isIntersecting: boolean) => void;

	let self: Element;
	let observer: IntersectionObserver | null = null;

	onMount(() => {
		const header = document.getElementById('header');

		let offset = 0;
		if (header) {
			offset = header.offsetHeight;
		}

		const settings = {
			rootMargin: `-${offset}px 0px 0px 0px`,
			threshold: intersectionThreshold
		};

		observer = new IntersectionObserver((entries) => {
			const targetId = entries[0].target.id;
			const isIntersecting = entries[0].isIntersecting;

			intersectionCallback(targetId, isIntersecting);
		}, settings);

		observer.observe(self);
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<section {id} class={pageSection ? 'section non-hero' : 'section'} bind:this={self}>
	<slot />
</section>

<style>
	.non-hero {
		padding-top: 7rem;
		padding-bottom: 7rem;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: var(--main-background);
	}
</style>
