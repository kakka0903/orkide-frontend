import { getOnlyAttributesMany } from '~/api/strapiUtils'
import { AlbumCoverProject } from '~/types/CoverProjects'

export const useAlbumCoverProjects = async () => {
  const STRAPI_COLLECTION_NAME = 'albumcover-projects'

  const { find } = useStrapi<AlbumCoverProject[]>()
  const strapiReq = () => find(STRAPI_COLLECTION_NAME, {
    populate: ['slides']
  })

  const { data: resData, error } = await useAsyncData(
    'albumcover-projects', strapiReq, {
      transform: getOnlyAttributesMany
    }
  )

  const data = resData as unknown as AlbumCoverProject[]

  return { data, error }
}
