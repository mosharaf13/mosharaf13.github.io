<template>
  <div class="flex justify-center md:mt-32 w-11/12 m-auto">

    <div class="flex-1 pl-6 pr-6">
      <h1
          class="text-black text-5xl leading-none mb-5" style="font-family: Satisfy,serif"
      >
        {{ firstName }}
          <span class="text-blue">{{ lastName }}</span>
      </h1>
      <h2 class="mb-2 text-black text-xl font-mono">{{ position }}</h2>
      <div>
        <p class="leading-6 text-sm font-mono text-blacktext pr-6">
          {{ aboutMe }}
        </p>
      </div>
      <div class="mt-4">
        <div class="mb-4">
          <div class="mb-4 font-mono text-blacktext">Academic & Professional Interests</div>
          <span v-for="interest in academicInterest" style="background-color: #0071e3" class="text-white text-xs p-2 m-2 rounded-xl font-mono">
            {{ interest }}
          </span>
        </div>

        <div>
          <div class="mb-4 font-mono text-blacktext">Other Interests</div>
          <span v-for="interest in otherInterest" style="background-color: #0071e3" class="text-white text-xs p-2 m-2 rounded-xl font-mono">
            {{ interest }}
          </span>
        </div>
      </div>

      <div class="flex justify-between link-section rounded-2xl p-4 mt-8" style="background-color: #f2f2f2">
        <div class="cv-button">
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
import {aboutMe, birthday, firstName, lastName, position} from '~/docs/profile.json'
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
      academicInterest: ['Distributed Systems', 'Computer Vision', 'Artificial Intelligence'],
      otherInterest: ['Psychology', 'Bioinformatics', 'Badminton', 'Table Tennis', 'Formula 1'],
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
