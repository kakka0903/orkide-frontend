import { Page } from '~/types/Pages'

export const usePageIntro = async (pageName: string) => {
  const { findOne } = useStrapi<Page>()
  const strapiReq = () => findOne(pageName, {
    populate: ['page_intro']
  })
  const { data, error } = await useAsyncData(
    pageName + 'page_intro', strapiReq, {
      transform: (response) => {
        return response.data.attributes.page_intro
      }
    }
  )

  console.log(error, data)

  return { data, error }
}
