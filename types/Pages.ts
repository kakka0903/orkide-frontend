declare interface PageIntro {
  title: string
  subtitle?: string
  text: string
}

declare interface Page {
  page_intro?: PageIntro
}

export type { Page }
