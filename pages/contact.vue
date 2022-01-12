<template>
  <div class="flex">
    <div class="w-490px flex-grow-0">
      <form class="bg-black shadow p-10 mb-10" @submit.prevent="">
        <p class="text-white text-xl font-bold mb-10">Send a message</p>
        <form-field
          v-model="form.name"
          label="Your Name"
          type="text"
          class="mb-8"
        />

        <form-field
          v-model="form.email"
          label="Your Email"
          type="email"
          class="mb-8"
        />

        <form-field
          v-model="form.message"
          label="Your Message"
          type="textarea"
          class="mb-8"
        />

        <button
          class="uppercase text-white font-black tracking-widest w-full text-center p-3 rounded-full bg-blue"
        >
          Send
        </button>
      </form>

      <google-maps
        :lat="23.8319"
        :lng="90.4178"
        :zoom="4"
        class="h-300px"
      />
    </div>

    <div class="flex-1 pl-8">
      <div class="max-w-3/5">
        <h1 class="uppercase text-4xl font-black leading-none mb-10">
          Contact me
        </h1>

        <div class="p-6 shadow-lighter mb-8">
          <p class="font-bold mb-2">Email</p>
          <a href="mosharafkuet@gmail.com" class="hover:underline"
            >mosharafkuet@gmail.com</a
          >
        </div>

        <div class="p-6 mb-8">
          <p class="font-bold mb-2">Phone</p>
          <a href="tel:+8801753773427" class="hover:underline"
            >+880 17 53 77 34 27</a
          >
        </div>

        <div class="p-6">
          <p class="font-bold mb-2">Address</p>
          <p>Nikunja 2, Khilkhet, Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>
