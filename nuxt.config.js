import { defineNuxtConfig } from 'nuxt'
import Strapi from "strapi-sdk-js"
import { cacheStrapiImage, cacheJson } from './cacheUtils.js'

const strapi = new Strapi({
  url: process.env.STRAPI_URL
})

// Cache images in cover slideshows
async function cacheSlideshows() {
  const data = await strapi.find('albumcover-projects', {
    populate: {
      slides: {
        populate: 'image'
      }
    },
  });

  data.data.forEach(project => {
    project.attributes.slides.forEach(slide => {
      cacheStrapiImage(slide.image.data.attributes)
    })
  });
}

// cache entity data for pages
async function cachePageData() {
  cacheJson('albumcover-projects', await strapi.find('albumcover-projects', {
    populate: {
      slides: {
        populate: 'image'
      }
    }
  }));

  cacheJson('projects', await strapi.find('projects', {
    sort: 'release_date:desc',
    populate: {
      bts_clips: {
        populate: 'thumbnail'
      }
    }
  }));

  cacheJson('polls', await strapi.find('polls'));
  cacheJson('bts-clips', await strapi.find('bts-clips'));
  cacheJson('contact', await strapi.find('kontakt'));
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    mode: 'universal',
    buildModules: ['@nuxtjs/tailwindcss'],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337'
    },
    runtimeConfig: {
      public: {
        STRAPI_URL: process.env.STRAPI_URL || 'http://localhost:1337',
      }
    },
    hooks: {
      async 'nitro:config' (nitroConfig) {
        if (nitroConfig.dev) { return }

        if(!process.env.STRAPI_URL) {
          throw new ReferenceError("Missing 'STRAPI_URL' key.")
        }

        const res = await axios.get(process.env.STRAPI_URL+'/api/projects?populate[0]=bts_clips');
        res.data.data.forEach((project) => {
            const slug = project.attributes.slug;
            nitroConfig.prerender.routes.push('/prosjekter/'+slug+'/')
            nitroConfig.prerender.routes.push('/bts/'+slug+'/')
            const clips = project.attributes.bts_clips.data;
            clips.forEach((clip) => {
                nitroConfig.prerender.routes.push('/bts/'+slug+'/'+clips.indexOf(clip)+'/')
            })
        })
        await cachePageData()
        await cacheSlideshows()
      }
    }
})
