<template>
  <div class="relative text-left bg-background">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="absolute inset-0 w-full h-full pointer-events-none">
      <path d="M0,0 100,0 100,100 0,100z" class="fill-none stroke-primary" style="stroke-dasharray: 2, 2; stroke-width: 10px;" vector-effect="non-scaling-stroke" />
    </svg>
    <slot />
  </div>
</template>
