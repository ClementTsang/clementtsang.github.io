<template>
  <div class="columns is-marginless is-centered">
    <div class="column is-4 is-paddingless">
      <p class="entry-title">
        {{ entryTitle }}
      </p>
      <p class="smaller-subtitle entry-subtitle">
        {{ jobPosition }}
      </p>
      <h3>
        <font-awesome-icon
          :icon="['fas', 'calendar-alt']"
          size="sm"
          fixed-width
        />

        {{ dateRange }}
      </h3>
      <h3>
        <font-awesome-icon
          :icon="['fas', 'map-marker-alt']"
          size="sm"
          fixed-width
        />

        {{ jobLocation }}
      </h3>
      <h3 v-if="jobWebsite !== ''">
        <a :href="jobWebsite" target="_blank">
          <font-awesome-icon :icon="['fas', 'link']" size="sm" fixed-width />
          {{ jobWebsiteName }}
        </a>
      </h3>
    </div>
    <div class="column is-1" />
    <div class="column is-7 is-paddingless">
      <p class="entry-subtitle larger-subtitle">
        {{ jobPosition }}
      </p>
      <!--TODO: Make this expandable on mobile-->
      <h3 class="job-desc">
        {{ jobDescription }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkInfo",
  props: {
    entryTitle: {
      type: String,
      required: true
    },
    dateRange: {
      type: String,
      required: true //TODO: make this accessible!
    },
    jobPosition: {
      type: String,
      required: true
    },
    jobDescription: {
      type: String,
      required: true
    },
    jobLocation: {
      type: String,
      default: ""
    },
    jobWebsite: {
      type: String,
      default: ""
    },
    jobWebsiteName: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.entry-title {
  font-size: 1.5em;
  color: var(--dark-text-colour);
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  margin-top: -0.2em;
}

.entry-subtitle {
  font-size: 1.1em;
  color: var(--dark-text-colour);
  font-family: "QuickSand", sans-serif;
  font-weight: bold;
  margin-bottom: 0.2em;
}

.smaller-subtitle {
  display: none;
}

@media screen and (max-width: 767px) {
  .job-desc,
  .larger-subtitle {
    display: none;
  }

  .smaller-subtitle {
    display: flex;
  }
}
</style>