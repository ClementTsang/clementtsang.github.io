<template>
  <div class="columns is-marginless is-centered">
    <div class="column is-4 is-paddingless">
      <p class="entry-title">{{entryTitle}}</p>
      <h3>{{dateRange}}</h3>
    </div>
	<div class="column is-1"></div>
    <div class="column is-7 is-paddingless">
      <p class="entry-subtitle">{{jobPosition}}</p>
      <h3>{{jobDescription}}</h3>
      <h3 v-if="jobWebsite !== ''" style="padding-top: 0.5rem;">{{jobLocation}}&nbsp;&nbsp;|&nbsp;&nbsp;<a :href=jobWebsite target="_blank">{{jobWebsite}}</a></h3>
      <h3 v-if="jobWebsite === ''" style="padding-top: 0.5rem;">{{jobLocation}}</h3>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		entryTitle: {
			type: String,
			required: true,
		},
		dateRange: {
			type: String,
			required: true,	//TODO: make this accessible!
		},
		jobPosition: {
			type: String,
			required: true,
		},
		jobDescription: {
			type: String,
			required: true,
		},
		jobLocation: {
			type: String,
			default: '',
		},
		jobWebsite: {
			type: String,
			default: '',
		},
	},
	name: "WorkInfo",
};
</script>

<style scoped>
.entry-title {
	font-size: 1.5rem !important;
	color: var(--dark-text-colour) !important;
	font-family: "Karla", sans-serif !important;
	font-weight: bold;
	margin-top: -0.2rem !important;
}

.entry-subtitle {
	font-size: 1.2rem !important;
	color: var(--dark-text-colour) !important;
	font-family: "Karla", sans-serif !important;
	font-weight: bold;
}
</style>