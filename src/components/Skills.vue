<template>
	<div id="skills" style="background-color: #ECEFF4">
		<h3 class="title">Work Experience</h3>
		<!--TODO: Insert skills-->
		<!--TODO: Insert past experience-->
		<b-card no-body class="work-card overflow-hidden">
			<b-row no-gutters>
				<b-col md="6">
					<b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
				</b-col>
				<b-col md="6">
					<b-card-body class="work-title" title="YuJa - Software Engineer" title-tag="h4" body-tag="h5">
						Worked on Panorama, an accessibility...
					</b-card-body>
				</b-col>
			</b-row>
		</b-card>
		<b-card no-body class="work-card overflow-hidden" style="margin-top: 5rem;">
			<b-row no-gutters>
				<b-col md="6">
					<b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
				</b-col>
				<b-col md="6">
					<b-card-body class="work-title" title="YuJa - Automation" title-tag="h4" body-tag="h5">
						Worked on Panorama, an accessibility...
					</b-card-body>
				</b-col>
			</b-row>
		</b-card>
	</div>
</template>

<script>
export default {
	name: "Skills"
};
</script>

<style scoped>
	h3.title {
		text-align: center;
		color: #2E3440;
		padding-top: 3rem;
		padding-bottom: 1rem;
		font-size: 250%;
	}

	h4{
		color: #2E3440;
		font-size: 160%;
	}

	h5{
		color: #2E3440;
		font-size: 110%;
	}

	.work-card {
		color: #2E3440;
		height: 21rem; 
		border: none; 
		margin: 0 auto;
		max-width: 75rem;
		background-color: #E5E9F0
	}
</style>
