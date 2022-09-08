import { defineNuxtConfig } from 'nuxt'

import projects from './data/projects';
const dynamicRoutes = []
projects.forEach((project) => {
    dynamicRoutes.push('/bts/'+project.name);
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    mode: 'universal',
    buildModules: ['@nuxtjs/tailwindcss'],
    generate: {
        routes: dynamicRoutes
    }
})
