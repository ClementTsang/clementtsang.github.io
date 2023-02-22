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

	let currentSectionMap: Map<string, boolean> = new Map();
	let currentSection = '';

	onMount(() => {
		for (const node of document.getElementsByClassName('section')) {
			if (node.id == 'home') {
				currentSectionMap.set(node.id, true);
			} else {
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
	<Section id="experience" intersectionThreshold={0.1} {intersectionCallback}>
		<Experience />
	</Section>
	<Section id="projects" intersectionThreshold={0.4} {intersectionCallback} sectionType={SectionType.Alt}>
		<Projects />
	</Section>
	<Section id="contact" intersectionThreshold={0.1} {intersectionCallback}>
		<Contact />
	</Section>
</div>
<Footer />

<style>
</style>
