<template>
  <div class="wrapper">
    <Navbar/>
    <div class="flex flex-col md:flex-row w-full mx-auto max-w-7xl">
      <div class="w-full md:w-4/12 mb-4 md:mb-0 md:mt-24 md:pl-8">
        <div
            id="photo"
            class="bg-start bg-white bg-contain bg-no-repeat w-11/12 mx-auto aspect-square md:aspect-auto rounded-lg shadow-sm"
            style="height: 600px"
        ></div>
      </div>
      <div class="flex-1 md:mt-24 md:pr-16">
        <h1
            class="text-black text-base md:text-lg leading-tight mb-6 tracking-wider" style="font-family: Nunito,serif"
        >
          ABOUT ME
          <!--        {{ firstName }}-->
          <!--          <span>{{ lastName }}</span>-->
        </h1>
        <!--      <h2 class="mb-2 text-black text-base md:text-2xl font-mono" style="font-family: Nunito,serif">{{ position }}</h2>-->
        <div>
          <p class="leading-relaxed text-sm md:text-base font-mono font-bold text-blacktext mb-4" style="font-family: Nunito,serif">
            {{ intro }}
          </p>
          <p class="leading-relaxed text-sm md:text-base font-mono text-blacktext mb-4" style="font-family: Nunito,serif">
            {{ aboutMe }}
          </p>
          <p class="leading-relaxed text-sm md:text-base font-mono text-blacktext" style="font-family: Nunito,serif">
            {{ outro }}
          </p>
        </div>
        <div class="mt-6 md:mt-8">
          <div class="mb-6" style="font-family: Nunito,serif">
            <div class="font-mono text-blacktext text-sm md:text-base mb-3">Academic & Professional Interests</div>
            <div class="flex flex-wrap -m-1">
              <span v-for="interest in academicInterest" style="background-color: #0071e3" class="text-white text-xs md:text-sm py-1 px-3 m-1 rounded-xl font-mono">
                {{ interest }}
              </span>
            </div>
          </div>

          <div style="font-family: Nunito,serif">
            <div class="font-mono text-blacktext text-sm md:text-base mb-3">Other Interests</div>
            <div class="flex flex-wrap -m-1">
              <span v-for="interest in otherInterest" style="background-color: #0071e3" class="text-white text-xs md:text-sm py-1 px-3 m-1 rounded-xl font-mono">
                {{ interest }}
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center link-section rounded-2xl mb-4 md:mb-0 p-4 mt-8" style="background-color: #f2f2f2">
          <div class="cv-button mb-4 sm:mb-0" style="font-family: Nunito,serif">
            <span class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a style="color: #06c"
                class="hover:underline"
                href="/Resume%20of%20Md%20Mosharaf%20Hossan.pdf">Academic CV</a>
              <a style="color: #06c"
                class="hover:underline"
                href="/Professional%20Resume%20of%20Md%20Mosharaf%20Hossan.pdf">Professional CV</a>
            </span>
          </div>
          <div>
            <dd>
              <ul class="flex flex-wrap justify-center sm:justify-start gap-4">
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
        <div style="font-family: Nunito,serif" class="mt-8 px-4">
          <div class="font-mono text-blacktext text-base mb-6">Selected Publications</div>
          <div class="flex flex-col space-y-6">
            <div v-for="pub in publications" class="flex items-start">
              <span style="background-color: #0071e3" class="text-white text-xs py-1 px-2 mr-3 rounded-md font-mono flex-shrink-0 w-6 h-6 flex items-center justify-center">[{{ pub.id }}]</span>
              <div class="flex flex-col">
                <div class="flex items-baseline gap-2 mb-1">
                  <span v-if="pub.conference" class="text-xs font-semibold">[{{ pub.conference }}]</span>
                  <a v-if="pub.link" 
                     :href="pub.link" 
                     target="_blank"
                     class="text-sm md:text-base font-semibold hover:text-blue-600 transition-colors">{{ pub.title }}</a>
                  <span v-else class="text-sm md:text-base font-semibold">{{ pub.title }}</span>
                </div>
                <div class="text-sm text-gray-700">
                  <span v-for="(author, index) in pub.authors" :key="index">
                    <span :class="{'font-semibold': author === 'Md Mosharaf Hossan'}">{{ author }}</span>
                    <span v-if="index < pub.authors.length - 1">, </span>
                  </span>
                </div>
                <div class="text-sm text-gray-600 mt-1">
                  <span v-if="pub.venue" class="italic">{{ pub.venue }}</span>
                  <span v-if="pub.pages">, pages {{ pub.pages }}</span>
                  <span v-if="pub.publisher">, {{ pub.publisher }}</span>
                  <span v-if="pub.year">, {{ pub.year }}</span>
                  <span v-if="pub.status" class="text-blue-600">. {{ pub.status }}</span>
                  <span v-if="pub.doi" class="block mt-1">DOI: {{ pub.doi }}</span>
                </div>
              </div>
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
        {
          id: 'C.1',
          conference: 'MSR, 25',
          title: 'Decoding Dependency Risks: A Quantitative Study of Vulnerabilities in the Maven Ecosystem',
          authors: ['Costain Nachuma', 'Md Mosharaf Hossan', 'Asif Kamal Turzo', 'Minhaz F. Zibran'],
          venue: '22nd international conference on mining software repositories (MSR)',
          year: '2025',
          status: 'Accepted for publication',
          link: 'https://2025.msrconf.org/details/msr-2025-mining-challenge/8/Decoding-Dependency-Risks-A-Quantitative-Study-of-Vulnerabilities-in-the-Maven-Ecosy'
        },
        {
          id: 'C.2',
          conference: 'IoTaIS, 24',
          title: 'Adaptive Game Design Using Machine Learning Techniques: A Survey',
          authors: ['Md Mosharaf Hossan', 'Mostafa M. Fouda', 'Farjana Z. Eishita'],
          venue: 'The 2024 IEEE International Conference on Internet of Things and Intelligence System (IoTaIS)',
          year: '2024',
          pages: '144-150',
          publisher: 'IEEE',
          doi: '10.1109/IoTaIS64014.2024.10799330',
          link: 'https://doi.org/10.1109/IoTaIS64014.2024.10799330'
        },
        {
          id: 'C.3',
          conference: 'IETC, 24',
          title: 'Analyzing Differential Impact of Text-Based Instructions in Video Games',
          authors: ['Rifat Ara Tasnim', 'Md Mosharaf Hossan', 'Farjana Z. Eishita'],
          venue: '2024 Intermountain Engineering, Technology and Computing (IETC)',
          year: '2024',
          pages: '227-232',
          publisher: 'IEEE',
          doi: '10.1109/IETC61393.2024.10564249',
          link: 'https://doi.org/10.1109/IETC61393.2024.10564249'
        },
        {
          id: 'C.5',
          conference: 'IETC, 25',
          title: 'Gamified Virtual Reality Exposure Therapy for Mysophobia: Evaluating the Efficacy of a Simulated Sneeze Intervention',
          authors: ['Md Mosharaf Hossan', 'Rifat Ara Tasnim', 'Farjana Z. Eishita'],
          venue: '2025 Intermountain Engineering, Technology and Computing (IETC)',
          year: '2025',
          status: 'Accepted'
        },
        {
          id: 'C.6',
          conference: 'IETC, 25',
          title: 'Analyzing the User Experience of Google Drive Storage Management with Alert Notification',
          authors: ['Aney Rani Paul', 'Md Mosharaf Hossan', 'Farjana Z. Eishita'],
          venue: '2025 Intermountain Engineering, Technology and Computing (IETC)',
          year: '2025',
          status: 'Accepted'
        },
        {
          id: 'C.4',
          title: 'Can You Keep Calm?: Adaptive Gameplay using Heart Rate as a Controller',
          authors: ['Md Mosharaf Hossan', 'Rifat Ara Tasnim', 'Farjana Z. Eishita'],
          year: '2025',
          status: 'Under Review'
        }
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
  background-position: center;
}

@media (max-width: 768px) {
  #photo {
    min-height: 300px;
  }
}
</style>
