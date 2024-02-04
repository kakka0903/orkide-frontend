import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi', '@nuxt/image'],
  css: ['~/assets/css/custom.css'],
  ssr: true,
  runtimeConfig: {
    public: {
      cacheCMSData: process.env.CACHE_CMS_DATA?.toLowerCase() === 'true'
    }
  },
  image: {
    strapi: {
      baseURL: process.env.STRAPI_URL + '/uploads'
    }
  },
  experimental: {
    payloadExtraction: true
  }
})
