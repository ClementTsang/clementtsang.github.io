<template>
	<div id="about" style="background-color: #E5E9F0">
		<h3 class="title">Hello!  I'm Clement.</h3>
		<div>
			<p class="text">I'm currently a Computer Science student from the University of Waterloo.<br/>
			My hobbies include reading, listening to music, piano, and working on personal projects.  
			<p class="text">If you wish to contact me, feel free to through <b-link href="mailto:clementjhtsang@gmail.com">my email</b-link>.</p>
			<p class="text">Resume Github LinkedIn</p>	
		</div>
	</div>
</template>

<script>
export default {
	name: "About"
};
</script>

<style scoped>
	h3.title {
		text-align: center;
		color: #2E3440;
		padding-top: 3rem;
		padding-bottom: 1rem;
		font-size: 250%;
	}

	p.text {
		color: #2E3440;
		text-align: center;
		font-size: 110%;
		padding: 0rem 10rem 0rem;
	}
</style>
