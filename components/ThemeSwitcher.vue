<template>
  <div class="flex">
    <button class="w-6 h-6 dark:hidden" @click="setTheme('dark')">
      <LightOffIcon class="" />
    </button>
    <button class="hidden w-6 h-6 dark:block" @click="setTheme('light')">
      <LightOnIcon />
    </button>
  </div>
</template>

<script setup lang="ts">
import { LightBulbIcon as LightOffIcon } from '@heroicons/vue/outline'
import { LightBulbIcon as LightOnIcon } from '@heroicons/vue/solid'

const setTheme = (theme: 'light' | 'dark' | 'system') => {
  if (theme === 'system') {
    localStorage.removeItem('theme')
  } else {
    localStorage.theme = theme
  }
  location.reload()
}
</script>
