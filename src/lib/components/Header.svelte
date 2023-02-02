<script lang="ts"></script>

<div id="header" class="container-fluid">
	<nav>
		<ul id="home" class="nav-items">Clement Tsang</ul>
		<ul>
			<li class="nav-items">Experience</li>
			<li class="nav-items">Projects</li>
			<li class="nav-items">Contact</li>
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

	#home {
		font-size: 1rem;
		font-family: 'Quicksand', sans-serif;
		font-weight: 600;
	}

	.nav-items {
		font-size: 0.9rem;
		font-family: 'Quicksand', sans-serif;
		font-weight: 500;
		cursor: pointer;
	}
</style>
