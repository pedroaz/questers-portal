<script lang="ts">
	import House from '@lucide/svelte/icons/house';
	import Hammer from '@lucide/svelte/icons/hammer';
	import NotebookText from '@lucide/svelte/icons/notebook-text';
	import Lightbulb from '@lucide/svelte/icons/lightbulb';
	import HardDrive from '@lucide/svelte/icons/hard-drive';
	import ChartNoAxesCombined from '@lucide/svelte/icons/chart-no-axes-combined';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	// Menu items.
	const items = [
		{
			title: 'Home',
			url: '#',
			icon: House
		},
		{
			title: 'Development',
			url: '#',
			icon: Hammer
		},
		{
			title: 'Infrastructure',
			url: '#',
			icon: HardDrive
		},
		{
			title: 'Product',
			url: '#',
			icon: Lightbulb
		},
		{
			title: 'Blog',
			url: '#',
			icon: NotebookText
		},
		{
			title: 'Statistics',
			url: '#',
			icon: ChartNoAxesCombined
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
