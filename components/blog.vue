<template>
  <div class="w-2/5 flex-grow-0 m-4">
    <div class="title underline text-2xl">{{ blog.title }}</div>
    <div class="description">
      {{ blog.description }}
    </div>
  </div>
</template>
<script>
export default {
  props: ['blog'],
  data() {
    return {
    }
  },
  created: function () {

  },
}
</script>
<style lang="scss" scoped>
strong {
  font-size: 32px;
}

small {
  font-size: 18px;
}

</style>
