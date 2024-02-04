<template>
  <div>
    <button
      class="flex items-center gap-5 group text-primary"
    >
      <div class="border-b-2 border-dashed w-7 border-primary min-w-[28px]" />
      <FolderIcon class="w-16 h-16 min-w-[64px] transition group-hover:text-secondary-dark group-active:text-secondary group-visited:text-primary-dark" />
      <p class="flex-grow text-lg font-bold text-left underline transition text-ellipsis group-hover:text-secondary-dark group-active:text-secondary group-visited:text-primary-dark">
        {{ title }}
      </p>
    </button>
    <div v-if="isSelected" class="mt-3 ml-12" @click.stop>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  isSelected?: boolean
}
defineProps<Props>()
</script>
