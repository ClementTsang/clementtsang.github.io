<script lang="ts"></script>

<div class="body">
	<h2 class="title">Experience</h2>
	<hr class="divider-red" />
	<h3>Work</h3>
	<div>
		<div class="card">
			<div class="work-info">
				<div>
					<h4>Datadog</h4>
					<p>August 2022 - Present</p>
					<p>New York, United States</p>
					<p>Datadog</p>
				</div>
			</div>
			<div class="work-description">
				<div>
					<h5>Software Engineer - Metrics</h5>
					<p>Currently work as a software engineer regarding the storage of timeseries data.</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.title {
		text-align: center;
	}

	.body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 7rem 12.5%;
	}

	.card {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		grid-auto-rows: minmax(100px, auto);
	}

	.work-info {
		grid-row: 1;
		grid-column: 1 / span 4;
	}

	.work-description {
		grid-row: 1;
		grid-column: 2 / span 4;
	}
</style>
