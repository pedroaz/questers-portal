<script lang="ts">
	import '../app.css';

	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from './app-sidebar.svelte';

	onMount(() => {
		if (browser) {
			posthog.init('phc_KSsuPOYsQfYrMaMH0nXb1PSMkgYS0cTKU2hv7dKmGmn', {
				api_host: 'https://eu.i.posthog.com',
				defaults: '2025-05-24',
				person_profiles: 'always'
			});
		}
	});

	let { children } = $props();
</script>

<Sidebar.Provider>
	<AppSidebar />
	<main class="">
		<!-- <Sidebar.Trigger /> -->
		<div class="w-full">
			{@render children?.()}
		</div>
	</main>
</Sidebar.Provider>
