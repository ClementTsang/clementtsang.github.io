<template>
	<div id="app">
		<b-navbar toggleable="md" type="dark" variant="dark">
			<b-navbar-brand to="/">Clement Tsang</b-navbar-brand>
			<b-navbar-nav>
				<b-nav-item to="/notes">Notes</b-nav-item>
				<b-nav-item target="_blank" href="https://github.com/ClementTsang">Github</b-nav-item>
				<b-nav-item>Resume</b-nav-item>
				<b-nav-item to="/contact">Contact</b-nav-item>
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
