<template>
	<div id="about" class="columns is-marginless">
		<div class="column is-3"></div>
		<div class="column is-6">
			<article>
				<p class="title">About me</p>
				<hr class="is-divider"/>
				<p class="subtitle">I'm a developer who enjoys working on a variety of tasks.  
					I'm also currently a CS student at the University of Waterloo.  I enjoy music, reading, and working on personal projects in my free time.</p>
				<br/>
				<h3 class="subtitle has-text-centered">Resume | GitHub</h3>
			</article>
		</div>
	</div>
</template>

<script>
export default {
  	name: "About",
};
</script>

<style scoped>
	#about {
		padding-top: 6rem;
		padding-bottom: 6rem;
		background-color: var(--main-background);
	}

	h3 {
		font-size: 1rem !important;
  		color: var(--dark-text-colour) !important;
		font-family: "Karla", sans-serif !important;
	}

	.title {
		font-size: 3rem !important;
  		color: var(--dark-text-colour) !important;
		font-family: "Karla", sans-serif !important;
	}
</style>
