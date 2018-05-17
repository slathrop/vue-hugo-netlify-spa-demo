# Research Project - JAMstack SPA and REST API Using Vue, Hugo, and Netlify CMS

This repo contains a demo/POC project to see how well a monorepo using Vue, Hugo, and Netlify will work.

The idea is to use Hugo to generate a read-only, git-backed REST API (inspiration was found [here](https://forestry.io/blog/build-a-json-api-with-hugo/)) with data that can be updated via:

1. A Netlify CMS front-end, or
1. The GitHub API (which effectively makes the API read-write, with a bit of build latency)

The API backend would, for purposes of this demo, be hit by a Vue.js, Nuxt, Axios, Vuetify SPA front-end.

And the hope is to have all of the pieces in this one monorepo deploy via Netlify upon any push to master (see related discussion [here](https://github.com/netlify/netlify-cms/issues/1325)).

So to summarize:

- **App**: Vue.js SPA
- **API**: Hugo-generated read-only (as of latest build) JSON. Being git-backed, the GitHub API effectively makes it read-write
- **Admin**: Netlify CMS (React) front-end for non-technical content editors to add, edit, and delete data 

And given the JAMstack model and Netlify's hosting, this should all be massively scalable, globally distributed via CDN, extremely fast, virtually un-hackable, and totally free to run.

## How This Project Was Created

Here's a running list of the things that I did to kick-off this project after writing the initial README content above.

### Tooling

I already had the tools installed, but if you want to follow along here's what you need.

- This project assumes that you have [installed a recent Node.js LTS](https://nodejs.org/en/download/) version
- This project also assumes that you have [installed Hugo](https://gohugo.io/getting-started/installing) and that it is globally available to run from the command prompt
- Optionally [install Yarn](https://yarnpkg.com/en/docs/install) if you wish to use it instead of NPM

### API

For the API piece:

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
