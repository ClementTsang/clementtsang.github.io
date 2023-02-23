<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Greeter from '$lib/components/Greeter.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Section from '$lib/components/Section.svelte';
	import { onMount } from 'svelte';
	import { SectionType } from '../types/SectionType';

	// We store the "head" at the top, and every other element in reverse order.
	let currentSectionMap: Map<string, boolean> = new Map();
	let currentSection = '';

	onMount(() => {
		let sections = [...document.getElementsByClassName('section')];
		for (const node of sections) {
			if (node.id == 'home') {
				currentSectionMap.set(node.id, true);
				break;
			}
		}

		for (const node of sections.reverse()) {
			if (node.id !== 'home') {
				currentSectionMap.set(node.id, false);
			}
		}
	});

	function intersectionCallback(targetId: string, isIntersecting: boolean) {
		currentSectionMap.set(targetId, isIntersecting);

		for (const [name, enabled] of currentSectionMap) {
			if (enabled) {
				currentSection = name;
				return;
			}
		}

		currentSection = 'home';
	}
</script>

<Header bind:currentSection />
<div>
	<Section id="home" {intersectionCallback} sectionType={SectionType.Hero}>
		<Greeter />
	</Section>
	<Section id="experience" {intersectionCallback}>
		<Experience />
	</Section>
	<Section id="projects" {intersectionCallback} sectionType={SectionType.Alt}>
		<Projects />
	</Section>
	<Section id="contact" {intersectionCallback}>
		<Contact />
	</Section>
</div>
<Footer />

<style>
</style>
