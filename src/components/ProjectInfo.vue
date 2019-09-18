<template>
  <div class="columns is-marginless is-centered is-vcentered">
    <div class="column is-4 is-paddingless">
	  <img :src=projectImage>
    </div>
	<div class="column is-1"></div>
    <div class="column is-7 is-paddingless">
      <p class="entry-subtitle">{{projectTitle}}</p>
      <h3>{{projectDescription}}</h3>
	  <h3 class="project-link"><a :href=projectLink target="_blank">{{projectSite}}</a></h3>
    </div>
  </div>
</template>

<script>

export default {
	props: {
		projectImage: {
			type: String,
			required: true,
		},
		projectLink: {
			type: String,
			required: true,
		},
		projectSite: {
			type: String,
			required: true,
		},
		projectTitle: {
			type: String,
			required: true,
		},
		projectDescription: {
			type: String,
			required: true,
		},
	},
	name: "ProjectInfo",
};
</script>

<style scoped>
.entry-title {
	font-size: 1.5em;
	color: var(--dark-text-colour);
	font-family: "Raleway", sans-serif;
	font-weight: bold;
	margin-top: -0.2em;
}

.entry-subtitle {
	font-size: 1.2em;
	color: var(--dark-text-colour);
	font-family: "Raleway", sans-serif;
	font-weight: bold;
	margin-bottom: 0.2em;
}

.project-link {
	margin-top: 0.25em;
}
</style>