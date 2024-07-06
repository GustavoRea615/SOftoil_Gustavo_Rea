<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white font-bold text-xl">
        <span>Softoil</span>
      </div>
      <div class="flex items-center space-x-4">
        <span class="text-white">{{ username }}</span>
        <button @click="logout" class="text-white bg-red-500 px-4 py-2 rounded">Cerrar Sesión</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const authStore = useAuthStore()
    const username = authStore.user ? authStore.user.name : ''
    const router = useRouter()
    
    const logout = () => {
      console.log("logout pulsado")
      authStore.logout()
      router.push('/login')
    }

    return { username, logout }
  },
}
</script>

