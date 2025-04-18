<template>
  <div class="mb-8 max-w-2xl mx-auto">
    <form @submit.prevent="searchWeather" class="flex flex-col md:flex-row gap-4 animate-slide-up">
      <div class="flex-1 relative group">
        <input 
          v-model="city" 
          type="text" 
          placeholder="Rechercher une ville..." 
          class="w-full p-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                 text-gray-700 placeholder-gray-400 transition-all duration-300
                 group-hover:shadow-xl group-hover:bg-white/90"
          required
        >
        <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 group-hover:scale-110">
          
        </span>
      </div>
      <button 
        type="submit" 
        class="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl
               shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 
               font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
               hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 
               focus:ring-purple-500 focus:ring-offset-2"
        :disabled="loading"
      >
        <span v-if="loading" class="flex items-center gap-2">
          <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Recherche en cours...
        </span>
        <span v-else class="flex items-center gap-2">
          <span>Rechercher</span>
          <span class="transform transition-transform group-hover:translate-x-1">→</span>
        </span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useWeatherStore } from '../stores/weather'

const store = useWeatherStore()
const city = ref('')

const searchWeather = async () => {
  if (city.value.trim()) {
    await store.fetchWeather(city.value)
  }
}

const loading = computed(() => store.loading)
</script>

<style scoped>
.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

input::placeholder {
  transition: color 0.3s ease;
}

input:focus::placeholder {
  color: transparent;
}

.group:hover input::placeholder {
  color: #6B7280;
}
</style> 