<template>
  <div>
    <router-view/>

    <h1>Cocktails</h1>
    <ul>
      <li v-for="cocktail in cocktails" :key="cocktail.url_slug">
        <router-link :to="`/${level}/${cocktail.url_slug}`">{{ cocktail.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref, watchEffect, defineProps } from 'vue';
  import useCocktails from '../composables/useCocktails';

  const props = defineProps({
    level: String
  });

  console.log("Initial level value:", props.level);

  const { cocktails } = useCocktails(props.level);

  // Watch for changes and update accordingly
  watchEffect(() => {
    console.log("Updated level value:", props.level);
  });
</script>