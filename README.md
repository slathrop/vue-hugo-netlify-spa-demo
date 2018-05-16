# Research Project - JAMstack SPA and REST API Using Vue, Hugo, and Netlify CMS

This repo contains a demo/POC project to see how well a monorepo using Vue, Hugo, and Netlify will work.

The idea is to use Hugo to generate a read-only, git-backed REST API (inspiration was found [here](https://forestry.io/blog/build-a-json-api-with-hugo/)) with data that can be updated via:

1. A Netlify CMS front-end, or
1. The GitHub API (which effectively makes the API read-write, with a bit of build latency)

The API backend would, for purposes of this demo, be hit by a Vue.js, Nuxt, Axios, Vuetify SPA front-end.

And the hope is to have all of the pieces in this one monorepo deploy via Netlify upon any push to master.

So to summarize:

- **App**: Vue.js SPA
- **API**: Hugo-generated read-only (as of latest build) JSON. Being git-backed, the GitHub API effectively makes it read-write
- **Admin**: Netlify CMS (React) front-end for non-technical content editors to add, edit, and delete data 

And given the JAMstack model and Netlify's hosting, this should all be massively scalable, globally distributed via CDN, extremely fast, virtually un-hackable, and totally free to run.

## Progress

Here's a running list of the things I tried as I worked on this POC project.

...Coming Soon
