export const useCMSData = (doCacheData: boolean) => {
  const strapi = useStrapi()
  const setCacheFn = (doCacheData) ? () => true : () => false

  const buildAsyncOptions = transformDataFn => ({
    transform: transformDataFn,
    server: setCacheFn()
  })

  const getVideoProjects = () => {
    const getVideoProjects = () => strapi.find('projects', {
      sort: ['release_date:desc']
    })
    const normalizeVideoProjects = res => res.data.map(project => project.attributes)
    return useAsyncData(getVideoProjects, buildAsyncOptions(normalizeVideoProjects))
  }

  const getVideoProjectBySlug = (slug: string) => {
    const getVideoProjects = () => strapi.find('projects', {
      filters: { slug }
    })
    const normalize = res => res.data[0].attributes
    return useAsyncData(getVideoProjects, buildAsyncOptions(normalize))
  }

  return { getVideoProjects, getVideoProjectBySlug }
}
