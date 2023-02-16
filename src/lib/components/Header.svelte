<script lang="ts">
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
				window.scrollTo({
					top: section.offsetTop - header.offsetHeight,
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
		<ul><button class="nav-item" on:click={scrollTo}><p id="home">Clement Tsang</p></button></ul>
		<ul>
			<li>
				<button class={getClass(currentSection, 'experience')} on:click={scrollTo}><p>Experience</p></button>
			</li>
			<li>
				<button class={getClass(currentSection, 'projects')} on:click={scrollTo}><p>Projects</p></button>
			</li>
			<li>
				<button class={getClass(currentSection, 'contact')} on:click={scrollTo}><p>Contact</p></button>
			</li>
		</ul>
		<!--TODO: Add hamburger-->
	</nav>
</div>

<style>
	#header {
		position: fixed;
		top: 0;
		background-color: white;
		z-index: 100;
	}

	#header > nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		direction: ltr;
		padding: 0;
		width: 100vw;
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		margin: 0;
		padding: 0;

		list-style-type: none;
	}

	.nav-item:active,
	.nav-item:focus,
	.nav-item:hover {
		outline-style: none;
	}

	.nav-item {
		padding: 8px 12px;
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
</style>
