<template>
  <div id="home">
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
		<div class="container">
			<h1 class="hero-title has-text-centered">
				Hello
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
		<Projects/>
	</section>
	<section>
		<Contact/>
	</section>
	<section>
		<section id="footer">
			<div style="height: 4rem;">
				<p>Like the website?  Source code can be found <a href="https://github.com/ClementTsang/personal-website/" target="_blank">here</a></p>
			</div>
		</section>
	</section>
  </div>
</template>

<script>
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default {
	name: "HomePage",
	components: {
		About,
		Experience,
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

.hero-body:after {
	background-color: var(--main-background);
}

.hero-body {
	background-color: var(--accent-1);
	color: var(--dark-text-colour) !important;
	font-family: "Raleway", sans-serif !important;
}

.hero-title {
	font-size: 4rem !important;
	font-family: "Quicksand", sans-serif !important;
}

.hero-subtitle {
	font-size: 2rem !important;
}

.is-divider {
	background-color: var(--dark-text-colour)
}

#footer {
	background-color: var(--main-background-two);
}

</style>
