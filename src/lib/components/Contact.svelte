<script lang="ts">
</script>

<div class="body">
	<h2>Contact</h2>
	<hr class="divider-red" />

	<div id="contact-body">
		<p>Interested in getting in touch with me? Feel free to contact me here:</p>
		<div id="contact-list">
			<p><a href="cjhtsang@uwaterloo.ca" target="_blank" rel="noreferrer">cjhtsang@uwaterloo.ca</a></p>
		</div>
	</div>
</div>

<style>
	.body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 90%;

		text-align: center;
	}

	@media screen and (min-width: 1200px) {
		.body {
			width: 70%;
			max-width: 1080px;
		}
	}

	@media screen and (min-width: 1400px) {
		.body {
			width: 60%;
			max-width: 1080px;
		}
	}

	#contact-body {
		margin-top: 16px;
	}

	#contact-list {
		margin-top: 24px;

		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>
