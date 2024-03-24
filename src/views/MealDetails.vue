<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class=""/>
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category</strong>: {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area</strong>: {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags</strong>: {{ meal.strTags }}</div>
    </div>
    <div class="my-3">{{ meal.strInstructions }}</div>
    <div class="grid grid-cols-1 smm:grid-cols-2 list-none">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <template v-for="(el, index) of new Array(20)">
          <li v-if="meal[`strIngredient${index + 1}`]">
            {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
          </li>
        </template>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <template v-for="(el, index) of new Array(20)">
          <li v-if="meal[`strMeasure${index + 1}`]">
            {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
          </li>
        </template>
      </div>
      <div class="mt-4">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        <a
          :href="meal.strSource"
          class="px-3 py-2 rounded border-2 border-purple-600 bg-purple-500 hover:bg-purple-600 text-white transition-colors ml-3"
          >View Source</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";
const meal = ref({});
const route = useRoute();
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || [];
  });
});
</script>
