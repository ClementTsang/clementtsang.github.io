<template>
  <div id="projects" class="columns is-marginless is-centered page-item">
    <div class="column is-10 is-8-desktop">
      <article>
        <p class="title has-text-centered">
          Projects
        </p>
        <hr class="is-divider" />
        <ProjectInfo
          project-image="./assets/bottom.gif"
          project-link="https://github.com/ClementTsang/bottom"
          project-site="GitHub"
          project-title="bottom"
          project-description="A top clone, written in Rust."
          style="padding-bottom: 2rem;"
        />
        <ProjectInfo
          project-image
          project-link="https://github.com/ClementTsang/RustNAO"
          project-site="GitHub"
          project-title="RustNAO"
          project-description="A Rust wrapper for the SauceNAO API, a popular reverse image search engine."
          style="padding-bottom: 2rem;"
        />
        <ProjectInfo
          project-image
          project-link="https://github.com/ClementTsang/rustcc"
          project-site="GitHub"
          project-title="rustcc"
          project-description="A simple C compiler, written from scratch in Rust."
          style="padding-bottom: 2rem;"
        />
      </article>
    </div>
  </div>
</template>

<script>
import ProjectInfo from "@/components/ProjectInfo";
export default {
  name: "Projects",
  components: {
    ProjectInfo
  }
};
</script>

<style scoped>
#projects {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: var(--main-background);
}
</style>
