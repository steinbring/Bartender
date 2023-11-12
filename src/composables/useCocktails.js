import { ref, onMounted } from 'vue';
import simpleCocktails from '../data/simple_cocktails.json';
import intermediateCocktails from '../data/intermediate_cocktails.json';
import advancedCocktails from '../data/advanced_cocktails.json';

export default function useCocktails(level) {
  const cocktails = ref([]);

  onMounted(() => {
    switch(level) {
      case 'simple':
        cocktails.value = simpleCocktails;
        break;
      case 'intermediate':
        cocktails.value = intermediateCocktails;
        break;
      case 'advanced':
        cocktails.value = advancedCocktails;
        break;
      default:
        cocktails.value = [];
    }
  });

  return { cocktails };
}
