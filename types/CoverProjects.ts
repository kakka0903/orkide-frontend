declare interface ImageLink {
  url: string
  alt: string
}

declare interface AlbumCoverProjectSlide {
  image: ImageLink
  description: string
  spotifyTrackLink: string
}

declare interface AlbumCoverProject {
  title: string
  slug: string
  slides: AlbumCoverProjectSlide[]
}

export type { AlbumCoverProject, AlbumCoverProjectSlide }
