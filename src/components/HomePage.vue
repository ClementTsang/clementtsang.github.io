<template>
  <div id="home">
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
		  <div class="container">
			  <h1 class="hero-title">
				  Clement Tsang
			  </h1>
			  <div class="is-divider"></div>
			  <h2 class="hero-subtitle">
				  Welcome to my website!
			  </h2>
		  </div>
	  </div>
	</section>
	<section>
		<About/>
	</section>
	<section>
		<Experience/>
	</section>
	<section>
		<Skills/>
	</section>
	<section>
		<Projects/>
	</section>
	<section>
		<!--Contact me-->
	</section>
	<section>
		<!--Footer-->
	</section>
  </div>
</template>

<script>
import bulmaDivider from 'bulma-divider'
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default {
	name: "HomePage",
	components: {
		About,
		Experience,
		Skills,
		Projects,
	},
	data () {
		return {
			dividers : []
		}
	},
};
</script>

<style scoped>
.hero-body {
	background-color: var(--accent-1);
	color: var(--main-background) !important;
	font-family: "Karla", sans-serif !important;
}


.hero-title {
	font-size: 4rem !important;
	color: var(--main-block-colour) !important;
	font-weight: bold;
}

.hero-subtitle {
	font-size: 2rem !important;
	color: var(--main-block-colour) !important;
}

.is-divider {
	border-top-color: var(--main-block-colour) !important;
}

</style>
