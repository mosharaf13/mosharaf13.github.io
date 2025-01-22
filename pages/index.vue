<template>
  <div class="wrapper">
    <Navbar/>
    <div class="flex flex-col md:flex-row md:justify-center md:mt-32 w-11/12 m-auto">
      <div class="w-1/4">
        <div
            id="photo"
            class="bg-start bg-white bg-contain bg-no-repeat w-full h-full"
        ></div>
      </div>
      <div class="flex-1 pl-6 md:pr-6 mt-4 md:mt-0 text-left">
        <h1
            class="text-black text-sm md:text-sm leading-none mb-5 	" style="font-family: Nunito,serif; letter-spacing: 0.25em"
        >
          ABOUT ME
          <!--        {{ firstName }}-->
          <!--          <span>{{ lastName }}</span>-->
        </h1>
        <!--      <h2 class="mb-2 text-black text-base md:text-2xl font-mono" style="font-family: Nunito,serif">{{ position }}</h2>-->
        <div>
          <p class="leading-7 text-xs md:text-base font-mono font-bold text-blacktext pr-6 mb-4" style="font-family: Nunito,serif">
            {{ intro }}
          </p>
          <p class="leading-7 text-xs md:text-base font-mono text-blacktext pr-6 mb-4" style="font-family: Nunito,serif">
            {{ aboutMe }}
          </p>
          <p class="leading-7 text-xs md:text-base font-mono text-blacktext pr-6" style="font-family: Nunito,serif">
            {{ outro }}
          </p>
        </div>
        <div class="mt-4">
          <div class="mb-4" style="font-family: Nunito,serif">
            <div class="font-mono text-blacktext text-sm" >Academic & Professional Interests</div>
            <div class="flex flex-wrap">
            <span v-for="interest in academicInterest" style="background-color: #0071e3" class="text-white text-xs py-1 px-4 m-2 rounded-xl font-mono">
              {{ interest }}
            </span>
            </div>
          </div>

          <div style="font-family: Nunito,serif">
            <div class="font-mono text-blacktext text-sm">Other Interests</div>
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
                href="/Resume%20of%20Md%20Mosharaf%20Hossan.pdf">Academic CV</a>
              <a style="color: #06c; margin-left: 10px"
                href="/Professional%20Resume%20of%20Md%20Mosharaf%20Hossan.pdf">Professional CV</a>
          </span>
          </div>
          <div>
            <dd>
              <ul class="flex">
                <li v-if="googlescholar" class="mr-4">
                  <a
                      :href="googlescholar"
                      target="https://scholar.google.com/citations?user=lQbXV_8AAAAJ&hl=en&oi=ao"
                      rel="noopener"
                      aria-label="Take a look at my Google Scholar profile"
                  >
                    <google-scholar-icon class="svg-inline"/>
                  </a>
                </li>
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
        <div style="font-family: Nunito,serif" class="m-4">
            <div class="font-mono text-blacktext text-base mb-4">Selected Publications</div>
            <div class="flex flex-col">
              <div v-for="publication in publications" class="mb-4">
                <span style="background-color: #0071e3" class="text-white text-xs py-1 px-2 mr-2 rounded-md font-mono">></span>
                <span class="text-sm">{{ publication }} </span>
              </div>
            </div>
          </div>
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
import GoogleScholarIcon from '~/assets/icons/blue-google-scholar.svg?inline'
import {facebook, github, linkedin, stackoverflow, strava, googlescholar} from '~/docs/social.json'
import { links } from '~/utils/lists'
import Navbar from "../components/Navbar";

export default {
  components: {
    Navbar,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    GithubIcon,
    StackOverflowIcon,
    StravaIcon,
    GoogleScholarIcon
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
      academicInterest: ['Software Engineering', 'Human-Computer Interaction', 'Computer Vision', 'Machine Learning'],
      otherInterest: ['Psychology', 'Bioinformatics', 'Badminton', 'Tennis', 'Table Tennis', 'Football'],

      publications: [
        `[MSR, 25] Costain Nachuma, Md Mosharaf Hossan, Asif Kamal Turzo, Minhaz F. Zibran (2025).
          Decoding Dependency Risks: A Quantitative Study of Vulnerabilities in the Maven Ecosystem.
          Accepted for publication in 22nd international conference on mining software repositories (MSR).`,

          `[IoTaIS, 24] Md Mosharaf Hossan, Mostafa M. Fouda, Farjana Z. Eishita (2024). Adaptive Game
            Design Using Machine Learning Techniques: A Survey. In The 2024 IEEE International
            Conference on Internet of Things and Intelligence System (IoTaIS), pages 144-150, IEEE, 2024,
            Location. DOI: 10.1109/IoTaIS64014.2024.10799330`,

            `[IETC, 24] Rifat Ara Tasnim, Md Mosharaf Hossan, Farjana Z. Eishita (2024). Analyzing
            Differential Impact of Text-Based Instructions in Video Games. In 2024 Intermountain
            Engineering, Technology and Computing (IETC), pages 227-232, IEEE, 2024, Location. DOI:
            10.1109/IETC61393.2024.10564249`,

            `Md Mosharaf Hossan, Rifat Ara Tasnim, Farjana Z. Eishita (2024). Can You Keep Calm?:
              Interactive Gameplay with Heart Rate as the Controller. (Under Review)`
      ],
      publicPath: process.env.BASE_URL,
      facebook,
      linkedin,
      github,
      stackoverflow,
      links,
      strava,
      googlescholar
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
  background-image: url('~assets/images/mosharaf5.jpg');
}
</style>
