<template>
  <div>
    <div v-for="blog in blogs" class="flex items-center justify-center flex-col">
      <blog :blog="blog"></blog>
    </div>
  </div>
</template>

<script>
import {getAge} from '~/utils/functions'
import {mouseMove} from '~/utils/directives'
import Blog from "../components/blog";

export default {
  components: {Blog},
  directives: {
    mouseMove
  },

  data() {
    return {
      blogs: [
        {
          title: 'Type variance in PHP',
          description: 'Type variance allows types to change during inheritance in a way that is compatible with the Liskov substitution principle. This article describes how this works on a technical level.'
        },
        {
          title: 'Early binding in PHP',
          description: 'Early binding allows using a class before its declaration in the same file. However, the precise behavior is rather arcane.'
        },
        {
          title: 'Early binding in PHP',
          description: 'Early binding allows using a class before its declaration in the same file. However, the precise behavior is rather arcane.'
        },
        {
          title: 'Early binding in PHP',
          description: 'Early binding allows using a class before its declaration in the same file. However, the precise behavior is rather arcane.'
        },
        {
          title: 'Early binding in PHP',
          description: 'Early binding allows using a class before its declaration in the same file. However, the precise behavior is rather arcane.'
        },
        {
          title: 'Early binding in PHP',
          description: 'Early binding allows using a class before its declaration in the same file. However, the precise behavior is rather arcane.'
        },
        {
          title: 'Early binding in PHP',
          description: 'Early binding allows using a class before its declaration in the same file. However, the precise behavior is rather arcane.'
        }
      ]
    }
  },

  computed: {
    age() {
      return getAge(birthday)
    }
  }
}
</script>

<style scoped>
.line-transform {
  transform: translate(-5px, -50%);
}

#photo {
  background-image: url('~assets/images/mosharaf.jpg');
}
</style>
