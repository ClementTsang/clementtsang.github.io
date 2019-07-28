<template>
  <div id="experience" class="columns">
	  	<div class="column is-3"></div>
		<div class="column is-6">
			<article>
				<p class="title">Experience</p>
				<div class="is-divider"></div>
			</article>
		</div>
  </div>
</template>

<script>
export default {
	name: "Experience",
};
</script>

<style scoped>
	#experience {
		padding-top: 6rem;
		padding-bottom: 6rem;
		background-color: var(--main-background-two);
	}

	.is-divider {
  		border-top-color: var(--dark-text-colour) !important;
	}

	.title {
		font-size: 3rem !important;
  		color: var(--dark-text-colour) !important;
		font-family: "Karla", sans-serif !important;
	}
</style>
