// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: {
				user: {
					id: string;
					email: string;
					updated_at: string;
					created_at: string;
					webauthn_credentials: any[];
				};
				jwt: string;
				jwtPayload: any;
			} | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
