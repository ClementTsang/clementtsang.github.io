<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { SectionType } from '../../types/SectionType';

	export let id: string;
	export let intersectionCallback: (targetId: string, isIntersecting: boolean) => void;
	export let sectionType: SectionType = SectionType.Main;

	let self: Element;
	let observer: IntersectionObserver | null = null;

	// Not elegant but it works well enough I guess. Ideally we dynamically
	// scale this based on window/section height but I'm not sure how to do
	// that other than some ugly bindings.
	let intersectionThreshold = sectionType == SectionType.Hero ? 0 : 0.05;

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

	function getClasses(): string {
		let classes = 'section';

		if (sectionType == SectionType.Main) {
			classes += ' non-hero main-background';
		} else if (sectionType == SectionType.Alt) {
			classes += ' non-hero alt-background';
		}

		return classes;
	}
</script>

<section {id} class={getClasses()} bind:this={self}>
	<slot />
</section>

<style>
	.non-hero {
		padding-top: 8.2rem;
		padding-bottom: 8.2rem;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.main-background {
		background-color: var(--main-background);
	}

	.alt-background {
		background-color: var(--main-background-two);
	}
</style>
