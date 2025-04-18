<template>
  <div v-if="currentWeather" class="max-w-4xl mx-auto animate-fade-in">
    <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
      <div class="text-center mb-8 animate-slide-down">
        <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          {{ currentWeather.name }}
        </h2>
        <p class="text-xl text-gray-600 capitalize animate-fade-in">{{ currentWeather.weather[0].description }}</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Température -->
        <div class="weather-card bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-700">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-6xl font-bold mb-2">{{ Math.round(currentWeather.main.temp) }}°C</p>
              <p class="text-lg opacity-90">Température</p>
            </div>
            <div class="text-5xl weather-icon">🌡️</div>
          </div>
        </div>
        
        <!-- Humidité -->
        <div class="weather-card bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-700">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-4xl font-bold mb-2">{{ currentWeather.main.humidity }}%</p>
              <p class="text-lg opacity-90">Humidité</p>
            </div>
            <div class="text-5xl weather-icon">💧</div>
          </div>
        </div>
        
        <!-- Vent -->
        <div class="weather-card bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-700">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-4xl font-bold mb-2">{{ Math.round(currentWeather.wind.speed * 3.6) }} km/h</p>
              <p class="text-lg opacity-90">Vitesse du vent</p>
            </div>
            <div class="text-5xl weather-icon animate-spin-slow">🌪️</div>
          </div>
        </div>
        
        <!-- Pression -->
        <div class="weather-card bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-700">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-4xl font-bold mb-2">{{ currentWeather.main.pressure }} hPa</p>
              <p class="text-lg opacity-90">Pression</p>
            </div>
            <div class="text-5xl weather-icon">📊</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else-if="error" class="max-w-2xl mx-auto mt-8 animate-shake">
    <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md">
      <div class="flex items-center">
        <div class="text-2xl mr-4">⚠️</div>
        <div>
          <p class="font-bold">Erreur</p>
          <p>{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useWeatherStore } from '../stores/weather'

const store = useWeatherStore()
const { currentWeather, error } = storeToRefs(store)
</script>

<style scoped>
.weather-card {
  @apply rounded-xl p-6 text-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer;
  animation: cardAppear 0.5s ease-out forwards;
}

.weather-icon {
  transition: transform 0.3s ease;
}

.weather-card:hover .weather-icon {
  transform: scale(1.2);
}

@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}

.animate-spin-slow {
  animation: spin 3s linear infinite;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-slide-down {
  animation: slideDown 0.5s ease-out forwards;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 