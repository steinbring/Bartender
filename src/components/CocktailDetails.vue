<template>
  <div>
    <h1>{{ cocktail.name }}</h1>
    <p>Ingredients: {{ cocktail.ingredients.join(', ') }}</p>
    <p>Instructions: {{ cocktail.instructions }}</p>
    <p>Main alcohol: {{ cocktail.main_alcohol }}</p>
    <p>Drinkware: {{ cocktail.drinkware }}</p>
    <p>Characteristics: {{ cocktail.characteristics.join(', ') }}</p>
  </div>
</template>

<script setup>
  import { ref, onMounted, defineProps, watch } from 'vue';
  import useCocktails from '../composables/useCocktails';

  const props = defineProps({
      level: String,
      slug: String
  });

  const { cocktails } = useCocktails(props.level);

  const cocktail = ref({name:null,ingredients:[],instructions:null,main_alcohol:null,drinkware:null,characteristics:[]});

  const findCocktail = () => {
    cocktail.value = cocktails.value.find(c => c.url_slug === props.slug);
  };

  onMounted(findCocktail);

  // Watch for changes in props.slug and update cocktail accordingly
  watch(() => props.slug, findCocktail);

  console.log("Initial slug value:", props.slug);
</script>
