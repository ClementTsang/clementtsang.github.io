<template>
  <div style="background-color: #ECEFF4; display: flex; flex-direction: column">
	  <!--Divider to block out the navbar --- Could do some red accent!-->
	<b-card
		overlay
		style="height: 31rem; border: none; background-color: #88C0D0;"
		no-body
		class="rounded-0"
		id="home"
	></b-card>
	<About/>
	<b-card
		overlay
		style="height: 15rem; border: none; background-color: #E5E9F0;"
		no-body
		class="rounded-0"
		id="home"
	></b-card>
	<Skills/>
	<b-card
		overlay
		style="height: 15rem; border: none; background-color: #ECEFF4;"
		no-body
		class="rounded-0"
		id="home"
	></b-card>
	<Projects/>
	<!--TODO: Make this part large enough *just* so you can scroll to the bottom component!-->
	<b-card
			overlay
			style="height: 16rem; border: none; background-color: #E5E9F0"
			no-body
			class="rounded-0"
	  ></b-card>
  </div>
</template>

<script>
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default {
	name: "HomePage",
	components: {
		About,
		Skills,
		Projects,
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
