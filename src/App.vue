<template>
  <div id="app">
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <router-link
          @click.native="mobileCloseHamburger"
          class="navbar-item"
          to="/#home"
        >
          <p>Clement Tsang</p>
        </router-link>

        <a
          id="menu-hamburger"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="main-nav-bar"
          @click="toggleHamburger"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="main-nav-bar"
        class="navbar-menu is-shadowless is-marginless is-paddingless"
      >
        <div class="navbar-end">
          <router-link
            id="about-link"
            @click.native="mobileCloseHamburger"
            class="navbar-item"
            to="/#about"
          >
            About
          </router-link>
          <router-link
            id="experience-link"
            @click.native="mobileCloseHamburger"
            class="navbar-item"
            to="/#experience"
          >
            Experience
          </router-link>
          <router-link
            id="projects-link"
            @click.native="mobileCloseHamburger"
            class="navbar-item"
            to="/#projects"
          >
            Projects
          </router-link>
          <router-link
            id="contact-link"
            @click.native="mobileCloseHamburger"
            class="navbar-item"
            to="/#contact"
          >
            Contact
          </router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: () => {
    const handleScroll = navItem => {
      const correspondingLink = document.querySelector(`#${navItem.id}-link`);

      // TODO: Add scroll spy
    };

    Array.from(document.querySelectorAll(".page-item")).forEach(handleScroll);
  },
  methods: {
    toggleHamburger() {
      const burgerEle = document.getElementById("menu-hamburger");
      const target = burgerEle.dataset.target;
      burgerEle.classList.toggle("is-active");
      document.getElementById(target).classList.toggle("is-active");
    },
    mobileCloseHamburger() {
      const burgerEle = document.getElementById("menu-hamburger");
      if (burgerEle.classList.contains("is-active")) {
        this.toggleHamburger();
      }
    }
  }
};
</script>


<style>
:root {
  --main-background: #f8f8f8;
  --dark-text-colour: #1c1b20;
  --accent-1: #e98074;
  --accent-2: #e85a4f;
  --accent-3: #383542;
  --accent-4: #8e8d8a;
  --main-background-two: #f3f2ec;
}

.navbar,
.navbar-menu,
.navbar-item,
.navbar-link,
.navbar-dropdown,
#menu-hamburger {
  background-color: var(--accent-3) !important;
  color: var(--main-background-two) !important;
  font-family: "Raleway", sans-serif !important;
  font-size: 0.97em !important;
  outline: 0;
  border: none;
  /*opacity: 0.95;*/ /* TODO: Add this after scroll spy is added! */
}

.navbar-item:hover {
  background-color: var(--accent-1) !important;
  color: var(--dark-text-colour) !important;
}

.navbar-item:active,
.navbar-item:focus,
.on-navbar-item {
  outline: 0;
  border: none;
  -moz-outline-style: none;
  outline-style: none;
}

.navbar-brand > .navbar-item {
  font-size: 1.1em !important;
}

article {
  width: 80%;
  margin: 0 auto;
}

@media screen and (max-width: 1023px) {
  .navbar-item:hover {
    background-color: var(--accent-1) !important;
    color: var(--main-background) !important;
  }

  div > .navbar-item:hover {
    background-color: var(--accent-1) !important;
  }

  .navbar,
  .navbar-menu,
  .navbar-item,
  .navbar-link,
  .navbar-dropdown,
  #menu-hamburger {
    font-size: 0.975em !important;
  }

  .navbar-brand > .navbar-item {
    font-size: 1.1em !important;
  }

  article {
    width: 100%;
    margin: 0 auto;
  }
}

hr.is-divider {
  background-color: var(--accent-1);
  display: block;
  height: 2px;
  border: 0;
  margin: 2em auto;
  margin-top: 1em;
  padding: 0;
}

hr.is-thin-divider {
  background-color: var(--accent-1);
  display: block;
  height: 1px;
  border: 0;
  margin: 1.5em auto;
  margin-top: 0.5em;
  padding: 0;
  width: 95%;
}

.title {
  font-size: 2.75em !important;
  color: var(--dark-text-colour) !important;
  font-family: "Quicksand", sans-serif !important;
  font-weight: 300;
}

.subtitle {
  font-size: 2em !important;
  color: var(--dark-text-colour) !important;
  font-family: "Raleway", sans-serif !important;
}

h3 {
  font-size: 1.05em !important;
  color: var(--dark-text-colour) !important;
  font-family: "Raleway", sans-serif !important;
  line-height: 160%;
}

a {
  color: #60afe7;
  text-decoration: underline;
}

a:visited {
  color: #800080;
}

a:hover {
  color: var(--accent-3);
}

.is-divider {
  width: 3em;
}
</style>