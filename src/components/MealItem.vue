<template>
  <div class="bg-white shadow rounded-xl">
    {{ meals }}
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
      ><img
        :src="meal.strMealThumb"
        alt="meal.strMeal"
        class="rounded-t-xl h-48 w-full object-cover"
    /></router-link>

    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum
        beatae
      </p>

      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube" />
        <!-- <router-link
          to="/"
          class="px-3 py-2 rounded border-2 border-purple-600 bg-purple-500 hover:bg-purple-600 text-white transition-colors"
          >View</router-link
        > -->
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const { meal } = defineProps({
  meal: {
    reuired: true,
    type: Object
  }
});
</script>
