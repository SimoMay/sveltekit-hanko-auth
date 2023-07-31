import { redirect, type Handle } from '@sveltejs/kit';
import { authenticateUser } from '$lib/server/auth';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = await authenticateUser(event);

	if (!event.locals.auth?.user) {
		if (event.url.pathname.startsWith('/profile')) {
			throw redirect(303, '/login');
		}
	} else {
		if (event.url.pathname.startsWith('/login')) {
			throw redirect(303, '/profile');
		}
	}

	const response = await resolve(event);
	return response;
};
