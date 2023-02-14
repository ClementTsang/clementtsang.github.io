<script lang="ts">
	import ExperienceCard from './ExperienceCard.svelte';
	import type { Experience } from '../../types/Experience';

	const DATADOG: Experience = {
		name: 'Datadog',
		dates: ['August 2022 - Present'],
		location: 'New York, United States',
		link: { name: 'Datadog', url: 'https://www.datadoghq.com/' },
		position: 'Software Engineer - Metrics',
		description: 'Currently work as a software engineer regarding the storage of timeseries data.'
	};

	const SHOPIFY: Experience = {
		name: 'Shopify',
		dates: ['Sept 2021 - Dec 2021 '],
		location: 'Ontario, Canada',
		link: { name: 'Shopify', url: 'https://www.shopify.ca/' },
		position: 'Backend Developer Intern ',
		description:
			'Worked as a backend developer at Shopify on the Commerce Trust and Integrity team to improve analyst tools and the quality of fraud detection.'
	};

	const DATADOG_INTERN: Experience = {
		name: 'Datadog',
		dates: ['May 2021 - Aug 2021'],
		location: 'New York, United States',
		link: { name: 'Datadog', url: 'https://www.datadoghq.com/' },
		position: 'Software Engineering Intern - Metrics',
		description:
			'Worked in the Metrics team to build an internal tool that recorded and replayed production workloads to aid in debugging and load-testing.'
	};

	const WISH: Experience = {
		name: 'Wish',
		dates: ['Jan 2020 - Apr 2020', 'Sept 2020 - Dec 2020'],
		location: 'Ontario, Canada',
		link: { name: 'Wish', url: 'https://www.wish.com/companyinfo' },
		position: 'Software Engineering Intern',
		description:
			'Worked on the Wish Marketplace team as a mobile and backend developer for the Wish Local app, introducing new features and fixing bugs.'
	};

	const YUJA_FULL_STACK: Experience = {
		name: 'YuJa',
		dates: ['May 2019 - Aug 2019'],
		location: 'Ontario, Canada',
		link: { name: 'YuJa', url: 'https://www.yuja.com/' },
		position: 'Software Developer - Full Stack',
		description:
			'Worked as a full stack software developer for a new product, Panorama, automatically creating accessible documents for files uploaded to LMS sites like D2L and Blackboard.'
	};

	const YUJA_QA: Experience = {
		name: 'YuJa',
		dates: ['Sept 2018 - Dec 2018'],
		location: 'Ontario, Canada',
		link: { name: 'YuJa', url: 'https://www.yuja.com/' },
		position: 'Software Developer - Testing and Operations',
		description:
			'Ran QA tests to ensure the quality of our product and new features without any regressions, in addition to developing automated tests to save time and improve test quality using Selenium.'
	};

	let workExperiences: Experience[] = [DATADOG, SHOPIFY, DATADOG_INTERN, WISH, YUJA_FULL_STACK, YUJA_QA];

	const SCHOOL: Experience = {
		name: 'University of Waterloo',
		dates: ['2017 - 2022'],
		location: 'Ontario, Canada',
		link: { name: 'University of Waterloo', url: 'https://uwaterloo.ca/' },
		position: 'Bachelor of Computer Science',
		description: 'Studied and graduated from the University of Waterloo with distinction.'
	};
</script>

<div class="body">
	<h2 class="title">Experience</h2>
	<hr class="divider-red" />

	<div class="exp-section">
		<h3>Work</h3>
		<div class="card-wrapper">
			{#each workExperiences as exp}
				<ExperienceCard {exp} />
			{/each}
		</div>
	</div>

	<hr class="divider-thin-red" />

	<div class="exp-section">
		<h3>Education</h3>
		<div class="card-wrapper">
			<ExperienceCard exp={SCHOOL} />
		</div>
	</div>
</div>

<style>
	.title {
		text-align: center;
	}

	.body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 90%;
	}

	@media screen and (min-width: 1200px) {
		.body {
			width: 70%;
			max-width: 1080px;
		}
	}

	@media screen and (min-width: 1400px) {
		.body {
			width: 60%;
			max-width: 1080px;
		}
	}

	.card-wrapper {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
	}

	.exp-section {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
