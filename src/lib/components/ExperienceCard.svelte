<script lang="ts">
	import type { Experience } from '../../types/Experience';

	export let exp: Experience;
</script>

<div class="card">
	<div class="work-info">
		<div>
			<h4>{exp.name}</h4>
			{#each exp.dates as date}
				<p>{date}</p>
			{/each}
			<p>{exp.location}</p>
			{#if exp.link}
				<p><a href={exp.link.url} target="_blank" rel="noreferrer">{exp.link.name}</a></p>
			{/if}
		</div>
	</div>
	<div class="work-description">
		<div>
			<h5>{exp.position}</h5>
			<p>{exp.description}</p>
		</div>
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 10px;
		grid-auto-rows: minmax(100px, auto);
	}

	.work-info {
		grid-row: 1;
		grid-column: 1 / span 4;
	}

	.work-description {
		grid-row: 1;
		grid-column: 6 / -1;
	}

	/* TODO: Add responsiveness for cards. */
</style>
