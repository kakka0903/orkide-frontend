import { defineNuxtConfig } from 'nuxt'

import projects from './data/projects';
const dynamicRoutes = []
projects.forEach((project) => {
    dynamicRoutes.push('/bts/'+project.id);
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    mode: 'universal',
    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi'],
    generate: {
        routes: dynamicRoutes
    },
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337'
    },
})
