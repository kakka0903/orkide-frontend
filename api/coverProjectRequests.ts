import Strapi from 'strapi-sdk-js'
import type { AlbumCoverProject } from '~/types/CoverProjects'

/**
 * Get AlbumCoverProject API request to functions.
 * @param strapiUrl URL to strapi instance.
 * @returns AlbumCoverProject API request functions.
 */
const useCoverProjectRoutes = (strapiUrl: string) => {
  const ROUTE_NAME = 'albumcover-projects'
  const strapi = new Strapi({
    url: strapiUrl
  })

  const requestOptions = {
    populate: {
      slides: {
        populate: 'image'
      }
    }
  }

  const manyCoverProjects = () => strapi.find<AlbumCoverProject>(ROUTE_NAME, requestOptions)
  const singleCoverProject = (coverId: number) => strapi.findOne<AlbumCoverProject>(ROUTE_NAME, coverId, requestOptions)
  return { manyCoverProjects, singleCoverProject }
}

export { useCoverProjectRoutes }
