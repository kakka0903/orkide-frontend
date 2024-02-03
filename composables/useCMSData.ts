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

  const getBTSClipsByVideoProjectSlug = (slug: string) => {
    const getVideoProjects = () => strapi.find('projects', {
      filters: { slug },
      populate: {
        bts_clips: {
          populate: ['thumbnail']
        }
      },
      fields: ['name']
    })
    const normalize = res => res.data[0].attributes.bts_clips.data.map(clip => clip.attributes)
    return useAsyncData(getVideoProjects, buildAsyncOptions(normalize))
  }

  const getUserPolls = () => {
    const getPolls = () => strapi.find('polls')
    const normalize = res => res.data.map(poll => poll.attributes)
    return useAsyncData(getPolls, buildAsyncOptions(normalize))
  }

  return { getVideoProjects, getVideoProjectBySlug, getUserPolls, getBTSClipsByVideoProjectSlug }
}
