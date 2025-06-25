<script lang="ts">
	import House from '@lucide/svelte/icons/house';
	import Hammer from '@lucide/svelte/icons/hammer';
	import Rabbit from '@lucide/svelte/icons/rabbit';
	import Lightbulb from '@lucide/svelte/icons/lightbulb';
	import HardDrive from '@lucide/svelte/icons/hard-drive';
	import ChartNoAxesCombined from '@lucide/svelte/icons/chart-no-axes-combined';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import type { ComponentProps } from 'svelte';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import Button from '$lib/components/ui/button/button.svelte';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
	const navMain = [
		{
			title: 'Product',
			open: true,
			icon: Lightbulb,
			items: [
				{
					title: 'Goals',
					url: '/info/product/goals'
				},
				{
					title: 'Support the Project',
					url: '/info/product/support'
				},
				{
					title: 'About me',
					url: '/info/product/about-me'
				},
				{
					title: 'Board',
					url: '/info/product/board'
				}
			]
		},
		{
			title: 'Development',
			icon: Hammer,
			open: true,
			items: [
				{
					title: 'Architecture',
					url: '/info/development/architecture'
				},
				{
					title: 'Dev Stack',
					url: '/info/development/dev-stack'
				},
				{
					title: 'Testing',
					url: '/info/development/testing'
				}
			]
		},
		{
			title: 'Infrastructure',
			open: true,
			icon: HardDrive,
			items: [
				{
					title: 'Sever (Netlify)',
					url: '/info/infrastructure/server'
				},
				{
					title: 'Backend (Supabase)',
					url: '/info/infrastructure/backend'
				}
			]
		},

		{
			title: 'Releases',
			icon: Rabbit,
			open: false,
			items: [
				{
					title: '0.1',
					url: '/info/releases/0.1'
				}
			]
		}
	];
</script>

<Sidebar.Root bind:ref {...restProps}>
	<Sidebar.Header></Sidebar.Header>
	<Sidebar.Content class="gap-0">
		<a href="/">
			<div class="flex justify-center gap-4">
				<House></House>
				<div>Home</div>
			</div>
		</a>
		<!-- We create a collapsible SidebarGroup for each parent. -->
		{#each navMain as item (item.title)}
			<Collapsible.Root title={item.title} open={item.open} class="group/collapsible">
				<Sidebar.Group>
					<Sidebar.GroupLabel
						class="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
					>
						{#snippet child({ props })}
							<Collapsible.Trigger {...props}>
								<div class="flex gap-4">
									<item.icon />
									{item.title}
								</div>

								<ChevronRightIcon
									class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
								/>
							</Collapsible.Trigger>
						{/snippet}
					</Sidebar.GroupLabel>
					<Collapsible.Content>
						<Sidebar.GroupContent>
							<Sidebar.Menu class="flex flex-col items-center justify-center">
								{#each item.items ?? [] as subItem (subItem.title)}
									<Sidebar.MenuItem>
										<Sidebar.MenuButton>
											{#snippet child({ props })}
												<a href={subItem.url} {...props}>
													<span>{subItem.title}</span>
												</a>
											{/snippet}
										</Sidebar.MenuButton>
									</Sidebar.MenuItem>
								{/each}
							</Sidebar.Menu>
						</Sidebar.GroupContent>
					</Collapsible.Content>
				</Sidebar.Group>
			</Collapsible.Root>
		{/each}
	</Sidebar.Content>
	<Sidebar.Footer>
		<Button>Play the Game</Button>
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
