import axios from 'axios'
var fs = require('fs');

async function saveCMSData(url, filename) {
  fs.mkdir('./data', {recursive:true}, (err) => { if (err) {throw err}});
  console.log('Caching CMS data in: '+filename+'.json')
  const res = await axios.get(url);
  const data = JSON.stringify(res.data);
  fs.writeFile('data/'+filename+'.json', data, (err) => {if (err) {throw err}});
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

        saveCMSData(process.env.STRAPI_URL+'/api/projects?populate[bts_clips][populate][0]=thumbnail', 'projects');
        saveCMSData(process.env.STRAPI_URL+'/api/polls', 'polls');
        saveCMSData(process.env.STRAPI_URL+'/api/bts-clips', 'bts-clips');

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
      }
    }
})
