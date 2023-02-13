<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Greeter from '$lib/components/Greeter.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onDestroy, onMount } from 'svelte';

	let currentSectionMap: Map<string, boolean> = new Map();
	let currentSection = '';
	let observer: IntersectionObserver | null = null;

	function generateCurrentSectionList() {
		const observerSettings = {
			threshold: 0.01
		};

		let observer = new IntersectionObserver((entries) => {
			currentSectionMap.set(entries[0].target.id, entries[0].isIntersecting);
			currentSection = getCurrentSection();
		}, observerSettings);

		for (const node of document.getElementsByClassName('section')) {
			observer.observe(node);
			currentSectionMap.set(node.id, false);
		}
	}

	onMount(() => {
		generateCurrentSectionList();
	});

	onDestroy(() => {
		observer?.disconnect;
	});

	function getCurrentSection(): string {
		for (const current of currentSectionMap) {
			if (current[1]) {
				return current[0];
			}
		}

		return 'home';
	}
</script>

<!-- TODO: Make an "section" component with observable attached to it! -->
<Header bind:currentSection />
<div>
	<Greeter />
	<Experience />
	<Projects />
	<Contact />
</div>
<Footer />

<style>
</style>
