<template>
  <div>
    <div class="flex gap-2 mt-2 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        >{{ letter }}</router-link
      >
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600">There are No Meals</div>
</template>
<script setup>
import store from "../store";
import { useRoute } from "vue-router";
import { computed, watch, onMounted } from "vue";
import MealItem from "../components/MealItem.vue";

const route = useRoute();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(
  () => route.params.letter,
  (newLetter, oldLetter) => {
    if (newLetter !== oldLetter) {
      store.dispatch("searchMealsByLetter", newLetter);
    }
  }
);

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
