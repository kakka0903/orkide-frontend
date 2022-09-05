<template>
  <head>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>
  <div class="flex flex-col min-h-screen mx-6 font-mono xs:mx-10">
    <Navigation :paths="['/kontakt', '/prosjekter']"/>
    <NuxtPage/>
    <Footer></Footer>
  </div>
</template>

