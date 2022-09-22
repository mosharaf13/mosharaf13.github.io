<template>
  <div class="wrapper">
    <Navbar/>
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col justify-center w-1/2 ml-8">
        <div class="sub-title text-lg mb-4 " style="font-family: Nunito,serif; letter-spacing: 0.3em">
          MEMOIRE DE
        </div>
        <div class="title " style="font-family: Nunito,serif; font-size: 2.5rem; letter-spacing: 0.5em">
          NEPAL
        </div>
        <div class="description w-2/3 mt-4">
          Experiencing mother nature's awe-inspiring beauty, the hospitality of Nepalese people, and feeling the power of persistence made the trip worthwhile.
        </div>
      </div>
      <div class="w-1/2 h-screen">
        <div
            id="photo"
            class="bg-white bg-cover bg-top bg-no-repeat w-full h-full"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAge} from '~/utils/functions'
import {mouseMove} from '~/utils/directives'
import {aboutMe, birthday, firstName, lastName, position, intro, outro} from '~/docs/profile.json'
import FacebookIcon from '~/assets/icons/facebook.svg?inline'
import LinkedinIcon from '~/assets/icons/linkedin.svg?inline'
import TwitterIcon from '~/assets/icons/twitter.svg?inline'
import GithubIcon from '~/assets/icons/github.svg?inline'
import StackOverflowIcon from '~/assets/icons/stackoverflow.svg?inline'
import StravaIcon from '~/assets/icons/strava.svg?inline'
import {facebook, github, linkedin, stackoverflow, strava} from '~/docs/social.json'
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
