<script lang="ts">
	import FileText from './icons/FileText.svelte';
	import GitHub from './icons/GitHub.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';
</script>

<div class="body">
	<img src="/assets/tri.webp" class="background" alt="" role="presentation" width="2000" height="1000" />
	<div class="text">
		<h1>Clement Tsang</h1>
		<hr class="divider-black" />
		<p>A developer with too many ideas on the backlog.</p>
	</div>
	<div id="greeter-icons">
		<a href="/assets/resume.pdf" target="_blank" rel="noreferrer" aria-label="Open resume"><FileText size={34} /></a>
		<a href="https://github.com/ClementTsang" target="_blank" rel="noreferrer" aria-label="Open GitHub">
			<GitHub size={34} />
		</a>
		<a href="https://www.linkedin.com/in/clement-tsang" target="_blank" rel="noreferrer" aria-label="Open LinkedIn">
			<LinkedIn size={34} />
		</a>
	</div>
</div>

<style>
	.background {
		position: absolute;
		object-fit: cover;
		object-position: center center;
		width: 100%;
		height: 100%;
		opacity: 0.25;
	}

	.body {
		position: relative;
		overflow: hidden;

		width: 100%;
		height: 100vh;
		min-height: 25rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		background-color: var(--red-accent);
	}

	@media screen and (max-width: 650px) {
		.body {
			min-height: 35rem;
		}
	}

	.text {
		margin-top: 6rem;
		width: 90%;
	}

	.body > div {
		z-index: 116;
	}

	hr {
		margin-top: 32px;
		margin-bottom: 32px;
	}

	p {
		font-size: 1.3rem;
		font-weight: 400;
		margin: 0rem;
		color: var(--black-text-colour);
	}

	a,
	a:visited {
		color: var(--black-text-colour);
	}

	a:hover {
		color: var(--dark-colour);
	}

	#greeter-icons {
		margin-top: 4rem;

		display: flex;
		column-gap: 4rem;
	}
</style>
