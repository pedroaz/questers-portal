import { getDeploymentInfo } from '$lib/supabase-apis';

export async function load() {
	const data = await getDeploymentInfo();
	return {
		data
	};
}
