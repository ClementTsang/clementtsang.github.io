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
          @click='toggleHamburger'
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="mainNavBar" class="navbar-menu is-shadowless is-marginless is-paddingless">
        <div class="navbar-end">
          <router-link @click.native='mobileCloseHamburger' class="navbar-item" to="/#about">About</router-link>
          <router-link @click.native='mobileCloseHamburger' class="navbar-item" to="/#experience">Experience</router-link>
          <router-link @click.native='mobileCloseHamburger' class="navbar-item" to="/#skills">Skills</router-link>
          <router-link @click.native='mobileCloseHamburger' class="navbar-item" to="/#projects">Projects</router-link>
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
		},
		mobileCloseHamburger() {
			const burgerEle = document.getElementById("menu-hamburger");
			if (burgerEle.classList.contains("is-active")) {
				this.toggleHamburger();
			}
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
	--accent-2-dark: #2c353a;
	--accent-3: #848c8e;
	--main-background-two: #f3efe0;
}

.navbar, .navbar-menu, .navbar-item, .navbar-link, .navbar-dropdown, #menu-hamburger {
	background-color: var(--accent-2) !important;
	color: var(--main-background) !important;
	font-family: "Karla", sans-serif !important;
	font-size: 1.3rem !important;
}

.navbar-item:hover {
	background-color: var(--accent-1) !important;
	color: var(--main-background) !important;
}

@media screen and (min-width: 1024px) {
	.navbar {
		height: 4rem;
	}
}

@media screen and (max-width: 1023px) {
	.navbar-item:hover {
		background-color: var(--accent-2-dark) !important;
		color: var(--main-background) !important;
	}

	div>.navbar-item:hover {
		background-color: var(--accent-2) !important;
	}

	.navbar, .navbar-menu, .navbar-item, .navbar-link, .navbar-dropdown, #menu-hamburger {
		font-size: 1.1rem !important;
	}

}

.is-divider {
	background-color: var(--dark-text-colour);
	display: block;
	height: 2px;
	border: 0;
	margin: 1em 0;
	margin-top: 0.5em;
	padding: 0;
}

</style>