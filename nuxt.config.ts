import Strapi from 'strapi-sdk-js'
import { defineNuxtConfig } from 'nuxt/config'
import { cacheStrapiImage, cacheJson } from './cacheUtils.ts'
import { AlbumCoverProject } from './types/CoverProjects'

const strapi = new Strapi({
  url: process.env.STRAPI_URL
})

async function getPrerenderRoutes () {
  // TODO: import this request from somewhere
  const data = await strapi.find<AlbumCoverProject>('albumcover-projects')
  if (data.data !== null) {
    return data.data.map(project => '/covers/' + project.id)
  } else {
    throw createError('could not load routes to prerender!')
  }
}

// TODO: make payloadExtraction composables for all these cache functions

// Cache images in cover slideshows
async function cacheSlideshows () {
  const data = await strapi.find('albumcover-projects', {
    populate: {
      slides: {
        populate: 'image'
      }
    }
  })

  data.data.forEach((project) => {
    project.attributes.slides.forEach((slide) => {
      cacheStrapiImage(slide.image.data.attributes)
    })
  })
}

// Cache bts clip thumbnails
async function cacheBTSThumbnails () {
  const data = await strapi.find('bts-clips', {
    populate: 'thumbnail'
  })

  data.data.forEach((clip) => {
    if (clip.attributes.thumbnail.data) {
      cacheStrapiImage(clip.attributes.thumbnail.data.attributes)
    }
  })
}

// cache entity data for pages
async function cachePageData () {
  cacheJson('projects', await strapi.find('projects', {
    sort: 'release_date:desc',
    populate: {
      bts_clips: {
        populate: 'thumbnail'
      }
    }
  }))

  cacheJson('polls', await strapi.find('polls'))
  cacheJson('bts-clips', await strapi.find('bts-clips'))
  cacheJson('contact', await strapi.find('kontakt'))
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi'],
  css: ['~/assets/css/custom.css'],
  ssr: true,
  hooks: {
    async 'nitro:config' (nitroConfig) {
      if (nitroConfig.dev) { return }

      if (!process.env.STRAPI_URL) {
        throw new ReferenceError("Missing 'STRAPI_URL' key.")
      }

      await cachePageData()
      await cacheSlideshows()
      await cacheBTSThumbnails()

      nitroConfig?.prerender?.routes?.push(...await getPrerenderRoutes())
    }
  },
  experimental: {
    payloadExtraction: true
  },
  runtimeConfig: {
    public: {
      ENABLE_COVERS: false
    }
  }
})
