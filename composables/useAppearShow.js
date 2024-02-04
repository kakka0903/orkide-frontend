/*
    Appear transitions does not seem to work with nuxt.
    This composable is a workaround.

    The appearShow ref is set true on mount, and can be
    used with v-show and a transition to emulate an
    appear transition.
 */
export default function useAppearShow() {
    const appearShow = ref(false);
    onMounted(() => {
        setTimeout(() => {
            appearShow.value = true;
        });
    });
    return { appearShow };
}
