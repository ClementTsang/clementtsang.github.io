<template>
	<div id="projects" style="background-color: #ECEFF4">
		<b-card no-body class="work-card overflow-hidden">
			<b-card-img :src="imgSrc" class="rounded-0" :alt="cardTitle + ' Image'" top></b-card-img>
			<b-card-body class="work-title" :title="cardTitle" title-tag="h4" body-tag="h5">
				{{cardBody}}
			</b-card-body>
		</b-card>
	</div>
</template>

<script>
export default {
	props: {
		imgSrc: {
			type: String,
			required: true,
		},
		cardTitle: {
			type: String,
			required: true,
		},
		cardBody: {
			type: String,
			required: true,
		},
	},
	name: "Cards"
};
</script>

<style scoped>
	h4{
		color: #2E3440;
		font-size: 150%;
	}

	h5{
		color: #2E3440;
		font-size: 100%;
	}

	b-card-img {
		width: 100%;
		height: 80%;
	}

	.work-card {
		color: #2E3440;
		border: none; 
		margin: 0 auto;
		background-color: #ECEFF4;
	}

	#projects {
		width: 65%;
		height: 70%;
		margin: 0 auto;
	}
</style>
