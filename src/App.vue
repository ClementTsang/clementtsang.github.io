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
          class="navbar-item brand"
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
        <a
          id="dark-by-hamburger"
          class="navbar-item dark-mode-btn"
          @click="toggleDarkMode"
        >
          <font-awesome-icon
            :icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']"
            fixed-width
          />
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
      <a
        id="dark-away-from-hamburger"
        class="navbar-item dark-mode-btn"
        @click="toggleDarkMode"
      >
        <font-awesome-icon
          :icon="isDark ? ['fas', 'sun'] : ['fas', 'moon']"
          fixed-width
        />
      </a>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false
    };
  },
  mounted: () => {},
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
    },
    toggleDarkMode() {
      if (this.isDark) {
        this.isDark = false;
        document.documentElement.removeAttribute("data-theme");
      } else {
        this.isDark = true;
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand|Raleway&display=swap");

:root {
  --main-background: #fefefe;
  --main-background-two: #fafafa;
  --text-colour: #1c1b20;
  --black-text-colour: #1c1b20;
  --red-accent: #ee7067;
  --accent-2: #e85a4f;
  --accent-3: #383542;
  --navbar-hover: rgba(0, 0, 0, 0.05);
  --navbar-click: rgba(0, 0, 0, 0.1);
  --url-hover: #5e81ac;
  --url-visited: #373a82;
  --url-not-visited: #5e81ac;
}

[data-theme="dark"] {
  --main-background: #121212;
  --main-background-two: #393e46;
  --text-colour: #fefefe;
  --navbar-hover: rgba(255, 255, 255, 0.05);
  --navbar-click: rgba(255, 255, 255, 0.1);
}

.navbar,
.navbar-menu,
.navbar-item,
.navbar-link,
.navbar-dropdown,
#menu-hamburger {
  background-color: var(--main-background) !important;
  color: var(--text-colour) !important;
  font-family: "Raleway", sans-serif !important;
  font-size: 0.97em !important;
}

/*.navbar {
  box-shadow: 0px 4px 5px -6px #999;
}*/

.navbar-item {
  background-color: var(--main-background) !important;
  transition: background-color 0.12s ease-in-out;
}

.navbar-item:active,
.navbar-item:focus,
.navbar-item:hover,
.on-navbar-item {
  -moz-outline-style: none;
  outline-style: none;
}

.navbar-item:hover {
  background-color: var(--navbar-hover) !important;
}

.navbar-item:active {
  background-color: var(--navbar-click) !important;
}

.navbar-brand > .brand {
  font-size: 1.15em !important;
}

.dark-mode-btn {
  font-size: 1rem !important;
}

article {
  width: 80%;
  margin: 0 auto;
}

@media screen and (min-width: 1023px) {
  .pseudo-navbar-focus {
    box-shadow: inset 0 -2px 0 0 var(--red-accent);
  }

  #dark-by-hamburger {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  article {
    width: 95%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 1023px) {
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

  .navbar-item:hover {
    background-color: var(--main-background) !important;
  }

  #dark-away-from-hamburger {
    display: none;
  }
}

hr.is-divider {
  background-color: var(--red-accent);
  display: block;
  height: 2px;
  border: 0;
  margin: 2em auto;
  margin-top: 1em;
  padding: 0;
  width: 3em;
}

hr.is-thin-divider {
  background-color: var(--red-accent);
  display: block;
  height: 1px;
  border: 0;
  margin: 1.5em auto;
  margin-top: 0.5em;
  padding: 0;
  width: 3em;
}

.title {
  font-size: 2.75em !important;
  color: var(--text-colour) !important;
  font-family: "Quicksand", sans-serif !important;
  font-weight: 300;
}

.subtitle {
  font-size: 2em !important;
  color: var(--text-colour) !important;
  font-family: "Raleway", sans-serif !important;
}

h3 {
  font-size: 1.05em !important;
  color: var(--text-colour) !important;
  font-family: "Raleway", sans-serif !important;
  line-height: 160%;
}

a {
  color: var(--url-not-visited);
}

a:visited {
  color: var(--url-visited);
}

a:hover {
  color: var(--url-hover);
  text-decoration: underline;
}

.navbar a {
  text-decoration: none;
}
</style>
