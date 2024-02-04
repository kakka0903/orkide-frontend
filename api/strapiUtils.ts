import type { Strapi4ResponseSingle, Strapi4ResponseMany, Strapi4ResponseData } from '@nuxtjs/strapi/dist/runtime/types'

interface HasId {
  id: number
}

function getAttributesWithId<T extends HasId> (entity: Strapi4ResponseData<T>) {
  const newEntity = entity.attributes
  newEntity.id = entity.id
  return newEntity
}

/**
 * Get only the attributes of a Strapi API response.
 * @param response Strapi response with a single entity.
 * @returns The attributes of the given entity.
 */
export function getOnlyAttributes<T extends HasId> (response: Strapi4ResponseSingle<T>): T {
  return getAttributesWithId(response.data)
}

/**
 * Get only the attributes of a Strapi API response.
 * @param response Strapi response with a single entity.
 * @returns The attributes of the given entity.
 */
export function getOnlyAttributesMany<T extends HasId> (response: Strapi4ResponseMany<T>): T[] {
  return response.data.map(getAttributesWithId)
}
