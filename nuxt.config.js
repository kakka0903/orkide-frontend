import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    mode: 'universal',
    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi'],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337'
    },
})
