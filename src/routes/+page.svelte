<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<div class="flex w-full flex-col gap-8 p-16">
	<h1 class="text-5xl">Questers Portal</h1>
	<p>On the side bar you can find all about my game.</p>
	<p>From Development to how to support it</p>
	<h1 class="text-3xl">Dashboard (fake data)</h1>
	<div class="flex flex-wrap justify-center gap-2">
		<Card.Root>
			<Card.Content>
				<p class="text-2xl">10 registered user</p>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Content>
				<p class="text-2xl">600 games played</p>
			</Card.Content>
		</Card.Root>
	</div>
</div>
