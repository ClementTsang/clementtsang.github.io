<script lang="ts"></script>

<div class="body">
	<!-- svelte-ignore a11y-missing-attribute -->
	<img src="/assets/tri.webp" class="background" />
	<div class="text">
		<h1>Clement Tsang</h1>
		<hr class="divider-black" />
		<p>A developer with too many things on his backlog.</p>
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

		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		background-color: var(--red-accent);
	}

	.text {
		z-index: 2;
	}

	h1 {
		font-size: 4.5rem;
		font-family: 'Raleway', sans-serif;
		font-weight: 500;
		margin: 0rem;
		color: var(--black-text-colour);
	}

	p {
		font-size: 1.1rem;
		font-weight: 400;
		font-family: 'Quicksand', sans-serif;
		margin: 0rem;
		color: var(--black-text-colour);
	}
</style>
