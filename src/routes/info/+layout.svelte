<script lang="ts">
	let { children } = $props();
</script>

<div class="prose">
	<div class="p-16">
		{@render children?.()}
	</div>
</div>
