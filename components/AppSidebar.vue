<template>
  <aside class="w-280px p-10 flex flex-col justify-between bg-blue text-white">
    <header class="mb-5">
      <logo />
    </header>
    <footer>
      <dl class="mb-4">
        <dt class="font-bold">Email</dt>
        <dd>
          <a href="mailto:mosharafkuet@gmail.com">mosharafkuet@gmail.com</a>
        </dd>
      </dl>

      <dl class="mb-4">
        <dt class="font-bold">Phone</dt>
        <dd><a href="tel:+8801753773427">+880 1753 77 34 27</a></dd>
      </dl>

      <dl>
        <dt class="font-bold">Find me on</dt>
        <dd>
          <ul class="flex">

            <li v-if="linkedin" class="mr-4">
              <a
                href=https://www.linkedin.com/in/mosharaf13/
                target="_blank"
                rel="noopener"
                aria-label="Get to know be better via Linkedin"
              >
                <linkedin-icon class="svg-inline" />
              </a>
            </li>

            <li v-if="twitter" class="mr-4">
              <a
                :href="twitter"
                target="_blank"
                rel="noopener"
                aria-label="Follow me on Twitter"
              >
                <twitter-icon class="svg-inline" />
              </a>
            </li>

            <li v-if="github" class="mr-4">
              <a
                :href="github"
                target="https://github.com/mosharaf13"
                rel="noopener"
                aria-label="Discover my projects on Github"
              >
                <github-icon class="svg-inline" />
              </a>
            </li>

            <li v-if="stackoverflow" class="mr-4">
              <a
                :href="stackoverflow"
                target="https://stackoverflow.com/users/6049005/mosharaf"
                rel="noopener"
                aria-label="See how I help people on Stackoverflow"
              >
                <stack-overflow-icon class="svg-inline" />
              </a>
            </li>
          </ul>
        </dd>
      </dl>
    </footer>
  </aside>
</template>

<script>
import FacebookIcon from '~/assets/icons/facebook.svg?inline'
import LinkedinIcon from '~/assets/icons/linkedin.svg?inline'
import TwitterIcon from '~/assets/icons/twitter.svg?inline'
import GithubIcon from '~/assets/icons/github.svg?inline'
import StackOverflowIcon from '~/assets/icons/stackoverflow.svg?inline'

import {
  facebook,
  linkedin,
  twitter,
  github,
  stackoverflow
} from '~/docs/social.json'

export default {
  components: {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    GithubIcon,
    StackOverflowIcon
  },

  data() {
    return {
      facebook,
      linkedin,
      twitter,
      github,
      stackoverflow
    }
  }
}
</script>
