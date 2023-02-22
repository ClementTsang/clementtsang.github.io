<script lang="ts">
</script>

<div class="body">
	<h2>Contact</h2>
	<hr class="divider-red" />

	<div id="contact-body">
		<p>
			Need to get in touch with me for any reason? Feel free to contact me at <a
				href="mailto:cjhtsang@uwaterloo.ca"
				target="_blank"
				rel="noreferrer">cjhtsang@uwaterloo.ca</a
			> and I'll try to get back to you!
		</p>
		<div class="contact-entry">
			<a id="hi-button" href="mailto:cjhtsang@uwaterloo.ca" target="_blank" rel="noreferrer"><p>Say hi</p></a>
		</div>
	</div>
</div>

<style>
	.body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 40rem;

		text-align: center;
		margin-bottom: 5rem;
	}

	#contact-body {
		margin-top: 16px;
	}

	#hi-button {
		margin-top: 42px;

		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 0.9rem;
		padding-bottom: 0.9rem;
		text-decoration: none;
		border-width: 2px;
		border-radius: 5px;
		border-style: solid;
		border-color: var(--red-accent);
		background-color: var(--main-background);
	}

	#hi-button:hover {
		background-color: var(--navbar-hover);
	}

	.contact-entry {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
