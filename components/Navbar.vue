<template>
  <nav class="absolute top-0 w-11/12 m-auto flex flex-col text-center sm:flex-row sm:text-left sm:justify-start py-4 px-6 sm:items-baseline w-full"
       style="font-family: Nunito,serif">
    <div class="flex flex-col md:flex-row md:justify-start md:mt-3 w-11/12 m-auto">
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
