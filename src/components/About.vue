<template>
	<div id="about" class="columns is-marginless">
		<div class="column is-3"></div>
		<div class="column is-6">
			<article>
				<p class="title">About me</p>
				<hr class="is-divider"/>
				<p class="subtitle">I'm a developer who enjoys working on a variety of tasks.  
					I'm also currently a third year CS student at the University of Waterloo.  I enjoy music, reading, and working on personal projects in my free time.</p>
				<br/>
				<div class="has-text-centered">
					<h3 class="subtitle has-text-centered" style="display:inline">
						<a href="#" target="_blank">Resume</a>
					</h3>
					<h3 class="subtitle has-text-centered" style="display:inline"> | </h3>
					<h3 class="subtitle has-text-centered" style="display:inline">
						<a href="https://github.com/ClementTsang" target="_blank">GitHub</a>
					</h3>
				</div>
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
