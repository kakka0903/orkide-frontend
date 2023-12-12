import type { AlbumCoverProject } from '~/types/CoverProjects'
import albumCoverProjectData from '~/data/albumCoverProjects.json'

export const useManyCoverProjects = () => {
  const data = albumCoverProjectData as AlbumCoverProject[]
  return { data }
}

export const useSingleCoverProject = (id: number) => {
  const single = albumCoverProjectData.find(project => project.id === id)
  const data = single as AlbumCoverProject
  return { data }
}
