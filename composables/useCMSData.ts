import { getOnlyAttributes, getOnlyAttributesMany } from '~/api/strapiUtils'
import type { ProjectsPage } from '~/types/Projects'
import type { TicketsSlideshow } from '~/types/TicketSlideshow'

export const useCMSData = (doCacheData: boolean) => {
  // TODO: more abstractions can be created here to reduce code duplication
  // TODO: add existing types
  // TODO: add types for all models

  const strapi = useStrapi()
  const setCacheFn = (doCacheData) ? () => true : () => false

  const buildAsyncOptions = transformDataFn => ({
    transform: transformDataFn,
    server: setCacheFn()
  })

  const getVideoProjects = () => {
    const getVideoProjects = () => strapi.find('projects', {
      sort: ['release_date:desc'],
      populate: ['slideshow']
    })
    const normalizeVideoProjects = res => res.data.map(project => project.attributes)
    return useAsyncData(getVideoProjects, buildAsyncOptions(normalizeVideoProjects))
  }

  const getVideoProjectBySlug = (slug: string) => {
    const getVideoProjects = () => strapi.find('projects', {
      filters: { slug },
      populate: {
        slideshow: {
          populate: {
            intro_slide: true,
            image_slides: {
              populate: ['image']
            },
            video_slides: true
          }
        }
      }
    })
    const normalize = (res) => {
      res = res.data[0].attributes
      res.slideshow = res.slideshow.data.attributes
      return res
    }
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

  const getCoverProjects = () => {
    const strapiOptions = {
      populate: {
        slides: { populate: 'image' },
        links: true
      }
    }
    const getProjects = () => strapi.find('albumcover-projects', strapiOptions)
    const normalize = res => getOnlyAttributesMany(res)
    return useAsyncData(getProjects, buildAsyncOptions(normalize))
  }

  const getCoverProjectById = (id: number) => {
    const getProject = () => strapi.findOne('albumcover-projects', id, {
      populate: {
        slides: { populate: 'image' },
        links: true
      }
    })
    return useAsyncData(getProject, buildAsyncOptions(getOnlyAttributes))
  }

  const getContactData = () => {
    return useAsyncData(() => strapi.find('kontakt'), {
      transform: getOnlyAttributes,
      server: setCacheFn()
    })
  }

  const usePageData = (routeName: string) => {
    const strapiReq = () => strapi.find('pages', {
      populate: ['page_heading', 'page_intro'],
      filters: {
        path: routeName
      }
    })
    return useAsyncData(strapiReq, {
      transform: res => res.data[0].attributes,
      server: setCacheFn()
    })
  }

  const getSlideshowById = (id: number) => {
    const strapiReq = () => strapi.findOne<TicketsSlideshow>('slideshows', id, {
      populate: {
        intro_slide: true,
        image_slides: {
          populate: ['image']
        },
        video_slides: true
      }
    })
    return useAsyncData(strapiReq, {
      transform: getOnlyAttributes,
      server: setCacheFn()
    })
  }

  const getTicketProjects = () => {
    const strapiReq = () => strapi.findOne<ProjectsPage>('prosjekter', {
      populate: {
        tickets: {
          populate: {
            slideshow: {
              fields: ['id']
            }
          }
        }
      }
    })
    return useAsyncData(strapiReq, {
      transform: getOnlyAttributes,
      server: setCacheFn()
    })
  }

  const getFolderProjects = () => {
    const strapiOptions = {
      populate: {
        folders: {
          populate: {
            slideshow: {
              fields: ['id']
            }
          }
        }
      }
    }
    return useAsyncData(
      () => strapi.findOne<ProjectsPage>('prosjekter', strapiOptions),
      { transform: getOnlyAttributes }
    )
  }

  return { getVideoProjects, getVideoProjectBySlug, getUserPolls, getBTSClipsByVideoProjectSlug, getCoverProjects, getCoverProjectById, getContactData, usePageData, getSlideshowById, getTicketProjects, getFolderProjects }
}
