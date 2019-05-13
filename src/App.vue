<template>
	<div id="app">
		<b-navbar toggleable="md" fixed="top" type="dark" variant="dark" style="height: 6em; background-color: #202124 !important;">
			<b-navbar-brand to="/">Clement Tsang</b-navbar-brand>
			<b-navbar-nav class="ml-auto">
				<!--TODO: Drop into hamburger bar at certain width-->
				<b-nav-item to="/#about">About</b-nav-item>
				<b-nav-item to="/#resume">Resume</b-nav-item>
				<b-nav-item to="/#projects">Projects</b-nav-item>
				<b-nav-item to="/#contact">Contact</b-nav-item>
			</b-navbar-nav>
		</b-navbar>
		<router-view/>
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

</style>
