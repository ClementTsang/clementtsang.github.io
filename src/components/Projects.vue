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
              project-image="assets/bottom.webp"
              project-link="https://github.com/ClementTsang/bottom"
              project-website="https://clementtsang.github.io/bottom/"
              project-title="bottom"
              project-description="A cross-platform graphical process/system monitor, inspired by gotop, gtop, and htop."
            />
          </div>
          <div class="column">
            <ProjectInfo
              project-image="assets/polify.webp"
              project-link="https://github.com/ClementTsang/polify"
              project-website="https://clementtsang.github.io/polify/"
              project-title="Polify"
              project-description="Low-poly image generator library. Written in Rust, with some WebAssembly support."
            />
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column">
            <ProjectInfo
              project-image="assets/rustcc.webp"
              project-link="https://github.com/ClementTsang/rustcc"
              project-title="rustcc"
              project-description="A simple C compiler, written from scratch in Rust."
            />
          </div>
          <div class="column">
            <ProjectInfo
              project-image="assets/banshee.webp"
              project-link="https://github.com/ClementTsang/banshee"
              project-title="Banshee"
              project-description="A osu! clone, written in C++ and featuring automatic map generation."
            />
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column">
            <ProjectInfo
              project-image="assets/opal.webp"
              project-link="https://github.com/ClementTsang/opal"
              project-website="https://clementtsang.github.io/opal/"
              project-title="opal"
              project-description="A static website to look up the IPA of words, written in Rust."
            />
          </div>
          <div class="column">
            <ProjectInfo
              project-image="assets/transcripter.webp"
              project-link="https://github.com/ClementTsang/Transcripter"
              project-title="Transcripter"
              project-description="A simple, offline program to automatically get transcriptions. Written in F#."
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
  background-color: var(--main-background-two);
}

article {
  width: 90%;
  margin: 0 auto;
}
</style>
