<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let isOpen = false;

	const dispatch = createEventDispatcher<{ message: { isOpen: boolean } }>();

	function toggleMenu() {
		isOpen = !isOpen;
		dispatch('message', {
			isOpen: isOpen
		});
	}
</script>

<button class="hamburger" on:click={toggleMenu}>
	<div class="lines">
		<span class={isOpen ? 'line open' : 'line'} id="line-top" />
		<span class={isOpen ? 'line open' : 'line'} id="line-mid" />
		<span class={isOpen ? 'line open' : 'line'} id="line-bot" />
	</div>
</button>

<style>
	.hamburger {
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		background-color: inherit;

		cursor: pointer;

		margin: 0;
		padding: 0;
		box-shadow: none;
		border: none;
		background-color: var(--main-background);
	}

	.hamburger:hover {
		background-color: var(--navbar-hover);
	}

	.lines {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 4px;
	}

	.line {
		display: block;
		height: 2px;
		width: 18px;
		background-color: var(--text-colour);
		color: var(--text-colour);

		transition: 0.3s ease-in-out;
	}

	#line-top {
		transform-origin: 0 0;
	}

	#line-mid {
		transition: 0.3s ease-in-out;
	}

	#line-bot {
		transform-origin: 0 100%;
	}

	#line-top.open {
		transform: translate(3px, 0px) rotate(45deg);
	}

	#line-mid.open {
		opacity: 0;
		transform: scaleY(0);
	}

	#line-bot.open {
		transform: translate(3px, 0px) rotate(-45deg);
	}
</style>
