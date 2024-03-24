<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full text-gray-300"
      v-model="keyword"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
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
          <YoutubeButton :href="meal.strYoutube"/>
          <!-- <router-link
            to="/"
            class="px-3 py-2 rounded border-2 border-purple-600 bg-purple-500 hover:bg-purple-600 text-white transition-colors"
            >View</router-link
          > -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";
const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
