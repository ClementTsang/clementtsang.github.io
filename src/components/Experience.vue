<template>
  <div id="experience" class="columns is-marginless is-centered page-item">
    <div class="column is-11">
      <article>
        <p class="title has-text-centered">
          Experience
        </p>
        <hr class="is-divider" />
        <br />
        <p class="subtitle">
          Work
        </p>
        <WorkInfo
          entry-title="Datadog"
          :date-range="['May 2021 - Current']"
          job-position="Software Engineering Intern - Metrics"
          job-description="Currently working remotely as an SE intern at Datadog."
          job-location="New York, NY"
          job-website="https://www.datadoghq.com/"
          job-website-name="Datadog"
          style="padding-bottom: 2rem;"
        />
        <WorkInfo
          entry-title="Wish"
          :date-range="['Jan 2020 - Apr 2020', 'Sept 2020 - Dec 2020']"
          job-position="Software Engineering Intern"
          job-description="Worked on the Wish Marketplace team as a mobile and backend developer for the Wish Local app, introducing new features and fixing bugs."
          job-location="Ontario, Canada"
          job-website="https://www.wish.com/companyinfo"
          job-website-name="Wish"
          style="padding-bottom: 2rem;"
        />
        <WorkInfo
          entry-title="YuJa Inc."
          :date-range="['May 2019 - Aug 2019']"
          job-position="Software Developer - Full Stack"
          job-description="Worked as a full stack software developer
									for a new product, Panorama, automatically creating 
									accessible documents for files uploaded to LMS sites like D2L and Blackboard."
          job-location="Ontario, Canada"
          job-website="https://www.yuja.com/"
          job-website-name="YuJa"
          style="padding-bottom: 2rem;"
        />
        <WorkInfo
          entry-title="YuJa Inc."
          :date-range="['Sept 2018 - Dec 2018']"
          job-position="Software Developer - Testing and Operations"
          job-description="Ran QA tests to ensure the quality of our product and
        new features without any regressions, in addition to developing
        automated tests to save time and improve test quality using Selenium."
          job-location="Ontario, Canada"
          job-website="https://www.yuja.com/"
          job-website-name="YuJa"
          style="padding-bottom: 2rem;"
        />
        <hr class="is-thin-divider" />
        <br />
        <p class="subtitle">
          Education
        </p>
        <WorkInfo
          entry-title="University of Waterloo"
          :date-range="['2017 - Present']"
          job-position="Computer Science, Honours"
          job-description="Currently a fourth year Computer Science student at the Unviersity of Waterloo. Set to graduate in 2022."
          job-location="Ontario, Canada"
          style="padding-bottom: 2rem;"
        />
      </article>
    </div>
  </div>
</template>

<script>
import WorkInfo from "@/components/WorkInfo";
export default {
  name: "Experience",
  components: {
    WorkInfo,
  },
};
</script>

<style scoped>
#experience {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: var(--main-background);
}
</style>
