<script setup>

const { data: recipes } = await useAsyncData('recipes', async () => {
  return $fetch(env.public.apiUrl + '/recipes')
})


</script>

<template>
    <p>ldsjghd</p>
   <div class="recipes-list">
          <div v-for="(recipe ,index) in recipes" :key="recipe_id">
        <RecipeCard  :title="recipe.recipe_name" :description="recipe.recipe_description " :id="recipe.recipe_id" :image="recipe.image_url"/>
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

</style>