<script lang="ts">
	let { children } = $props();
</script>

<div class="container h-screen pt-4">
	{@render children()}
</div>
