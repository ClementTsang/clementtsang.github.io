<template>
  <div style="background-color: #fafafa">
	  <!--Divider to block out the navbar-->
	<b-card
		overlay
		style="height: 31rem; border: none; background-color: #FF0266"
		no-body
		class="rounded-0"
		id="home"
	></b-card>
	<About/>
	<Resume/>
	<Projects/>
	<Contact/>
	<!--Temp-->
	<b-card
			overlay
			style="height: 41rem; border: none; background-color: #FF0266"
			no-body
			class="rounded-0"
	  ></b-card>
  </div>
</template>

<script>
import About from "@/components/About.vue";
import Resume from "@/components/Resume.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";

export default {
	name: "HomePage",
	components: {
		About,
		Resume,
		Projects,
		Contact,
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
