<template>
  <div id="skill-card">
    <h4>{{cardTitle}}</h4>
    <h5>{{cardSubTitle}}</h5>
    <p>{{cardBody}}</p>
  </div>
</template>

<script>
export default {
	props: {
		imgSrc: {
			type: String
		},
		cardTitle: {
			type: String,
			required: true
		},
		cardSubTitle: {
			type: String,
			required: true
		},
		cardBody: {
			type: String,
			required: true
		}
	},
	name: 'SkillCard'
};
</script>

<style scoped>
</style>
