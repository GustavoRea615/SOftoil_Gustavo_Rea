<!-- <template>
  <div>
      <div v-if="!isAdmin">
        <p class="text-red-500 text-center mt-8">You do not have permission to view this page.</p>
      </div>
      <div v-else>
        <q-table
          :rows="users"
          :columns="columns"
          row-key="id"
          title="Users"
          :rows-per-page-options="[5, 10, 25]"
          @request="onRequest"
        >
          <template v-slot:body-cell-actions="props">
            <q-td align="center" :props="props">
              <q-btn flat round icon="edit" @click="editUser(props.row.id)" />
              <q-btn flat round icon="delete" @click="deleteUser(props.row.id)" />
            </q-td>
          </template>
</q-table>
<template>
          <div class="q-pa-md">
            <q-table
              title="Treats"
              :rows="rows"
              :columns="columns"
              row-key="name"
            />
          </div>
        </template>
</div>
</div>
</template> -->

<!-- <script setup>
  import { ref, onMounted } from 'vue'
  import { useAuthStore } from '~/stores/auth'
  import { useUserStore } from '~/stores/user'
  import { useRouter } from 'vue-router'
  
  const authStore = useAuthStore()
  const userStore = useUserStore()
  const router = useRouter()
  
  const isAdmin = ref(false)
  const users = ref([])
  const columns = [
    { name: 'id', label: 'ID', align: 'left', field: 'id', sortable: true },
    { name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true },
    { name: 'lastname', label: 'Lastname', align: 'left', field: 'lastname', sortable: true },
    { name: 'email', label: 'Email', align: 'left', field: 'email', sortable: true },
    { name: 'role', label: 'Role', align: 'left', field: 'role', sortable: true },
    { name: 'actions', label: 'Actions', align: 'center' }
  ]
  
  const fetchUsers = async () => {
    try {
      users.value = await userStore.fetchUsers();
      console.log("users", users);
      console.log("users.value", users.value);
    } catch (error) {
      console.error('Failed to fetch users:', error)
    }
  }
  
  const editUser = (id) => {
    router.push(`/users/edit/${id}`)
  }
  
  const deleteUser = async (id) => {
    try {
      await userStore.deleteUser(id)
      fetchUsers()
    } catch (error) {
      console.error('Failed to delete user:', error)
    }
  }
  
  const onRequest = ({ pagination, filter }) => {
    // Handle server-side pagination or filtering if necessary
  }
  
  onMounted(() => {
    isAdmin.value = authStore.user.role === 'admin'
    if (isAdmin.value) {
      fetchUsers()
    }
  })
  </script>-->




<template>
  <Navbar />
  <div>
    <div v-if="!isAdmin">
      <p class="text-red-500 text-center mt-8">You do not have permission to view this page.</p>
    </div>
    <div v-else>
      <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Users</h1>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th class="py-2 px-4 border-b border-gray-200">ID</th>
                <th class="py-2 px-4 border-b border-gray-200">Name</th>
                <th class="py-2 px-4 border-b border-gray-200">Email</th>
                <th class="py-2 px-4 border-b border-gray-200">Role</th>
                <th class="py-2 px-4 border-b border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
                <td class="py-2 px-4 border-b border-gray-200">{{ user.id }}</td>
                <td class="py-2 px-4 border-b border-gray-200">{{ user.name }} {{ user.lastname }}</td>
                <td class="py-2 px-4 border-b border-gray-200">{{ user.email }}</td>
                <td class="py-2 px-4 border-b border-gray-200">{{ user.role }}</td>
                <td class="py-2 px-4 border-b border-gray-200">
                  <button @click="editUser(user)" class="text-blue-500 hover:underline">Edit</button>

                  <button @click="deleteUser(user.id)" class="text-red-500 hover:underline ml-2">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <EditUserComponent v-if="showModal" :user="editedUser" @close="closeModal" />

</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'
import EditUserComponent from '~/components/EditUser.vue'

const authStore = useAuthStore()
const userStore = useUserStore()
const router = useRouter()

const isAdmin = ref(false)
const users = ref([])

const showModal = ref(false)
const editedUser = ref({ id: '', name: '', lastname: '', email: '', role: '' })

const fetchUsers = async () => {
  try {
    users.value = await userStore.fetchUsers();
    console.log("users", users);
    console.log("users.value", users.value);
  } catch (error) {
    console.error('Failed to fetch users:', error)
  }
}

const editUser = (user) => {
  editedUser.value = { ...user };
  showModal.value = true;
}

const closeModal = () => {
  editedUser.value = { id: '', name: '', lastname: '', email: '', role: '' }
  showModal.value = false;
  fetchUsers();
}

const deleteUser = async (id) => {
  try {
    await userStore.deleteUser(id)
    fetchUsers()
  } catch (error) {
    console.error('Failed to delete user:', error)
  }
}

onMounted(() => {
  isAdmin.value = authStore.user.role === 'admin'
  if (isAdmin.value) {
    fetchUsers()
  }
})
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>