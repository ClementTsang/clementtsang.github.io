<template>
	<div id="projects" style="background-color: #E5E9F0">
		<h3 class="title">Projects</h3>
		<!--TODO: Insert 6 projects-->
		<b-container fluid>
			<b-row class="justify-content-md-center">
				<b-form-col>
					<Cards imgSrc="https://picsum.photos/400/400/?image=20" cardTitle="rustcc" cardBody="A C compiler written in Rust."/>
				</b-form-col>
				<b-form-col>
					<Cards imgSrc="https://picsum.photos/400/400/?image=20" cardTitle="Banshee" cardBody="Osu-inspired game that was done for a Gr. 12 CS final project."/>
				</b-form-col>
				<b-form-col>
					<Cards imgSrc="https://picsum.photos/400/400/?image=20" cardTitle="wlp4_compiler" cardBody="A WLP4 compiler."/>
				</b-form-col>
			</b-row>
			<b-row style="padding-top: 4%;" class="justify-content-md-center">
				<b-form-col>
					<Cards imgSrc="https://picsum.photos/400/400/?image=20" cardTitle="rustcc" cardBody="A C compiler written in Rust."/>
				</b-form-col>
				<b-form-col>
					<Cards imgSrc="https://picsum.photos/400/400/?image=20" cardTitle="Banshee" cardBody="Osu-inspired game that was done for a Gr. 12 CS final project."/>
				</b-form-col>
				<b-form-col>
					<Cards imgSrc="https://picsum.photos/400/400/?image=20" cardTitle="wlp4_compiler" cardBody="A WLP4 compiler."/>
				</b-form-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import Cards from "@/components/Cards"
export default {
	name: "Projects",
	components: {
		Cards
	},
};
</script>

<style scoped>
	h3.title {
		text-align: center;
		color: #2E3440;
		padding-top: 5%;
		padding-bottom: 4%;
		font-size: 250%;
	}
</style>
