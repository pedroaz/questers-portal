<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { humanDate } from '$lib/utils.js';

	const { data } = $props();
	console.log(data);
</script>

<div class="flex w-full flex-col gap-8 p-16">
	<h1 class="text-5xl">Questers Portal</h1>
	<p>On the side bar you can find all about my game.</p>
	<p>From Development to how to support it</p>
	<div class="flex flex-col gap-2">
		<div class="text-3xl">Users</div>
		<div class="flex flex-wrap justify-center gap-2">
			<Card.Root>
				<Card.Content>
					<p class="text-2xl">Registered Users:</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Content>
					<p class="text-2xl">Games played:</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div class="text-3xl">Latest Deployments</div>
		<div class="flex flex-wrap justify-center gap-2">
			<Card.Root>
				<Card.Content>
					<p class="text-2xl">Game</p>
					<p>
						Time: {humanDate(data.data[0].updated_at)}
					</p>
					<p>
						State: {data.data[0].state}
					</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div class="text-3xl">Testing (Cypress Cloud)</div>
		<div class="flex flex-wrap justify-center gap-2">
			<Card.Root>
				<Card.Content>
					<p class="text-2xl">Game:</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<div class="text-3xl">Security</div>
		<div class="flex flex-wrap justify-center gap-2">
			<Card.Root>
				<Card.Content>
					<p class="text-2xl">Semgrep:</p>
				</Card.Content>
			</Card.Root>
			<Card.Root>
				<Card.Content>
					<p class="text-2xl">Github Security:</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</div>
