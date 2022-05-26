<template>
  <div class="flex items-center">
    <div class="w-490px flex-grow-0">
      <div
          id="photo"
          class="bg-center bg-white bg-cover bg-no-repeat pb-150 shadow"
      ></div>
    </div>
    <div v-mouse-move class="flex-1 pl-8 pt-16">
      <h1
          class="text-black font-bold text-5xl leading-none mb-5" style="font-family: Satisfy,serif"
      >
        {{ firstName }}
        <div class="relative">
          <div
              class="absolute w-120px right-100 top-50 border-blue border-b-5 line-transform"
          ></div>
          <span class="text-blue">{{ lastName }}</span>
        </div>
      </h1>
      <h2 class="mb-2">{{ position }}</h2>
      <div class="w-4/5">
        <p class="text-black text-sm">
          {{ aboutMe }}
        </p>
      </div>
      <div class="mt-4">
        <div class="mb-4">
          <div class="text-lg mb-4">Academic & Professional Interests</div>
          <span v-for="interest in academicInterest" class="shadow-md p-2 m-2 rounded-bl-xl">
            {{ interest }}
          </span>
        </div>

        <div>
          <div class="text-lg mb-4">Other Interests</div>
          <span v-for="interest in otherInterest" class="shadow-md p-2 m-2 rounded-bl-xl">
            {{ interest }}
          </span>
        </div>
      </div>


      <div class="cv-button mt-16">
          <span class="flex ">
             <a class="uppercase text-sm rounded text-white bg-blue text-left font-bold px-4 py-2 block hover:border"
                href="/Md%20Mosharaf%20Hossan.pdf">Download my CV</a>
          </span>

      </div>


    </div>
  </div>
</template>

<script>
import {getAge} from '~/utils/functions'
import {mouseMove} from '~/utils/directives'
import {aboutMe, birthday, firstName, lastName, position} from '~/docs/profile.json'

export default {
  directives: {
    mouseMove
  },

  data() {
    return {
      firstName,
      lastName,
      position,
      aboutMe,
      academicInterest: ['Distributed Systems', 'Computer Vision', 'Artificial Intelligence'],
      otherInterest: ['Psychology', 'Bioinformatics', 'Badminton', 'Table Tennis', 'Formula 1'],
      publicPath: process.env.BASE_URL
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

.interest {
  background: #14A26B;
}

#photo {
  background-image: url('~assets/images/mosharaf3.jpeg');
}
</style>
