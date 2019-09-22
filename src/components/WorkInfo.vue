<template>
  <div class="columns is-marginless is-centered">
    <div class="column is-4 is-paddingless">
      <p class="entry-title">
        {{ entryTitle }}
      </p>
      <h3>
        {{ dateRange }}
      </h3>
      <h3>
        {{ jobLocation }}
      </h3>
      <h3 v-if="jobWebsite !== ''">
        <a :href="jobWebsite" target="_blank">{{ jobWebsite }}</a>
      </h3>
    </div>
    <div class="column is-1" />
    <div class="column is-7 is-paddingless">
      <p class="entry-subtitle">
        {{ jobPosition }}
      </p>
      <h3>
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
  font-size: 1.2em;
  color: var(--dark-text-colour);
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  margin-bottom: 0.2em;
}
</style>