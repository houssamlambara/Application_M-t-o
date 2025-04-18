import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    currentWeather: null,
    loading: false,
    error: null
  }),
  
  actions: {
    async fetchWeather(city) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/weather`, {
          params: {
            q: city,
            appid: import.meta.env.VITE_WEATHER_API_KEY,
            units: 'metric',
            lang: 'fr'
          }
        })
        this.currentWeather = response.data
      } catch (error) {
        this.error = "Erreur lors de la récupération des données météo"
        console.error(error)
      } finally {
        this.loading = false
      }
    }
  }
}) 