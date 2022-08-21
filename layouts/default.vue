<template>
  <div>
        <main>
          <nuxt />
        </main>
  </div>
</template>

<script>
export default {
  computed: {
    expandSidebar() {
      // return this.$route.name
      return ['index', 'contact'].includes(this.$route.name)
    }
  }
}
</script>
