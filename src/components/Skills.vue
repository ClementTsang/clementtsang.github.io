<template>
	<div id="skills" style="background-color: #ECEFF4">
		<h3 class="title">Work Experience</h3>
		<!--TODO: Insert skills-->
		<!--TODO: Insert past experience-->
		<SkillCard imgSrc="" cardTitle="University of Waterloo" cardSubTitle="Temp" cardBody="Temp"/>
	</div>
</template>

<script>
import SkillCard from "@/components/SkillCard"
export default {
	name: "Skills",
	components: {
		SkillCard,
	}
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
