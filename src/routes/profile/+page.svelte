<script>
	import { onMount } from 'svelte';
	import { register } from '@teamhanko/hanko-elements';
	import { PUBLIC_HANKO_API_URL } from '$env/static/public';

	const hankoApi = PUBLIC_HANKO_API_URL;

	onMount(async () => {
		// register the component
		// see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script
		register(hankoApi).catch((error) => {
			// handle error
		});
	});
</script>

<hanko-profile />
