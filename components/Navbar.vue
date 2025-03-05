<template>
  <nav class="absolute top-0 w-full flex text-center flex-row justify-start py-4 px-6 items-baseline"
      style="font-family: Nunito,serif">
    <div class="flex flex-row justify-start mt-3 w-full">
      <NuxtLink class="text-sm no-underline text-grey hover:text-blue-dark ml-3" to="/">About</NuxtLink>
      <NuxtLink class="text-sm no-underline text-grey hover:text-blue-dark ml-3" to="/blog">Blogs</NuxtLink>
    </div>
  </nav>
</template>
<style>
   .nuxt-link-exact-active {
    text-decoration: underline;
     text-underline-offset: 4px;
  }
   .page-enter-active,
   .page-leave-active {
     transition-property: opacity;
     transition-timing-function: ease-in-out;
     transition-duration: 300ms;
   }
   .page-enter,
   .page-leave-to {
     opacity: 0;
   }
</style>
<script>

export default {
  components: {

  },

  data() {
    return {

    }
  }
}
</script>
