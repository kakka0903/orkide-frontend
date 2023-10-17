import { Image } from './Strapi'

interface Slide {
  id: number
  image: Image
  description: string
}

declare interface AlbumCoverProject {
  id: number
  title: string
  subtitle: string
  description: string
  slug: string
  albumLink: string
  slides: Slide[]
}

export type { AlbumCoverProject, AlbumCoverProjectSlide }
