<script>
	import { goto } from '$app/navigation';

	export let data;

	const logout = async () => {
		const url = `/api/auth/logout`;
		const response = await fetch(url, {
			method: 'POST',
			credentials: 'include'
		});
		if (response.ok) {
			goto('/', {
				invalidateAll: true
			});
		}
	};
</script>

<h1>Welcome to SvelteKit + Hanko.io</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> &
	<a href="https://docs.hanko.io/">docs.hanko.io</a> to read the documentation
</p>

{#if data?.auth?.user}
	<p>Welcome back!</p>
{/if}

<button on:click={() => goto('/')}>Home</button>
{#if data?.auth?.user}
	<button on:click={() => goto('/profile')}>Profile</button>
	<button on:click={logout}>Logout</button>
{:else}
	<button on:click={() => goto('/login')}>Log in</button>
{/if}

<br />
<br />
<br />
<br />

<slot />

{#if data}
	<p>Page data:</p>
	<pre>{JSON.stringify(data, null, 2)}</pre>
{:else}
	<p>There's no data.</p>
{/if}
