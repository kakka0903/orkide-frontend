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

  return { getVideoProjects }
}
