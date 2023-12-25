declare interface ImageAttributes {
  url: string
  alternativeText: string
  hash: string
  ext: string
}
declare type Image = Strapi4ResponseSingle<ImageAttributes>;

export type { Image }
