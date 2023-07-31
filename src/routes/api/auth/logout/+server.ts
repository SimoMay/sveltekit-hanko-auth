import { json } from '@sveltejs/kit';
import { PUBLIC_HANKO_API_URL } from '$env/static/public';

export async function POST({ cookies, request }) {
	const jwt = cookies.get('hanko') || request.headers.get('authorization')?.split(' ')[1];

	if (!jwt) {
		return json({ error: 'Missing token' }, { status: 403 });
	}

	try {
		const response = await fetch(`${PUBLIC_HANKO_API_URL}/logout`, {
			method: 'POST',
			headers: { Authorization: `Bearer ${jwt}` }
		});
		if (response.ok) {
			await cookies.set('hanko', '', { path: '/', maxAge: 0 });
			return json({ success: true });
		}
		return json({ error: 'Invalid token' }, { status: 403 });
	} catch (e) {
		console.log('logout: error', e);
		return json({ error: 'Invalid token' }, { status: 403 });
	}
}
