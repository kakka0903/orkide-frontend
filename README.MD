# orkide-frontend

A front-end application written for [Orkidé](https://www.instagram.com/orkide.world/) as a freelance project by *Kasper Johannes Hopen Alfarnes*.

## Tech Stack

The application is built on [Nuxt3](https://github.com/nuxt/framework) ([vuejs](https://github.com/vuejs/core) metaframework), styled with [Tailwind](https://tailwindcss.com/) and is hosted on [Netlify](https://www.netlify.com/). Application data is loaded from a [Strapi](https://strapi.io/) instance (open source self-hosted cms), and the data is loaded at build time.

> At the time of writing the project is live at https://orkide.world. Check it out!

## Installation

 1. clone the repo
 2. get [nodejs and npm](https://nodejs.org/en/)
 3. run `npm install` at project root

## Build/Run

To build and run the application a `.env` file needs to be created setting `STRAPI_URL` to the url of a (including transport protocol) strapi instance.

> At the time of writing the live strapi instance is available at `https://strapi.kakk.dev`.

Once the `.env` file has been create the application can be build with `npm run generate` and then previewed with `npm run preview`.

## Deployment

Strapi should be configured to call a rebuild webhook at netlify when application data is changed.
