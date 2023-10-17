import { Page } from '~/types/Pages'

export const usePageIntro = async (pageName: string) => {
  const { findOne } = useStrapi<Page>()
  const strapiReq = () => findOne(pageName, {
    populate: ['page_intro', 'page_heading']
  })
  const { data, error } = await useAsyncData(
    pageName + 'page_intro', strapiReq, {
      transform: (response) => {
        return response.data.attributes
      }
    }
  )

  return { data, error }
}
