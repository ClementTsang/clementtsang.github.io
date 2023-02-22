<script lang="ts">
	import type { ProjectInfo } from '../../types/Projects';
	import ProjectCard from './ProjectCard.svelte';

	const BOTTOM: ProjectInfo = {
		name: 'bottom',
		description: 'A cross-platform graphical process and system monitor, inspired by gotop, gtop, and htop.',
		sourceUrl: 'https://github.com/ClementTsang/bottom',
		projectUrl: 'https://clementtsang.github.io/bottom/'
	};

	const POLIFY: ProjectInfo = {
		name: 'Polify',
		description: 'Low-poly image generator library. Written in Rust, with some WebAssembly support.',
		sourceUrl: 'https://github.com/ClementTsang/polify',
		projectUrl: 'https://clementtsang.github.io/polify/'
	};

	const RUSTCC: ProjectInfo = {
		name: 'rustcc',
		description: 'A simple C compiler, written in Rust.',
		sourceUrl: 'https://github.com/ClementTsang/rustcc'
	};

	const BANSHEE: ProjectInfo = {
		name: 'Banshee',
		description: 'An osu!-inspired rhythm game featuring automatic map generation based on audio, written in C++.',
		sourceUrl: 'https://github.com/ClementTsang/banshee'
	};

	const OPAL: ProjectInfo = {
		name: 'opal',
		description:
			'A static website to convert between IPA and English words using a statically hosted SQLite database. Written in Rust + WASM.',
		sourceUrl: 'https://github.com/ClementTsang/opal',
		projectUrl: 'https://clementtsang.github.io/opal/'
	};

	const TRANSCRIPTER: ProjectInfo = {
		name: 'Transcripter',
		description:
			'A simple, offline program to automatically create transcriptions of video and audio files. Written in F#.',
		sourceUrl: 'https://github.com/ClementTsang/Transcripter'
	};

	const PROJECTS = [BOTTOM, POLIFY, RUSTCC, BANSHEE, OPAL, TRANSCRIPTER];
</script>

<div class="body">
	<h2 class="title">Projects</h2>
	<hr class="divider-red" />
	<div id="cards-section">
		{#each PROJECTS as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

<style>
	.body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 90%;
	}

	.title {
		text-align: center;
	}

	#cards-section {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 1;
		grid-auto-rows: 300px;
		row-gap: 3rem;
	}

	@media screen and (min-width: 768px) {
		#cards-section {
			grid-template-columns: repeat(2, 1fr);
			column-gap: 2rem;
			grid-auto-rows: 500px;
		}
	}

	@media screen and (min-width: 1200px) {
		.body {
			width: 90%;
			max-width: 1200px;
		}
	}

	@media screen and (min-width: 1400px) {
		.body {
			width: 80%;
			max-width: 1600px;
		}
	}
</style>
