export interface TicketProject {
  title: string
  client: string
  slideshow_icon: string
  slideshow: {
    id: number
  }
  isNew: boolean
}

export interface ProjectsPage {
  tickets: TicketProject[]
}