<template>
  <div id="app">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/#home">
          <p>Clement Tsang</p>
        </router-link>

        <a
          id="menu-hamburger"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNavBar"
          v-on:click="toggleHamburger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="mainNavBar" class="navbar-menu">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/#about">About</router-link>
          <router-link class="navbar-item" to="/#experience">Experience</router-link>
          <router-link class="navbar-item" to="/#skills">Skills</router-link>
          <router-link class="navbar-item" to="/#projects">Projects</router-link>
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
	methods: {
		toggleHamburger() {
			const burgerEle = document.getElementById("menu-hamburger");
			const target = burgerEle.dataset.target;
			burgerEle.classList.toggle("is-active");
			document.getElementById(target).classList.toggle("is-active");
		}
	},
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Karla");
:root {
	/*https://coolors.co/fbf5f3-848c8e-bb4430-435058-f3efe0*/
	--main-background:whitesmoke;
	--dark-text-colour: #071013;
	--accent-1: #bb4430;
	--faded-accent-1: #c84630;
	--accent-2: #435058;
	--accent-3: #848c8e;
	--main-background-two: #f3efe0;
}

.navbar {
	height: 4rem;
}

.navbar, .navbar-menu, .navbar-item, .navbar-link, .navbar-dropdown, #menu-hamburger {
	background-color: var(--main-background) !important;
	color: var(--dark-text-colour) !important;
	font-family: "Karla", sans-serif !important;
	font-size: 1.3rem !important;
}

.navbar-item:hover {
	background-color: var(--accent-1) !important;
	color: var(--main-background) !important;
}

</style>