<template>
  <div v-if="loginError">
    {{ loginError }}
  </div>

  <form @submit.prevent="login()">
    <div>
      <label class="block">{{ _local(['common', 'email']) }}</label>
      <input name="email" id="email" v-model="email" type="email" required />
    </div>

    <div>
      <label class="block">{{ _local(['common', 'password']) }}</label>
      <input
        name="password"
        id="password"
        v-model="password"
        type="password"
        required
      />
    </div>

    <button class="block" type="submit">
      {{ _local(['common', 'signIn']) }}
    </button>

    <span class="block cursor-pointer" @click="navigateTo('/register')">
      {{ _local(['common', 'register']) }}
    </span>
  </form>
</template>

<script setup lang="ts">
const email = ref<string>()
const password = ref<string>()
const loginError = ref<string>()

async function login() {
  const { data } = await useFetch('/api/login/tryConnect', {
    params: {
      email: email.value,
      password: password.value,
    },
  })

  if (data.value == 'badPassword') {
    loginError.value = _local(['errors', 'badPassword'])
  } else if (data.value == 'userDoesNotExist') {
    loginError.value = _local(['errors', 'userDoesNotExist'])
  } else {
    useCookie('userId').value = String(data.value?.userId)
    useCookie('email').value = data.value?.email
    useCookie('token').value = data.value?.token

    navigateTo('/')
  }
}
</script>
