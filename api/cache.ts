import { cacheJson } from '../cacheUtils.js'
import { useCoverProjectRoutes } from './coverProjectRequests'
import { getOnlyAttributesMany } from './strapiUtils'

/**
 * Makes a local copy of CoverProject data.
 * @param strapiUrl URL to strapi instance.
 */
const cacheCoverProjectData = async (strapiUrl: string) => {
  const { manyCoverProjects } = useCoverProjectRoutes(strapiUrl)
  const coverProjectData = await manyCoverProjects()
  cacheJson('albumCoverProjects', getOnlyAttributesMany(coverProjectData))
}

export { cacheCoverProjectData }
