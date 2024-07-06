<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
    <div class="relative w-auto my-6 mx-auto max-w-lg">
      <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 class="text-xl font-semibold">
            Edit User
          </h3>
          <button @click="closeModal" class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
            <span class="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
          </button>
        </div>
        <div class="relative p-6 flex-auto">
          <form @submit.prevent="updateUser">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                Name
              </label>
              <input v-model="editedUser.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                Lastname
              </label>
              <input v-model="editedUser.lastname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
              </label>
              <input v-model="editedUser.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="role">
                Role
              </label>
              <input v-model="editedUser.role" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name" />
            </div>
            <div class="flex items-center justify-end">
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const { user } = defineProps(['user']);

const editedUser = ref({ ...user });
console.log("editedUser.value", editedUser.value);
console.log("user", user);

const emit = defineEmits(['inFocus', 'submit']) // To use emit event: https://vuejs.org/guide/components/events.html

const closeModal = () => {
  editedUser.value = { id: '', name: '', lastname: '', email: '', role: '' }
  emit('close')
}

const updateUser = async () => {
  console.log('User updated:', editedUser.value)
  try {
    await userStore.updateUser(editedUser.value)
  } catch (error) {
    console.error('Failed to update user:', error)
  }
  closeModal()
}
</script>

<style scoped>
.modal-overlay {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
