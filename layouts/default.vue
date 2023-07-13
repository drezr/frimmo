<template>
  <div class="bg-gradient-to-b from-slate-200 h-screen min-w-fit">
    <div class="border-slate-300 border-b flex justify-between p-3">
      <button @click="navigateTo('/')">Frimmo</button>

      <div v-if="route.name != 'createAd'">
        <button @click="navigateTo('/createAd')">
          {{ _local(['createAd']) }}
        </button>
      </div>

      <div v-if="isLogged">
        <button @click="logout()">{{ _local(['common', 'signOut']) }}</button>
      </div>

      <div v-else>
        <button @click="navigateTo('/login')">
          {{ _local(['common', 'signIn']) }}
        </button>
      </div>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

let isLogged = ref(useCookie('userId'))

function logout() {
  useCookie('userId').value = null
  useCookie('email').value = null
  useCookie('token').value = null

  navigateTo('/')
}
</script>
