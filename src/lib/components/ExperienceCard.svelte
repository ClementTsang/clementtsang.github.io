<script lang="ts">
	import type { Experience } from '../../types/Experience';
	import Calendar from './icons/Calendar.svelte';
	import MapPin from './icons/MapPin.svelte';
	import Link from './icons/Link.svelte';

	export let exp: Experience;
</script>

<div class="card">
	<div class="work-info">
		<div class="work-details">
			<h4>{exp.name}</h4>
			<div class="date-detail">
				<div class="date-icon">
					<Calendar size="18" />
				</div>
				<div>
					{#each exp.dates as date}
						<p>{date}</p>
					{/each}
				</div>
			</div>
			<div class="detail">
				<MapPin size="18" />
				<p>{exp.location}</p>
			</div>
			{#if exp.link}
				<div class="detail">
					<Link size="18" />
					<p><a href={exp.link.url} target="_blank" rel="noreferrer">{exp.link.name}</a></p>
				</div>
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
		grid-auto-rows: minmax(100px, auto);
		gap: 10px;
	}

	.work-info {
		grid-row: 1;
		grid-column: 1 / span 4;
	}

	.work-description {
		grid-row: 1;
		grid-column: 6 / -1;
	}

	.work-details {
		display: flex;
		flex-direction: column;
		row-gap: 2px;
	}

	.detail {
		display: flex;
		align-items: center;
		column-gap: 4px;
	}

	.date-detail {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		column-gap: 4px;
	}

	.date-icon {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.date-icon::before {
		content: 'a';
		width: 0px;
		visibility: hidden;
	}

	/* TODO: Add responsiveness for cards. */
</style>
