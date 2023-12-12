import type { Page } from '~/types/Pages'

export const usePageData = async (routeName: string) => {
  const { find } = useStrapi()
  const strapiReq = () => find<Page>('pages', {
    populate: ['page_heading', 'page_intro'],
    filters: {
      path: routeName
    }
  })

  const { data } = await useAsyncData(
    routeName + 'page_intro', strapiReq
  )

  const heading = computed(() => data.value?.data[0].attributes.page_heading)
  const intro = computed(() => data.value?.data[0].attributes.page_intro)

  return { heading, intro }
}
