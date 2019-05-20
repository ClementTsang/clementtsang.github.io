<template>
	<div id="app">
		<b-navbar toggleable="md" fixed="top" type="light" variant="light" style="background-color: #f2f4f8 !important;">
			<b-navbar-brand to="/#home" class="branding" style="font-size: 175%; padding-left: 1rem;">Clement Tsang</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse" style="padding-left: 1rem; padding-right: 1rem; border: none; " ></b-navbar-toggle>
			
			<b-collapse id="nav-collapse" is-nav style="margin-top: 0em">
				<b-navbar-nav class="ml-auto" style="padding-left: 1rem">

					<b-nav-item class="nav-label" to="/#about" replace>About</b-nav-item>
					<b-nav-item class="nav-label" to="/#skills" replace>Experience</b-nav-item>
					<b-nav-item class="nav-label" to="/#projects" replace>Projects</b-nav-item>

				</b-navbar-nav>
			</b-collapse>
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

	.nav-label{
		color: #2E3440 !important;
	}
	

	.nav-label:hover {
		border-radius: 5px;
		background-color: #ECEFF4 !important;
	}

	.icon {
		display: none;
	}

</style>
