const BASE_URL = 'https://zdcdjzcvlbqeqhuomlkg.supabase.co/functions/v1';

export async function getDeploymentInfo() {
	const url = `${BASE_URL}/get-deployment-status`;
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return response.json();
}
