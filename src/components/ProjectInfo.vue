<template>
  <div class="project-div has-text-centered">
    <div
      class="project-card card"
      :style="{ backgroundImage: `url(${projectImage})` }"
    >
      <div class="frost-card card-content is-shadowless">
        <div class=" has-text-centered">
          <p class="entry-title">
            {{ projectTitle }}
          </p>
          <p class="entry-subtitle">
            {{ projectDescription }}
          </p>
          <br />
          <div class="entry-subtitle" style="display: inline;">
            <b-tooltip label="GitHub Page" position="is-bottom" type="is-dark">
              <a :href="projectLink" target="_blank">
                <font-awesome-icon
                  :icon="['fab', 'github']"
                  size="2x"
                  fixed-width
                />
              </a>
            </b-tooltip>
          </div>
          <div
            class="entry-subtitle"
            v-if="projectWebsite != ''"
            style="display: inline;"
          >
            <b-tooltip label="Project Page" position="is-bottom" type="is-dark">
              <a :href="projectLink" target="_blank">
                <font-awesome-icon
                  :icon="['fas', 'external-link-alt']"
                  size="2x"
                  fixed-width
                />
              </a>
            </b-tooltip>
          </div>
          <div
            class="entry-subtitle"
            v-if="projectDownload != ''"
            style="display: inline;"
          >
            <b-tooltip label="Download" position="is-bottom" type="is-dark">
              <a :href="projectLink" target="_blank">
                <font-awesome-icon
                  :icon="['fas', 'download']"
                  size="2x"
                  fixed-width
                />
              </a>
            </b-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectImage: {
      type: String,
      required: true
    },
    projectLink: {
      type: String,
      required: true
    },
    projectTitle: {
      type: String,
      required: true
    },
    projectDescription: {
      type: String,
      required: true
    },
    projectWebsite: {
      type: String,
      default: ""
    },
    projectDownload: {
      type: String,
      default: ""
    }
  },
  name: "ProjectInfo"
};
</script>

<style scoped>
.entry-title {
  font-size: 1.8em;
  color: var(--dark-text-colour);
  font-family: "Raleway", sans-serif;
  margin-top: -0.2em;
}

.entry-subtitle {
  font-size: 1.2em;
  color: var(--dark-text-colour);
  font-family: "Quicksand", sans-serif;
  margin-bottom: 0.2em;
  margin-left: 0.3em;
  margin-right: 0.3em;
}

.project-div {
  display: grid;
  margin-bottom: 1em;
  grid-template-columns: 1fr auto;
}

.project-div > div {
  grid-column: 1;
  grid-row: 1;
}

.project-card {
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  margin: 0 auto;
  height: 450px;
  width: 100%;
  background-color: var(--main-background-two);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.frost-card {
  opacity: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  margin: 0 auto;
  transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;

  /* Glass effect */
  background: inherit;
  z-index: 1;
}

.frost-card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  z-index: -1;
  box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.39);

  -webkit-filter: blur(5px) contrast(125%) brightness(100%);
  filter: blur(5px) contrast(125%) brightness(100%);
  margin: -5px;
}

.frost-card:hover,
.frost-card:focus {
  opacity: 1;
}

@media screen and (max-width: 1023px) {
  .project-card {
    height: 400px;
  }
}

@media screen and (max-width: 767px) {
  .project-card {
    height: 300px;
  }
}

a {
  text-decoration: none;
}

a,
a:visited {
  color: var(--dark-text-colour);
}

a:hover {
  color: var(--url-hover);
}
</style>
