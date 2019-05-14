<template>
  <div style="background-color: #fafafa">
	  <!--Divider to block out the navbar-->
	<b-card
		overlay
		style="height: 31rem; border: none; background-color: #FF7597"
		no-body
		class="rounded-0"
		id="home"
	></b-card>
	<About/>
	<Skills/>
	<Projects/>
	<Contact/>
	<!--TODO: Make this part large enough *just* so you can scroll to the bottom component!-->
	<b-card
			overlay
			style="height: 41rem; border: none; background-color: #FF7597"
			no-body
			class="rounded-0"
	  ></b-card>
  </div>
</template>

<script>
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default {
	name: "HomePage",
	components: {
		About,
		Skills,
		Projects,
		Contact,
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
