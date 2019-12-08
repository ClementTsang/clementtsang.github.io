<template>
  <div>
    <section
      id="home"
      class="hero is-fullheight-with-navbar"
      v-observe-visibility="{
        callback: visibilityChanged,
        throttle: this.throttle,
        intersection: this.intersection
      }"
    >
      <!--Maybe autogen this in the future?-->
      <img class="hero-background" src="assets/tri.webp" />
      <div class="hero-body">
        <div class="container">
          <h1 class="hero-title has-text-centered">
            Clement Tsang
          </h1>
          <hr class="is-divider" />
          <h2 class="hero-subtitle has-text-centered">
            Welcome to my website!
          </h2>
        </div>
      </div>
    </section>
    <section>
      <About
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: this.throttle,
          intersection: this.intersection
        }"
      />
    </section>
    <section>
      <Experience
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: this.throttle,
          intersection: this.intersection
        }"
      />
    </section>
    <section>
      <Projects
        v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            threshold: 0.4
          }
        }"
      />
    </section>
    <section>
      <Contact
        v-observe-visibility="{
          callback: visibilityChanged,
          throttle: this.throttle,
          intersection: this.intersection
        }"
      />
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Website source can be found
          <a href="https://github.com/ClementTsang/personal-website">
            on GitHub here.
          </a>
          If you want to use it, feel free!
        </p>
        <p>
          The source code is licensed under
          <a
            href="https://github.com/ClementTsang/personal-website/blob/master/LICENSE"
          >
            MIT.
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default {
  name: "HomePage",
  components: {
    About,
    Experience,
    Projects,
    Contact
  },
  mounted() {
    this.scroll_elements = new Map([]);
    this.scroll_elements.set("home", true);

    let sortedNodes = Array.from(
      document.getElementsByTagName("section")
    ).slice(1);

    sortedNodes.sort((a, b) => {
      if (a === b) return 0;
      else if (!a.compareDocumentPosition) {
        return a.sourceIndex - b.sourceIndex;
      } else if (a.compareDocumentPosition(b) & 2) {
        return 1;
      }
      return -1;
    });

    for (let section of sortedNodes) {
      if (section.childNodes.length === 1) {
        this.scroll_elements.set(section.childNodes[0].id, false);
      }
    }
  },
  data() {
    return {
      scroll_elements: new Map([]),
      throttle: 0,
      intersection: {
        threshold: 0.105
      }
    };
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.scroll_elements.set(entry.target.id, isVisible);

      let post_found = false;
      for (let scroll_ele of this.scroll_elements) {
        if (post_found === true || scroll_ele[1] === false) {
          if (scroll_ele[1] !== "home") {
            let ele = document.getElementById(`${scroll_ele[0]}-link`);
            if (ele) {
              ele.classList.remove("pseudo-navbar-focus");
            }
          }
        } else if (scroll_ele[1] === true) {
          post_found = true;
          if (scroll_ele[1] !== "home") {
            let ele = document.getElementById(`${scroll_ele[0]}-link`);
            if (ele) {
              ele.classList.add("pseudo-navbar-focus");
            }
          }
        }
      }
    }
  }
};
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  opacity: 0.25;
}

.hero-body {
  background-color: var(--red-accent);
  color: var(--black-text-colour);
  font-family: "Raleway", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.hero-title {
  font-size: 5em;
}

.hero-subtitle {
  font-size: 2.25rem;
}

.is-divider {
  background-color: var(--black-text-colour);
}

.footer {
  background-color: var(--main-background-two);
  color: var(--text-colour);
}
</style>
