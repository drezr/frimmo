<template>
  <div v-if="loginError">
    {{ loginError }}
  </div>

  <form @submit.prevent="login()">
    <div>
      <label>Email</label>
      <input name="email" id="email" v-model="email" type="email" />
    </div>

    <div>
      <label>Password</label>
      <input name="password" id="password" v-model="password" type="password" />
    </div>

    <button type="submit">Login</button>
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
    loginError.value = 'badPassword'
  } else if (data.value == 'userDoesNotExist') {
    loginError.value = 'userDoesNotExist'
  } else {
    useCookie('userId').value = String(data.value?.userId)
    useCookie('email').value = data.value?.email
    useCookie('token').value = data.value?.token

    navigateTo('/')
  }
}
</script>
