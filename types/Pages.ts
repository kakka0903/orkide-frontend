declare interface PageIntro {
  title: string
  subtitle?: string
  text: string
}

declare interface PageHeading {
  title: string
  subtitle: string
}

declare interface Page {
  route: string
  page_heading: PageHeading
  page_intro?: PageIntro
}

export type { Page }
