export interface TicketProject {
  title: string
  client: string
  slideshow_icon: string
  slideshow: {
    id: number
  }
  isNew: boolean
}

export interface FolderProject {
  title: string
  links: {
    title: string
    url: string
    icon: string
  }[]
  slideshow: {
    id: number
  }
}

export interface ProjectsPage {
  tickets: TicketProject[]
}
