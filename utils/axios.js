import axios from 'axios';
// Client axios global
export const client = axios.create({
    baseURL: process.env.NUXT_PUBLIC_API_URL
  })
  