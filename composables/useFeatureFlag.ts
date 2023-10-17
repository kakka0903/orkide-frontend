export const useFeatureFlags = () => {
  const createFeatureFlag = (feature: string, isEnabled: boolean) => useState(feature, () => isEnabled)
  const isCoversLive = createFeatureFlag('covers', false)
  return { isCoversLive }
}
