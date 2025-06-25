<script lang="ts">
	import '../app.css';

	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from './app-sidebar.svelte';

	export const load = async () => {
		if (browser) {
			console.log('Loading PostHog...');
			posthog.init('phc_KSsuPOYsQfYrMaMH0nXb1PSMkgYS0cTKU2hv7dKmGmn', {
				api_host: 'https://eu.i.posthog.com',
				defaults: '2025-05-24',
				person_profiles: 'always'
			});
		}

		return;
	};

	onMount(() => {
		load();
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
