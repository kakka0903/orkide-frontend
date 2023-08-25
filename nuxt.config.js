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

// Cache bts clip thumbnails
async function cacheBTSThumbnails() {
  const data = await strapi.find('bts-clips', {
    populate: 'thumbnail'
  });

  data.data.forEach(clip => {
    if (clip.attributes.thumbnail.data) {
      cacheStrapiImage(clip.attributes.thumbnail.data.attributes);
    }
  })
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
    hooks: {
      async 'nitro:config' (nitroConfig) {
        if (nitroConfig.dev) { return }

        if(!process.env.STRAPI_URL) {
          throw new ReferenceError("Missing 'STRAPI_URL' key.")
        }

        await cachePageData()
        await cacheSlideshows()
        await cacheBTSThumbnails()
      }
    }
})
