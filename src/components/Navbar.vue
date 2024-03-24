<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
    >
      Home
    </router-link>
    <div class="flex items-center justify-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="px-2 h-full hover:bg-purple-100 duration-300 ease-in-out inline-flex items-center transition-colors"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-2 h-full hover:bg-purple-100 duration-300 ease-in-out inline-flex items-center transition-colors"
      >
        Search by Letters
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="px-2 h-full hover:bg-purple-100 duration-300 ease-in-out inline-flex items-center transition-colors"
      >
        Meals by Ingredients
      </router-link>
    </div>
  </header>
</template>
