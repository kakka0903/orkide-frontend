<template>
  <div class="relative w-14 h-14">
    <button class="absolute inset-0 z-10 flex items-center justify-center w-14 h-14 bg-primary group">
      <ArrowPathIcon class="w-6 h-6 transition text-background group-hover:rotate-45" />
    </button>
    <SectionSwitcherButtonMessage>
      <slot />
    </SectionSwitcherButtonMessage>
  </div>
</template>

<script lang="ts" setup>
import { ArrowPathIcon } from '@heroicons/vue/24/outline'
</script>
