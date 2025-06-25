<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<div class="flex w-full flex-col items-center justify-center gap-4 p-16">
	<h1 class="text-5xl">Questers Portal</h1>
	<Button>Go to Game</Button>
	<p>
		On the side bar you can find all about the Questers game, from architecture, statistics and blog
		posts
	</p>
	<div class="flex flex-wrap gap-2">
		<Card.Root>
			<Card.Content>
				<p class="text-2xl">10 registered user</p>
			</Card.Content>
		</Card.Root>
	</div>
</div>
