<script lang="ts">
	import Hamburger from './Hamburger.svelte';

	interface Props {
		currentSection: string;
	}

	let { currentSection = $bindable() }: Props = $props();

	let isHamburgerOpen = $state(false);

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
			const header = document.getElementById('inner-header');
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

	function handleHamburger(event: CustomEvent<{ isOpen: boolean }>) {
		isHamburgerOpen = event.detail.isOpen;
	}

	function hamScrollTo(event: MouseEvent) {
		isHamburgerOpen = false;
		scrollTo(event);
	}
</script>

<div id="header">
	<nav id="inner-header">
		<button class="nav-item" onclick={scrollTo}><p id="home">Clement Tsang</p></button>
		<div id="right-nav">
			<button class={getClass(currentSection, 'experience')} onclick={scrollTo}><p>Experience</p></button>
			<button class={getClass(currentSection, 'projects')} onclick={scrollTo}><p>Projects</p></button>
			<button class={getClass(currentSection, 'contact')} onclick={scrollTo}><p>Contact</p></button>
		</div>
		<div id="right-nav-mobile">
			<Hamburger on:message={handleHamburger} isOpen={isHamburgerOpen} />
		</div>
	</nav>
	<div id="nav-menu-mobile" class={isHamburgerOpen ? 'open' : ''}>
		<button class={getClass(currentSection, 'experience')} onclick={hamScrollTo}><p>Experience</p></button>
		<button class={getClass(currentSection, 'projects')} onclick={hamScrollTo}><p>Projects</p></button>
		<button class={getClass(currentSection, 'contact')} onclick={hamScrollTo}><p>Contact</p></button>
	</div>
</div>

<style>
	#header {
		position: fixed;
		top: 0;
		background-color: var(--main-background);
		z-index: 116116;
		width: 100%;
	}

	#inner-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		direction: ltr;
		padding: 0;
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

	#right-nav-mobile {
		display: none;
	}

	#nav-menu-mobile {
		display: none;
	}

	@media screen and (max-width: 767px) {
		#right-nav {
			display: none;
		}

		#right-nav-mobile {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			margin: 0;
			padding: 0;

			height: auto;
			width: 56px;
		}

		#nav-menu-mobile.open {
			display: flex;
			flex-direction: column;
		}

		#nav-menu-mobile > .nav-item {
			text-align: left;
			padding: 6px 16px;
		}

		.on-section {
			box-shadow: none;
		}
	}
</style>
