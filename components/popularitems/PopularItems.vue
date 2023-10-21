<script setup>

const { data: recipes } = await useAsyncData('recipes', async () => {
  return $fetch(env.public.apiUrl + '/recipes')
})

const props = defineProps({
  tag: String,
title: String,
})
</script>

<template>
  <span class="c-popular-items__text">{{ tag }}</span>
  <h2 class="c-popular-items__title">{{ title }}</h2>
    <div class="recipes-list">
      <div v-for="(recipe ,index) in recipes" :key="recipe_id">
        <RecipeCard  
        :title="recipe.recipe_name" 
        :description="recipe.recipe_description " 
        :id="recipe.recipe_id" 
        :image="recipe.image_url"/>
      </div>
    </div>
      <div class="btn-more">
        <MyButton variant="rounded" :hasIcon="true" size="small">See More Products</MyButton>
      </div>
</template>

<style lang="scss" scoped>

.recipes-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: rem(30);
  }

  
.btn-more {
  text-align: center;
  margin: rem(50) rem(0);
}

.c-popular-items {
    &__text {
        display: flex;
        justify-content: center;
        color: $primary-color;
        margin-top: rem(130);
        font-size: $medium-font-size;
        position: relative;
    }
    &__title {
        display: flex;
        justify-content: center;
        font-size: $big-font-size;
        margin-top: rem(10);
    }
}

</style>