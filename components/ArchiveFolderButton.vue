<template>
  <button class="flex items-center gap-5 group">
    <div class="border-b-2 border-dashed w-7 border-primary" />
    <FolderIcon class="w-16 h-16 transition text-primary group-hover:text-secondary-dark group-active:text-secondary group-visited:text-primary-dark" />
    <p class="text-lg font-bold underline transition text-primary group-hover:text-secondary-dark group-active:text-secondary group-visited:text-primary-dark">
      <slot />
    </p>
  </button>
</template>
