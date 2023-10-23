import fs from 'fs'
import axios from 'axios'

const JSON_CACHE_DIR = './data/'
const IMG_CACHE_DIR = './public/uploads/'

/**
 * Save an object as json in local fs
 * @param filename The name of the json file
 * @param data Object to be saved
 */
function cacheJson (filename, data) {
  console.log('Caching: ' + filename + '.json')
  fs.mkdir(JSON_CACHE_DIR, { recursive: true }, (err) => { if (err) { throw err } })
  const jsonData = JSON.stringify(data)
  fs.writeFile(JSON_CACHE_DIR + filename + '.json', jsonData, (err) => { if (err) { throw err } })
}

/**
 * Save an image to local fs
 * @param {*} filename Image filename
 * @param {*} url URL to pull image from
 */
function cacheImage (filename, url) {
  console.log('Caching: ' + IMG_CACHE_DIR + filename)
  axios({
    method: 'get',
    url,
    responseType: 'stream'
  })
    .then(function (response) {
      fs.mkdir(IMG_CACHE_DIR, { recursive: true }, (err) => { if (err) { throw err } })
      response.data.pipe(fs.createWriteStream(IMG_CACHE_DIR + filename))
    })
}

/**
 * Save a an image from Strapi CMS to local fs.
 * @param {*} imageData Object representing strapi image
 */
function cacheStrapiImage (imageData) {
  const imageURL = process.env.STRAPI_URL + imageData.url
  cacheImage(imageData.hash + imageData.ext, imageURL)
}

export default { cacheImage, cacheJson, cacheStrapiImage }
