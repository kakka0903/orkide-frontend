import type { AlbumCoverProject } from '~/types/CoverProjects'
import albumCoverProjects from '~/data/albumCoverProjects.json'
import { useCoverProjectRoutes } from '~/api/coverProjectRequests'
import { getOnlyAttributesMany, getOnlyAttributes } from '~/api/strapiUtils'

export const useManyCoverProjects = async () => {
  const config = useRuntimeConfig()

  if (config.public.cacheCMSData) {
    const data = albumCoverProjects
    return { data }
  } else {
    const { manyCoverProjects } = useCoverProjectRoutes(config.public.strapi.url)
    const projects = await manyCoverProjects()
    const data = getOnlyAttributesMany(projects) as AlbumCoverProject[]
    return { data }
  }
}

export const useSingleCoverProject = async (id: number) => {
  const config = useRuntimeConfig()

  if (config.public.cacheCMSData) {
    const projects: AlbumCoverProject[] = albumCoverProjects
    const data = projects.find(project => project.id === id)
    return { data }
  } else {
    const { singleCoverProject } = useCoverProjectRoutes(config.public.strapi.url)
    const project = await singleCoverProject(id)
    const data = getOnlyAttributes(project) as AlbumCoverProject
    return { data }
  }
}
