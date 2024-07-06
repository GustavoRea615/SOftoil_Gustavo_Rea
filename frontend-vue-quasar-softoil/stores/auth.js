import { defineStore } from 'pinia'
import axios from 'axios'

let API_URL = 'http://localhost:3001';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    usersList: null,
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await axios.post(API_URL+'/auth/login', credentials)
        this.token = response.data.access_token;
        this.user = response.data.user;
        localStorage.setItem('token', this.token)
        localStorage.setItem('user', this.user)
        // await this.fetchUser();
      } catch (error) {
        console.error('Error logging in:', error)
        throw new Error('Login failed')
      }
    },
    async registerAccount(dateEntry) {
      try {
        await axios.post(API_URL+'/users', dateEntry)
      } catch (error) {
        console.error('Error created user:', error)
      }
    },
    async fetchUser() {
      if (!this.token) return
      try {
        const response = await axios.get(API_URL+'/users', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        this.usersList = response.data
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    },
    logout() {
      this.user = null
      this.usersList = null
      this.token = ''
      localStorage.removeItem('user')
      localStorage.removeItem('usersList')
      localStorage.removeItem('token')
    }
  }
})
