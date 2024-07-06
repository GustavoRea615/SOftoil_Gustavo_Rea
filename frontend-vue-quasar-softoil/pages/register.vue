  <template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 class="text-2xl font-bold text-center">Register Account</h2>
        <form @submit.prevent="register">
          <div class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input v-model="name" type="text" id="name"
                class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required />
            </div>
            <div>
              <label for="lastname" class="block text-sm font-medium text-gray-700">Lastname</label>
              <input v-model="lastname" type="text" id="lastname"
                class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input v-model="email" type="email" id="email"
                class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required />
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input v-model="password" type="password" id="password"
                class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required />
            </div>
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input v-model="confirmPassword" type="password" id="confirmPassword"
                class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required />
            </div>
            <div>
              <label for="role" class="block text-sm font-medium text-gray-700">Role (type admin or user)</label>
              <input v-model="role" type="text" id="role"
                class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required />
            </div>
          </div>
          <div class="flex items-center justify-between mt-6">
            <button type="submit"
              class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Create Account
            </button>
          </div>
        </form>

      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'

const name = ref('')
const lastname = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const role = ref('')
const authStore = useAuthStore();
const router = useRouter()


const register = async () => {
  try {
    let userForm = {
      name: name.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      role: role.value,
    }
    await authStore.registerAccount(userForm)
    router.push('/login')
  } catch (error) {
    console.error('Failed to create user:', error)
    alert('Failed To Created User Acoount: ', error)
  }
}
</script>
