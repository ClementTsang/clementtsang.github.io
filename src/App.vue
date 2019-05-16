<template>
	<div id="app">
		<b-navbar toggleable="md" fixed="top" type="light" variant="light" style="height: 6em; background-color: #E5E9F0 !important;">
			<b-navbar-brand to="/#home" class="branding" style="font-size: 175%; padding-left: 1rem">Clement Tsang</b-navbar-brand>
			<b-navbar-nav class="ml-auto" style="padding-right: 1rem">
				<!--TODO: Drop into hamburger bar at certain width-->
				<b-nav-item to="/#about" replace>About</b-nav-item>
				<b-nav-item to="/#skills" replace>Skills</b-nav-item>
				<b-nav-item to="/#projects" replace>Projects</b-nav-item>
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

<!--Highlight each link if we are scrolling over it?-->
<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Open+Sans');
	@import url('https://fonts.googleapis.com/css?family=Karla');

	#app {
		font-family: "Karla", Helvetica, Arial, sans-serif;
	}

	.ml-auto {
		font-family: "Karla", Helvetica, Arial, sans-serif !important;
		color: #2E3440 !important;
		font-size: 110%;
	}

</style>
