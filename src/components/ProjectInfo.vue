<template>
  <div class="project-div has-text-centered">
    <div class="project-img">
      <img :src="projectImage" />
    </div>
    <div class="project-card card">
      <div class="card-content has-text-centered">
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

.project-div > div,
.project-img {
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
  background-color: var(--red-accent);
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
}

.project-card:hover,
.project-card:focus {
  opacity: 1;
  transition: 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
}

.project-img {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
  background-color: #f3f3f3;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

@media screen and (max-width: 1023px) {
  img {
    object-position: left;
  }

  .project-img,
  .project-card {
    height: 400px;
  }
}

@media screen and (max-width: 767px) {
  .project-img,
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
