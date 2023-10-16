declare interface ImageLink {
  data: {
    attributes: {
      url: string
      alternativeText: string
    }
  }
}

declare interface AlbumCoverProjectSlide {
  id: number
  image: ImageLink
  description: string
  spotifyTrackLink: string
}

declare interface AlbumCoverProject {
  title: string
  slug: string
  description: string
  slides: AlbumCoverProjectSlide[]
}

export type { AlbumCoverProject, AlbumCoverProjectSlide }
