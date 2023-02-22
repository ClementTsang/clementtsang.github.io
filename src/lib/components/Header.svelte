<script lang="ts">
	import Hamburger from './Hamburger.svelte';

	export let currentSection: string;

	function scrollTo(event: MouseEvent) {
		if (event.target) {
			let element = event.target as HTMLElement;

			let target = '';
			if (element.id) {
				target = element.id;
			} else {
				target = element.textContent || '';
			}
			target = target.toLowerCase();
			if (target == 'clement tsang') {
				target = 'home';
			}

			const section = document.getElementById(target);
			const header = document.getElementById('header');
			if (target && section && header) {
				// TODO: Fix the stuttering issue if you spam click a section.
				// We offset by 1 for experience since it otherwise is just on the border of being
				// selected by our header selector.
				window.scrollTo({
					top: section.offsetTop - header.offsetHeight + (target === 'experience' ? 1 : 0),
					behavior: 'smooth'
				});
			}
		}
	}

	function getClass(current: string, toCheck: string): string {
		return current === toCheck ? 'nav-item on-section' : 'nav-item';
	}
</script>

<div id="header">
	<nav>
		<button class="nav-item" on:click={scrollTo}><p id="home">Clement Tsang</p></button>
		<div class="right-nav">
			<button class={getClass(currentSection, 'experience')} on:click={scrollTo}><p>Experience</p></button>
			<button class={getClass(currentSection, 'projects')} on:click={scrollTo}><p>Projects</p></button>
			<button class={getClass(currentSection, 'contact')} on:click={scrollTo}><p>Contact</p></button>
		</div>
		<div class="right-nav-mobile">
			<Hamburger />
		</div>
	</nav>
</div>

<style>
	#header {
		position: fixed;
		top: 0;
		background-color: var(--main-background);
		z-index: 116116;
	}

	#header > nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		direction: ltr;
		padding: 0;
		width: 100vw;
	}

	.nav-item {
		padding: 8px 16px;
		background-color: var(--main-background);
		border: none;
		box-shadow: none;
		text-align: center;
		cursor: pointer;
	}

	.nav-item:focus {
		background-color: var(--main-background);
	}

	.nav-item:hover {
		background-color: var(--navbar-hover);
	}

	#home {
		font-size: 1.25rem;
	}

	p {
		font-size: 1rem;
		font-weight: 400;
		line-height: 2.5rem;
		margin: 0;
	}

	.on-section {
		box-shadow: inset 0 -2px 0 0 var(--red-accent);
	}

	.right-nav-mobile {
		display: none;
	}

	@media screen and (max-width: 767px) {
		.right-nav {
			display: none;
		}

		.right-nav-mobile {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			margin: 0;
			padding: 0;

			height: auto;
			width: 56px;
		}
	}
</style>
