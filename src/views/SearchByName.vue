<template>
  <div class="p-8">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full text-gray-300"
      v-model="keyword"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow">
      <img :src="meal.strMealThumb" alt="meal.strMeal" />
      <h3>{{ meal.strMeal }}</h3>
      <div>
        <a :href="meal.strYoutube" target="_blank">Youtube</a>
        <router-link to="/">View</router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import store from "../store";
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
