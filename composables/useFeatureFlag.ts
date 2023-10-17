export const useFeatureFlags = () => {
  const { public: config } = useRuntimeConfig()
  const createFeatureFlag = (feature: string, isEnabled: boolean) => useState(feature, () => isEnabled)
  const isCoversLive = createFeatureFlag('covers', config.ENABLE_COVERS)
  return { isCoversLive }
}
