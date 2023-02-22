<script lang="ts">
	import type { ProjectInfo } from '../../types/Projects';
	import GitHub from './icons/GitHub.svelte';
	import Link from './icons/Link.svelte';

	export let project: ProjectInfo;

	let backgroundPath = project.imagePath ? project.imagePath : `/assets/${project.name.toLowerCase()}.webp`;
	let background = `url(${backgroundPath})`;
</script>

<div class="card" style="background-image: {background}">
	<div class="frost-card">
		<div class="card-details">
			<h2>{project.name}</h2>
			<p>{project.description}</p>
			<div class="card-links">
				<a href={project.sourceUrl} target="_blank" rel="noreferrer"><GitHub size={40} /></a>
				{#if project.projectUrl}
					<a href={project.projectUrl} target="_blank" rel="noreferrer"><Link size={40} /></a>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--main-background);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		overflow: hidden;

		box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);

		border-width: 0px;
		border-radius: 4px;
	}

	.frost-card {
		opacity: 0;
		height: 100%;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;

		margin: 0 auto;
		transition: opacity 0.25s ease-in-out;
		-moz-transition: opacity 0.25s ease-in-out;
		-webkit-transition: opacity 0.25s ease-in-out;

		box-shadow: none;

		/* Glass effect */
		background: inherit;
		z-index: 1;
	}

	.frost-card:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: inherit;
		z-index: -1;
		box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.5);
		-webkit-filter: blur(10px) contrast(100%) brightness(100%);
		filter: blur(10px) contrast(100%) brightness(100%);
		margin: -15px;
	}

	.frost-card:hover,
	.frost-card:focus {
		opacity: 1;
	}

	.card-details {
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;
		text-align: center;

		width: 85%;
		height: 90%;
	}

	h2 {
		margin-bottom: 1rem;
		font-size: 1.8rem;
		line-height: 1.8rem;
	}

	p {
		font-size: 1.16rem;
		line-height: 1.7rem;
	}

	.card-links {
		display: flex;
		flex-direction: row;
		margin-top: 1.75rem;
		column-gap: 1rem;
	}

	a,
	a:visited {
		color: var(--black-text-colour);
	}

	a:hover {
		color: var(--dark-colour);
	}
</style>
