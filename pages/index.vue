<template>
  <div class="flex flex-col md:flex-row md:justify-center md:mt-32 w-11/12 m-auto">

    <div class="flex-1 pl-6 md:pr-6 mt-4 md:mt-0 text-left">
      <h1
          class="text-black text-base md:text-base leading-none mb-5 	" style="font-family: Nunito,serif; letter-spacing: 0.25em"
      >
        ABOUT ME
<!--        {{ firstName }}-->
<!--          <span>{{ lastName }}</span>-->
      </h1>
<!--      <h2 class="mb-2 text-black text-base md:text-2xl font-mono" style="font-family: Nunito,serif">{{ position }}</h2>-->
      <div>
        <p class="leading-7 text-xs md:text-lg font-mono font-bold text-blacktext pr-6 mb-4" style="font-family: Nunito,serif">
          {{ intro }}
        </p>
        <p class="leading-7 text-xs md:text-lg font-mono text-blacktext pr-6 mb-4" style="font-family: Nunito,serif">
          {{ aboutMe }}
        </p>
        <p class="leading-7 text-xs md:text-lg font-mono text-blacktext pr-6" style="font-family: Nunito,serif">
          {{ outro }}
        </p>
      </div>
      <div class="mt-4">
        <div class="mb-4" style="font-family: Nunito,serif">
          <div class="font-mono text-blacktext text-base" >Academic & Professional Interests</div>
          <div class="flex flex-wrap">
            <span v-for="interest in academicInterest" style="background-color: #0071e3" class="text-white text-xs py-1 px-4 m-2 rounded-xl font-mono">
              {{ interest }}
            </span>
          </div>
        </div>

        <div style="font-family: Nunito,serif">
          <div class="font-mono text-blacktext text-base">Other Interests</div>
          <div class="flex flex-wrap">
            <span v-for="interest in otherInterest" style="background-color: #0071e3" class="text-white text-xs py-1 px-4 m-2 rounded-xl font-mono">
              {{ interest }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex justify-between link-section rounded-2xl mb-4 md:mb-0 p-4 mt-8" style="background-color: #f2f2f2">
        <div class="cv-button" style="font-family: Nunito,serif">
          <span class="flex">
             <a style="color: #06c"
                href="/Md%20Mosharaf%20Hossan.pdf">Download my CV</a>
          </span>
        </div>
        <div>
          <dd>
            <ul class="flex">

              <li v-if="linkedin" class="mr-4">
                <a
                    href=https://www.linkedin.com/in/mosharaf13/ target="_blank"
                    rel="noopener"
                    aria-label="Get to know be better via Linkedin"
                >
                  <linkedin-icon class="svg-inline"/>
                </a>
              </li>

              <li v-if="twitter" class="mr-4">
                <a
                    :href="twitter"
                    target="_blank"
                    rel="noopener"
                    aria-label="Follow me on Twitter"
                >
                  <twitter-icon class="svg-inline"/>
                </a>
              </li>

              <li v-if="github" class="mr-4">
                <a
                    :href="github"
                    target="https://github.com/mosharaf13"
                    rel="noopener"
                    aria-label="Discover my projects on Github"
                >
                  <github-icon class="svg-inline"/>
                </a>
              </li>

              <li v-if="stackoverflow" class="mr-4">
                <a
                    :href="stackoverflow"
                    target="https://stackoverflow.com/users/6049005/mosharaf"
                    rel="noopener"
                    aria-label="See how I help people on Stackoverflow"
                >
                  <stack-overflow-icon class="svg-inline"/>
                </a>
              </li>

              <li v-if="strava" class="mr-4">
                <a
                    :href="strava"
                    target="https://www.strava.com/athletes/76022349"
                    rel="noopener"
                    aria-label="Take a look at my Strava profile"
                >
                  <strava-icon class="svg-inline"/>
                </a>
              </li>
<!--              <li v-if="facebook" class="mr-4">-->
<!--                <a-->
<!--                    :href="facebook"-->
<!--                    rel="noopener"-->
<!--                    aria-label="Take a look at my Strava profile"-->
<!--                >-->
<!--                  <facebook-icon class="svg-inline"/>-->
<!--                </a>-->
<!--              </li>-->
            </ul>
          </dd>

        </div>
      </div>
    </div>
    <div class="w-2/4">
      <div
          id="photo"
          class="bg-center bg-white bg-contain bg-no-repeat w-full h-full"
      ></div>
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
import {facebook, github, linkedin, stackoverflow, twitter, strava} from '~/docs/social.json'
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
      twitter,
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
  background-image: url('~assets/images/mosharaf4.jpg');
}
</style>
