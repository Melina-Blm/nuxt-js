<script setup>

const env = useRuntimeConfig()

const route = useRoute();

const { id } = route.params

const { data: recipes } = await useAsyncData('recipes', async () => {
    return $fetch(env.public.apiUrl + '/recipes/' + id)
})




</script>

<template>


<div class="p-recipe-view">
  <div class="section">
  <p class="section__title">Recette </p>
  <MyTitle el="h3" size="big">{{ recipes.recipe_name }}</MyTitle>
</div>
  
  <!-- recette avec l'id : {{ route.params.id }} -->

  <MyButton class="btn-home" variant="rounded" size="small" :has-icon="true"><router-link to="/">Retour à l'accueil</router-link></MyButton>


  <div class="grid">
    <div class="grid__left">
      <img :src=recipes.image_url alt="">
    </div>
    <div class="grid__right">
       
      <MyIcon name="fork knife" variant="orange" stroke="white" size="regular"></MyIcon>
    <MyTitle el="h4" weight="bold" size="medium">- Listes des ingrédients de la recette :</MyTitle>
        <ul>
          <li v-for ='ingredient in recipes.ingredients'> 
          {{ ingredient.quantity }} {{ ingredient.unit }} of {{ ingredient.name }}</li>
        </ul>

    </div>
    
  </div>
  </div>
  <MyFooter/>
</template>

<style lang="scss" scoped>
.grid {
  margin:rem(70) rem(130);
  display: grid;
    grid-template-columns: repeat(2, 1fr);

    align-items: center;
    place-content: center;

    &__right {
      background-color: $white;
      border : 1px solid $gray;
      border-radius: 20px;
      padding:rem(50);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap:rem(30)
     

    }

    &__left {

      img{
        width:rem(500);
        border-radius: rem(40) ;
        border : 1px solid $gray;
      
      }

    }

}
.content {
  margin: 0 rem(100);
}

.section {
  text-align: center;
  margin: rem(40) 0 rem(20) 0 ;
  p {
    color:$primary-color;
  }

}


.btn-home {
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  a {
    text-decoration: none;
    color:$white;
  }
  
}
</style>