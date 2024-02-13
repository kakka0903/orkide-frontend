export interface SlideComponentDefinition {
  __component: string
  id: number
}

export interface TicketsIntroSlide {
  title: string
  subtitle: string
  description?: string
}

export interface TicketsImageSlide {
  image: object
}

export interface TicketsVideoSlide {
  youtube_id: string
}

export interface TicketsSlideshow {
  slides: SlideComponentDefinition[]
}
