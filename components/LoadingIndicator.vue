<template>
  <div class="sk-plane" />
</template>

<style>
/* Config */
:root {
  --sk-size: 40px;
  --sk-color: blue;
}

/* Utility class for centering */
.sk-center { margin: auto; }

/*  Plane
      <div class="sk-plane"></div>
 */
.sk-plane {
  width: var(--sk-size);
  height: var(--sk-size);
  background-color: var(--sk-color);
  animation: sk-plane 1.2s infinite ease-in-out;
}

@keyframes sk-plane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
