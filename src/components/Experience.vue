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
          entry-title="Shopify"
          :date-range="['Sept 2021 - Dec 2021']"
          job-position="Backend Developer Intern"
          job-description="Worked as a backend developer at Shopify on the Commerce Trust and Integrity team to improve analyst tools and the quality of fraud detection."
          job-location="Ontario, Canada"
          job-website="https://www.shopify.ca/"
          job-website-name="Shopify"
          style="padding-bottom: 2rem"
        />
        <WorkInfo
          entry-title="Datadog"
          :date-range="['May 2021 - Aug 2021']"
          job-position="Software Engineering Intern - Metrics"
          job-description="Worked in the Metrics team to build an internal tool that recorded and replayed real-world loads from our services for the purposes of
          debugging and load-testing, helping speed up development time."
          job-location="New York, United States"
          job-website="https://www.datadoghq.com/"
          job-website-name="Datadog"
          style="padding-bottom: 2rem"
        />
        <WorkInfo
          entry-title="Wish"
          :date-range="['Jan 2020 - Apr 2020', 'Sept 2020 - Dec 2020']"
          job-position="Software Engineering Intern"
          job-description="Worked on the Wish Marketplace team as a mobile and backend developer for the Wish Local app, introducing new features and fixing bugs."
          job-location="Ontario, Canada"
          job-website="https://www.wish.com/companyinfo"
          job-website-name="Wish"
          style="padding-bottom: 2rem"
        />
        <WorkInfo
          entry-title="YuJa"
          :date-range="['May 2019 - Aug 2019']"
          job-position="Software Developer - Full Stack"
          job-description="Worked as a full stack software developer
									for a new product, Panorama, automatically creating 
									accessible documents for files uploaded to LMS sites like D2L and Blackboard."
          job-location="Ontario, Canada"
          job-website="https://www.yuja.com/"
          job-website-name="YuJa"
          style="padding-bottom: 2rem"
        />
        <WorkInfo
          entry-title="YuJa"
          :date-range="['Sept 2018 - Dec 2018']"
          job-position="Software Developer - Testing and Operations"
          job-description="Ran QA tests to ensure the quality of our product and
        new features without any regressions, in addition to developing
        automated tests to save time and improve test quality using Selenium."
          job-location="Ontario, Canada"
          job-website="https://www.yuja.com/"
          job-website-name="YuJa"
          style="padding-bottom: 2rem"
        />
        <hr class="is-thin-divider" />
        <br />
        <p class="subtitle">
          Education
        </p>
        <WorkInfo
          entry-title="University of Waterloo"
          :date-range="['2017 - 2022']"
          job-position="Bachelor of Computer Science"
          job-description="Studied and graduated from the University of Waterloo with distinction."
          job-location="Ontario, Canada"
          job-website="https://uwaterloo.ca/"
          job-website-name="University of Waterloo"
          style="padding-bottom: 2rem"
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
