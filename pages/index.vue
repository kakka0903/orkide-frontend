<template>
  <main class="flex flex-col flex-grow">
    <div class="h-56">
      <NuxtLink to="/">
        <h1 v-show="true" class="mt-2 font-bold leading-none text-7xl text-primary">
          orkidé<br>.world
        </h1>
      </NuxtLink>
    </div>

    <div v-if="polls !== null && polls !== undefined" class="flex justify-center my-10 h-28">
      <Transition
        enter-active-class="transition duration-500 ease-out delay-150 transform-gpu"
        enter-from-class="translate-x-10 opacity-0"
      >
        <PollSequence v-show="appearShow" class="text-xl h-28" :polls="polls" netlify name="landing-page-form" />
      </Transition>
    </div>

    <div class="flex items-end justify-end flex-grow">
      <Transition
        enter-active-class="transition duration-500 ease-out delay-300 transform-gpu"
        enter-from-class="translate-x-10 opacity-0"
        enter-to-class="scale-100 translate-x-0 opacity-100"
      >
        <div v-show="appearShow" class="flex items-end text-2xl font-bold gap-x-4 text-primary">
          <NuxtLink to="/kontakt/">
            <BoxButton :width="3">
              social
            </BoxButton>
          </NuxtLink>
          <NuxtLink to="/prosjekter/">
            <BoxButton :width="3" type="primary">
              projects~
            </BoxButton>
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </main>
</template>

<script async setup>
const { appearShow } = useAppearShow()

const doCacheCMSData = useRuntimeConfig().public.cacheCMSData
const { getUserPolls } = useCMSData(doCacheCMSData)
const { data: polls } = await getUserPolls()

useHead({
  title: 'Orkidé'
})
</script>
