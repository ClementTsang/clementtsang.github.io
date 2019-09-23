<template>
  <div id="projects" class="columns is-marginless is-centered page-item">
    <div class="column is-12">
      <article>
        <p class="title has-text-centered">
          Projects
        </p>
        <hr class="is-divider" />
        <div class="columns is-centered">
          <div class="column">
            <ProjectInfo
              project-image="assets/bottom.png"
              project-link="https://github.com/ClementTsang/bottom"
              project-title="bottom"
              project-description="A crossplatform top clone, written in Rust."
            />
          </div>
          <div class="column">
            <ProjectInfo
              project-image="assets/rustnao.png"
              project-link="https://github.com/ClementTsang/RustNAO"
              project-title="RustNAO"
              project-description="A Rust wrapper for the SauceNAO API, a popular reverse image search engine."
            />
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column">
            <ProjectInfo
              project-image="assets/rustcc.png"
              project-link="https://github.com/ClementTsang/rustcc"
              project-title="rustcc"
              project-description="A simple C compiler, written from scratch in Rust."
            />
          </div>
          <div class="column">
            <ProjectInfo
              project-image="assets/banshee.png"
              project-link="https://github.com/ClementTsang/banshee"
              project-title="Banshee"
              project-description="A osu! clone, written in C++ and featuring automatic map generation."
            />
          </div>
        </div>
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

article {
  width: 90%;
  margin: 0 auto;
}
</style>
