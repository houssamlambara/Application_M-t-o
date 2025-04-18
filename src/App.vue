<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500">
    <nav class="bg-white/90 backdrop-blur-sm shadow-lg p-4 sticky top-0 z-10">
      <div class="container mx-auto flex items-center justify-between">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Météo App
        </h1>
        <div class="text-sm text-gray-600">
          Votre météo en temps réel
        </div>
      </div>
    </nav>
    <main class="container mx-auto p-4 md:p-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
// Le composant utilise la Composition API de Vue 3
</script>

<style>
/* Import des styles Tailwind */
@import './assets/main.css';

/* Variables personnalisées */
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
}

/* Styles globaux */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 