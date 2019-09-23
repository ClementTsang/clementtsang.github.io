<template>
  <div id="about" class="columns is-marginless is-centered page-item">
    <div class="column is-11 is-8-desktop">
      <article>
        <p class="title has-text-centered">
          About
        </p>
        <hr class="is-divider" />
        <h3 class="has-text-centered">
          I'm a developer who enjoys working on all sorts of projects, currently
          studying at the University of Waterloo as a third year Computer
          Science student. I enjoy music, reading, video games, and working on
          personal projects in my free time.
        </h3>
        <br />
        <div class="columns is-centered is-marginless is-mobile">
          <div class="column has-text-centered">
            <font-awesome-icon :icon="['fas', 'file']" size="2x" fixed-width />
            <h3>
              <a href="/assets/resume.pdf" target="_blank">
                Resume
              </a>
            </h3>
          </div>
          <div class="column has-text-centered">
            <font-awesome-icon
              :icon="['fab', 'github']"
              size="2x"
              fixed-width
            />
            <h3>
              <a href="https://github.com/ClementTsang" target="_blank">
                GitHub
              </a>
            </h3>
          </div>
          <div class="column has-text-centered">
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              size="2x"
              fixed-width
            />
            <h3>
              <a
                href="https://www.linkedin.com/in/clement-tsang"
                target="_blank"
              >
                LinkedIn
              </a>
            </h3>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
#about {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: var(--main-background);
}
</style>
