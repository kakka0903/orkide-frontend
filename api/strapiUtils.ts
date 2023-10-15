import { Strapi4ResponseSingle, Strapi4ResponseMultiple, Strapi4ResponseMany } from '@nuxtjs/strapi/dist/runtime/types'

/**
 * Get only the attributes of a Strapi API response.
 * @param response Strapi response with a single entity.
 * @returns The attributes of the given entity.
 */
export function getOnlyAttributes<T> (response: Strapi4ResponseSingle<T>) {
  return response.data.attributes
}

/**
 * Get only the attributes of a Strapi API response.
 * @param response Strapi response with a single entity.
 * @returns The attributes of the given entity.
 */
export function getOnlyAttributesMany<T> (response: Strapi4ResponseMany<T>) {
  return response.data.map(x => x.attributes)
}
