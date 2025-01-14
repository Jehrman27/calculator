<script>
	let count = $state(0);
</script>

<button onclick={() => count++}>
	clicks: {count}
</button>

<style>
	button {
		background-color: #ff3d00;
	}
</style>