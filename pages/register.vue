<template>
  <div v-if="registerError">
    {{ registerError }}
  </div>

  <form @submit.prevent="register()" v-if="!success">
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

    <button type="submit">{{ _local(['common', 'register']) }}</button>
  </form>

  <div v-else>Success</div>
</template>

<script setup lang="ts">
const email = ref<string>()
const password = ref<string>()
const registerError = ref<string>()
const success = ref<boolean>(false)

async function register() {
  const { data } = await useFetch('/api/register/createUser', {
    params: {
      email: email.value,
      password: password.value,
    },
  })

  if (data.value == 'emailExist') {
    registerError.value = _local(['errors', 'emailExist'])
  } else if (data.value == 'success') {
    success.value = true
    console.log('success')
  }
}
</script>
