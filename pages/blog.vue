<template>
  <div class="wrapper">
    <Navbar />
    <div class="flex flex-col md:flex-row">
      <!-- Left Text Section -->
      <div class="flex flex-col justify-center md:w-1/2 w-full px-4 md:ml-8 mt-12 md:mt-0 text-center md:text-left">
        <div class="sub-title text-sm sm:text-base mb-1 md:mb-4 tracking-widest font-semibold mt-2 md:mt-0" style="font-family: Nunito,serif;">
          MEMOIRE DE
        </div>
        <div class="title text-2xl sm:text-3xl md:text-[2.5rem] leading-tight tracking-widest font-bold mt-2 md:mt-0" style="font-family: Nunito,serif;">
          NEPAL
        </div>
        <div class="description text-sm sm:text-base md:text-lg mt-3 md:mt-4 md:w-2/3 w-full mx-auto md:mx-0 leading-relaxed">
          Experiencing mother nature's awe-inspiring beauty, the hospitality of Nepalese people, and the power of persistence made the trip worthwhile.
        </div>
      </div>

      <!-- Right Image Section -->
      <div class="md:w-1/2 w-full h-64 md:h-screen mt-6 md:mt-0">
        <div
          id="photo"
          class="bg-white bg-cover bg-top bg-no-repeat w-full h-full"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAge } from '~/utils/functions'
import { mouseMove } from '~/utils/directives'
import {
  aboutMe, birthday, firstName, lastName, position, intro, outro
} from '~/docs/profile.json'
import FacebookIcon from '~/assets/icons/facebook.svg?inline'
import LinkedinIcon from '~/assets/icons/linkedin.svg?inline'
import TwitterIcon from '~/assets/icons/twitter.svg?inline'
import GithubIcon from '~/assets/icons/github.svg?inline'
import StackOverflowIcon from '~/assets/icons/stackoverflow.svg?inline'
import StravaIcon from '~/assets/icons/strava.svg?inline'
import {
  facebook, github, linkedin, stackoverflow, strava
} from '~/docs/social.json'
import { links } from '~/utils/lists'

export default {
  components: {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    GithubIcon,
    StackOverflowIcon,
    StravaIcon
  },
  directives: {
    mouseMove
  },
  data() {
    return {
      firstName,
      lastName,
      position,
      aboutMe,
      intro,
      outro,
      academicInterest: ['Distributed Systems', 'Computer Vision', 'Artificial Intelligence'],
      otherInterest: ['Psychology', 'Bioinformatics', 'Badminton', 'Table Tennis', 'Football'],
      publicPath: process.env.BASE_URL,
      facebook,
      linkedin,
      github,
      stackoverflow,
      links,
      strava
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
  background-image: url('~assets/images/nepal_headline.jpg');
}
</style>
