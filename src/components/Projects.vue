<template>
  <div id="projects" class="columns is-marginless is-centered page-item">
		<div class="column is-10 is-8-desktop">
			<article>
				<p class="title has-text-centered">Projects</p>
				<hr class="is-divider"/>
				<ProjectInfo
					projectImage=""
					projectLink="https://github.com/ClementTsang/RustNAO"
					projectSite="GitHub"
					projectTitle="RustNAO"
					projectDescription="A Rust wrapper for the SauceNAO API, a popular reverse image search engine."
					style="padding-bottom: 2rem;"
				/>
				<ProjectInfo
					projectImage=""
					projectLink="https://github.com/ClementTsang/RustNAO"
					projectSite="GitHub"
					projectTitle="RustCC"
					projectDescription="A simple C compiler, written from scratch in Rust."
					style="padding-bottom: 2rem;"
				/>
				<ProjectInfo
					projectImage=""
					projectLink="https://github.com/ClementTsang/brainfC"
					projectSite="GitHub"
					projectTitle="brainfC"
					projectDescription="A Brainf**k to C transpiler."
					style="padding-bottom: 2rem;"
				/>
			</article>
		</div>
  </div>
</template>

<script>
import ProjectInfo from "@/components/ProjectInfo"
export default {
	name: "Projects",
	components: {
		ProjectInfo
	}
};
</script>

<style scoped>
#projects {
	padding-top: 6rem;
	padding-bottom: 6rem;
	background-color: var(--main-background);
}
</style>
