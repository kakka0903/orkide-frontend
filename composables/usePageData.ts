import { Page } from '~/types/Pages'

export const usePageData = async (routeName: string) => {
  const { findOne } = useStrapi<Page>()
  const strapiReq = () => findOne('pages', {
    populate: ['page_heading', 'page_intro'],
    filters: {
      path: routeName
    }
  })
  const { data } = await useAsyncData(
    routeName + 'page_intro', strapiReq, {
      transform: (response) => {
        return response.data[0].attributes as Page | undefined
      }
    }
  )

  const heading = data.value?.page_heading
  const intro = data.value?.page_intro

  return { heading, intro }
}
