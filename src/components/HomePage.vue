<template>
  <div id="home">
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
		<div class="container">
			<h1 class="hero-title has-text-centered">
				Clement Tsang
			</h1>
			<hr class="is-divider"/>
			<h2 class="hero-subtitle has-text-centered">
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
		<Contact/>
	</section>
	<section>
		<section id="footer">
			<div style="height: 4rem;">
				<p>Like the website?  Source code can be found <a href="" target="_blank">here</a></p>
			</div>
		</section>
	</section>
  </div>
</template>

<script>
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default {
	name: "HomePage",
	components: {
		About,
		Experience,
		Skills,
		Projects,
		Contact,
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
	font-family: "Raleway", sans-serif !important;
}


.hero-title {
	font-size: 4rem !important;
	color: var(--main-background) !important;
	font-family: "Quicksand", sans-serif !important;
}

.hero-subtitle {
	font-size: 2rem !important;
	color: var(--main-background) !important;
}

.is-divider {
	background-color: var(--main-background)
}

#footer {
	background-color: var(--main-background);
}

</style>
