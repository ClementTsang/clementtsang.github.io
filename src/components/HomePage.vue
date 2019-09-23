<template>
  <div id="home">
    <section class="hero is-fullheight-with-navbar">
      <!--Maybe autogen this in the future?-->
      <img class="hero-background" src="assets/tri.png" />
      <div class="hero-body">
        <div class="container">
          <h1 class="hero-title has-text-centered">
            Clement Tsang
          </h1>
          <hr class="is-divider" />
          <h2 class="hero-subtitle has-text-centered">
            Welcome to my website!
          </h2>
        </div>
      </div>
    </section>
    <section>
      <About />
    </section>
    <section>
      <Experience />
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <Contact />
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
    Contact
  },
  data() {
    return {
      dividers: []
    };
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  opacity: 0.25;
}

.hero-body {
  background-color: var(--accent-1);
  color: var(--dark-text-colour);
  font-family: "Raleway", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.hero-title {
  font-size: 5em;
}

.hero-subtitle {
  font-size: 2.25rem;
}

.is-divider {
  background-color: var(--dark-text-colour);
}

#footer {
  background-color: var(--main-background-two);
}
</style>
