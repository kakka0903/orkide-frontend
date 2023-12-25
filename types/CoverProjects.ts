import { Image } from './Strapi'

interface Slide {
  id: number
  image: Image
  description: string
}

interface ArchiveLink {
  label: string,
  url: string,
  icon: string,
}

declare interface AlbumCoverProject {
  id: number
  title: string
  subtitle: string
  description: string
  slug: string
  albumLink: string
  slides: Slide[],
  links: ArchiveLink[]
}

export type { AlbumCoverProject, AlbumCoverProjectSlide }
