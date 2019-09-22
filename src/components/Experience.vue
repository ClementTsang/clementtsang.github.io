<template>
  <div id="experience" class="columns is-marginless is-centered page-item">
    <div class="column is-10 is-8-desktop">
      <article>
        <p class="title has-text-centered">
          Experience
        </p>
        <hr class="is-divider" />
        <p class="subtitle">
          Work
        </p>
        <WorkInfo
          entry-title="YuJa Inc."
          date-range="2019"
          job-position="Fulltime - Software Developer"
          job-description="Worked as a full stack software developer
									for a new product, Panorama, automatically creating 
									accessible documents for files uploaded to LMS sites like D2L and Blackboard,
									ensuring users wouldn't have to worry about being able to access documents that 
									others have uploaded."
          job-location="Ontario, Canada"
          job-website
          style="padding-bottom: 2rem;"
        />
        <WorkInfo
          entry-title="YuJa Inc."
          date-range="2018"
          job-position="Fulltime - Test Automation Engineer"
          job-description="Ran QA tests to ensure the quality of our product and new
									features without any regressions, in addition to developing automated tests to save time 
									and improve test quality using Selenium."
          job-location="Ontario, Canada"
          job-website="https://www.yuja.com/"
          style="padding-bottom: 2rem;"
        />
        <hr class="is-thin-divider" />
        <!--TODO: fill in rest of uni details-->
        <p class="subtitle">
          Education
        </p>
        <WorkInfo
          entry-title="University of Waterloo"
          date-range="2017 - Present"
          job-position="Computer Science, Honours"
          job-description="I'm currently a third year Computer Science student at the Unviersity of Waterloo."
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
    WorkInfo
  }
};
</script>

<style scoped>
#experience {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: var(--main-background-two);
}
</style>
