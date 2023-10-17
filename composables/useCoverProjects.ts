import { getOnlyAttributesMany, getOnlyAttributes } from '~/api/strapiUtils'
import { AlbumCoverProject } from '~/types/CoverProjects'

const STRAPI_COLLECTION_NAME = 'albumcover-projects'
const requestOptions = {
  populate: {
    slides: {
      populate: 'image'
    }
  }
}

export const useManyCoverProjects = async () => {
  const { find } = useStrapi<AlbumCoverProject>()

  const strapiReq = () => find(STRAPI_COLLECTION_NAME, requestOptions)
  const { data, error } = await useAsyncData(
    'albumcover-projects', strapiReq, {
      transform: (response) => {
        return getOnlyAttributesMany(response)
      }
    }
  )

  return { data, error }
}

export const useSingleCoverProject = async (id: number) => {
  const { findOne } = useStrapi<AlbumCoverProject>()
  const strapiReq = () => findOne(STRAPI_COLLECTION_NAME, id, requestOptions)

  const { data, error } = await useAsyncData(
    'albumcover-projects-single', strapiReq, {
      transform: getOnlyAttributes
    }
  )

  return { data, error }
}
