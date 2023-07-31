import type { RequestEvent } from '@sveltejs/kit';
import * as jose from 'jose';
import { PUBLIC_HANKO_API_URL } from '$env/static/public';

const JWKS_ENDPOINT = `${PUBLIC_HANKO_API_URL}/.well-known/jwks.json`;

const JWKS = jose.createRemoteJWKSet(new URL(JWKS_ENDPOINT), {
	cooldownDuration: 120000
});

export const authenticateUser = async ({ cookies, request }: RequestEvent) => {
	const jwt = cookies.get('hanko') || request.headers.get('authorization')?.split(' ')[1];
	if (!jwt) {
		return null;
	}

	try {
		const { payload } = await jose.jwtVerify(jwt, JWKS);
		if (payload.sub) {
			const user = await fetch(`${PUBLIC_HANKO_API_URL}/users/${payload.sub}`, {
				headers: { Authorization: `Bearer ${jwt}` }
			}).then((res) => res.json());

			return { user, jwt, jwtPayload: payload };
		}

		return null;
	} catch (e) {
		return null;
	}
};
