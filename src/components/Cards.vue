<template>
  <div id="projects"></div>
</template>

<script>
export default {
	props: {
		imgSrc: {
			type: String,
			required: true
		},
		cardTitle: {
			type: String,
			required: true
		},
		cardBody: {
			type: String,
			required: true
		}
	},
	name: "Cards"
};
</script>

<style scoped>
h4 {
  color: #2e3440;
  font-size: 150%;
}

h5 {
  color: #2e3440;
  font-size: 100%;
}

b-card-img {
  width: 100%;
  height: 80%;
}

.work-card {
  color: #2e3440;
  border: none;
  margin: 0 auto;
  background-color: #eceff4;
}

#projects {
  width: 65%;
  height: 70%;
  margin: 0 auto;
}
</style>
