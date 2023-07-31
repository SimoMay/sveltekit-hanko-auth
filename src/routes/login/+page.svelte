<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { register } from '@teamhanko/hanko-elements';
	import { PUBLIC_HANKO_API_URL } from '$env/static/public';

	const hankoApi = PUBLIC_HANKO_API_URL;

	const redirectAfterLogin = () => {
		// redirect to the home page after successful login
		console.log('redirecting to profile');
		goto('/profile', {
			invalidateAll: true
		});
	};

	onMount(async () => {
		// register the component
		// see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script
		register(hankoApi).catch((error) => {
			// handle error
		});
	});
</script>

<hanko-events on:onAuthFlowCompleted={redirectAfterLogin} />
<hanko-auth />
