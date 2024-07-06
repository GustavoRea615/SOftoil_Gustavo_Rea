import { defineStore } from 'pinia'
import axios from 'axios'

let API_URL = 'http://localhost:3001';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      console.log("fetchUsers en User STORE");
      try {
        const response = await axios.get(API_URL+'/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        this.users = response.data
        return this.users
      } catch (error) {
        console.error('Failed to fetch users:', error)
        throw error
      }
    },
    async deleteUser(id) {
      try {
        await axios.delete(API_URL+`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
      } catch (error) {
        console.error('Failed to delete user:', error)
        throw error
      }
    },
    async updateUser(updatedUserData) {
      try {
        await axios.patch(API_URL+'/users/'+updatedUserData.id, updatedUserData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
      } catch (error) {
        console.error('Failed to update user:', error);
        throw error;
      }
    }
  }
})
