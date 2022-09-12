import { defineNuxtConfig } from 'nuxt'
import axios from 'axios'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    mode: 'universal',
    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi'],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337'
    },
    hooks: {
      async 'nitro:config' (nitroConfig) {
        if (nitroConfig.dev) { return }
        const res = await axios.get(process.env.STRAPI_URL+'/api/projects?populate[0]=bts_clips');
        res.data.data.forEach((project) => {
            const slug = project.attributes.slug;
            nitroConfig.prerender.routes.push('/prosjekter/'+slug)
            nitroConfig.prerender.routes.push('/bts/'+slug)
            const clips = project.attributes.bts_clips.data;
            clips.forEach((clip) => {
                nitroConfig.prerender.routes.push('/bts/'+slug+'/'+clips.indexOf(clip))
            })
        })
      }
    }
})
