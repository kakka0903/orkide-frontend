declare interface ImageAttributes {
  url: string
  alternativeText: string
}
declare type Image = Strapi4ResponseSingle<ImageAttributes>;

export type { Image }
