# Research Project - JAMstack SPA and REST API Using Vue, Hugo, and Netlify CMS

This repo contains a demo/POC project to see how well a monorepo using Vue, Hugo, and Netlify will work.

The idea is to use Hugo to generate a read-only, git-backed REST API (inspiration was found [here](https://forestry.io/blog/build-a-json-api-with-hugo/)) with data that can be updated via:

1. A Netlify CMS admin UI, or
1. The GitHub API (which effectively makes the API read-write, with a bit of build latency)

The API backend would, for purposes of this demo, be hit by a Vue.js, Nuxt, Axios, Vuetify SPA front-end.

And the hope is to have all of the pieces in this one monorepo deploy via Netlify upon any push to master (see related discussion [here](https://github.com/netlify/netlify-cms/issues/1325)).

So to summarize:

- **App**: Vue.js SPA
- **API**: Hugo-generated read-only (as of latest build) JSON. Being git-backed, the GitHub API effectively makes it read-write
- **Admin**: Netlify CMS (React) front-end for non-technical content editors to add, edit, and delete data 

And given the JAMstack model and Netlify's hosting, this should all be massively scalable, globally distributed via CDN, extremely fast, virtually un-hackable, and totally free to run.

## How This Project Was Initially Created

Here's a running list of the things that I did to kick-off this project after writing the initial README content above.

### Tooling

I already had the tools installed, but if you want to follow along here's what you need.

- This project assumes that you have [installed a recent **Node.js** LTS](https://nodejs.org/en/download/) version
- This project also assumes that you have [installed **Hugo**](https://gohugo.io/getting-started/installing) and that it is globally available to run from the command prompt
- Optionally [install **Yarn**](https://yarnpkg.com/en/docs/install) if you wish to use it instead of NPM
- I use Visual Studio Code ([**VSCode**](https://code.visualstudio.com/download))

### API

For the API piece it's about getting Hugo setup for serving primarily JSON instead of HTML.

<details><summary>Details</summary>

- From the root folder, I ran `hugo new site api`, which created the `api` subfolder
- In the `api` folder
  - Cleaned a bit, removing Hugo stuff we won't need: `archetypes`, `themes`, etc.
  - Tweaked Hugo's `config.toml` to eliminate RSS and sitemap stuff
  - Ran `npm init -y` to create an initial `package.json` so we can use NPM Scripts to control how Hugo does things
  - NPM Scripts configured to support commands:
    - `npm run dev` or `yarn dev` to run a local Hugo development server with live reload
    - `npm run build` or `yarn build` to do a quick, incremental build to `./dist`
    - `npm run build-full` or `yarn build-full` to do a full build, cleaning the `./dist` folder
- Logged-in to [app.netlify.com](https://app.netlify.com) with my GitHub credentials and clicked "New site from Git"
  - Under "Continuous Deployment" selected GitHub and then clicked "Authorize netlify"
  - Under "Create a new site" selected this repo
  - Configured `master` branch to deploy, set "Build command" to `cd api && npm run build` and "Publish directory" to `api/dist`
  - Clicked "Deploy site"
  - Configured subdomain so that site is hosted under Netlify at: https://bobble-api.netlify.com/
  - Please see NOTE in `netlify.toml` config file RE: setup as it is unique to this monorepo approach

</details>

### App

For the frontend App I used [**create-nuxt-app**](https://github.com/nuxt-community/create-nuxt-app).

<details><summary>Details</summary>

- From this project's root folder, I ran `yarn create nuxt-app app` and entered/selected the following options
  - Project name: `slathrop-vue-hugo-spa-app`
  - Project description: Demo Vue Hugo SPA App
  - Use a custom server framework: none
  - Use a custom UI framework: vuetify
  - Choose rendering mode: Single Page App
  - Use axios module: yes
  - Use eslint: yes
  - Choose a package manager: npm
- `create-nuxt-app` initializes git in the `app` folder created. We don't need separate git tracking for this subfolder, so
  - Changed directory into *app*: `cd app`
  - Removed `.git` folder: `rd /s /q .git` (on Windows)
- `create-nuxt-app` has some outdated dependencies listed in the generated `package.json`, so updated to
  - `"nuxt": "^1.4.0"`
  - `"vuetify": "^1.0.18"`
  - `"@nuxtjs/axios": "^5.3.1"`
- Ran `npm install`
- Changed the default app component style from `dark` to `light` in `app\layouts\default.vue` and the default progress bar color in `app\nuxt.config.js`
- Logged-in to [app.netlify.com](https://app.netlify.com) with my GitHub credentials and clicked "New site from Git"
  - Under "Continuous Deployment" selected GitHub and then clicked "Authorize netlify"
  - Under "Create a new site" selected this repo
  - Configured `master` branch to deploy, set "Build command" to `cd app && npm install && npm run generate` and "Publish directory" to `app/dist`
  - Clicked "Deploy site"
  - Configured subdomain so that site is hosted under Netlify at: https://bobble-app.netlify.com/

</details>

### Admin

For the admin UI:

- Netlify CMS
- TODO

## Implementation

TODO
