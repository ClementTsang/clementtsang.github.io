<script lang="ts"></script>

<div id="header">
	<nav>
		<ul><p id="home" class="nav-item">Clement Tsang</p></ul>
		<ul>
			<li class="nav-item"><p>Experience</p></li>
			<li class="nav-item"><p>Projects</p></li>
			<li class="nav-item"><p>Contact</p></li>
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
		direction: ltr;

		padding: 0;

		display: flex;
		flex-direction: row;
		justify-content: space-between;

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
		-moz-outline-style: none;
		outline-style: none;
	}

	.nav-item {
		padding: 8px 12px;
		background-color: var(--main-background);
	}

	.nav-item:focus {
		background-color: var(--main-background);
	}

	.nav-item:hover {
		background-color: var(--navbar-hover);
	}

	#home {
		font-size: 1.2rem;
	}

	p {
		font-size: 0.95rem;
		font-family: 'Quicksand', sans-serif;
		font-weight: 500;
		line-height: 2.5rem;
		margin: 0;

		cursor: pointer !important;
	}
</style>
