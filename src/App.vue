<template>
	<div id="app">
		<b-navbar toggleable="md" fixed="top" type="dark" variant="dark" style="height: 6em; background-color: #202124 !important;">
			<b-navbar-brand to="/#home">Clement Tsang</b-navbar-brand>
			<b-navbar-nav class="ml-auto">
				<!--TODO: Drop into hamburger bar at certain width-->
				<b-nav-item to="/#about" replace>About</b-nav-item>
				<b-nav-item to="/#resume" replace>Resume</b-nav-item>
				<b-nav-item to="/#projects" replace>Projects</b-nav-item>
				<b-nav-item to="/#contact" replace>Contact</b-nav-item>
			</b-navbar-nav>
		</b-navbar>
		<router-view/>
	</div>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	methods: {
	},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

</style>
