# SvelteKit-Hanko-Auth

A SvelteKit starter template integrated with [`Hanko.io Auth`](https://www.hanko.io/).

Hanko.io is great open source alternative if you want to go **passowrdless** with your auth (Passkeys, Passcodes, Security Keys, OAuth, ...).

The template uses both [`<hanko-auth>`] & [`<hanko-profile>`] web componenets for login and profile.

## Getting started

To get started with SvelteKit-Hanko-Auth, first clone the repo:

```bash
git clone https://github.com/SimoMay/sveltekit-hanko-auth.git
```

Then install the dependencies:

```bash
cd sveltekit-hanko-auth
pnpm install
```

Replace the example env file:

```bash
mv .env.example .env
```

## Developing

Start a development server:

```bash
pnpm dev
```

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
