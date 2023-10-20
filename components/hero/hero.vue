<script setup="">
import RecipeCard from '@/components/RecipeCard.vue';
const env = useRuntimeConfig()
const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array
})

const { data: recipes } = await useAsyncData('recipes', async () => {
  return $fetch(env.public.apiUrl + '/recipes')
})

</script>

<template>
  <BikeDelivery/>
    <div class="hero">
      <div class="hero__leftcontent">
      <PrismicRichText class="hero__leftcontent-title" :field="title" />
      <PrismicRichText class="hero__leftcontent-text" :field="text" />
      <div class="hero__leftcontent-btn">
        <div v-for="button in buttons">
          <MyButton :href="button.button_link.url" :variant="button.button_type">{{ button.button_label }}</MyButton>
        </div>
      </div>
      </div>
      <div class="hero__leftcontent">
       
      </div>


      </div>
 
</template>

<style lang="scss" >

.hero {
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  
  &__leftcontent {
    display: flex;
    flex-direction: column;

    

  

    &-btn {
      display: flex;
      align-items: center;
      flex-direction: row;

    }
    &-text{
      &:not(:first-child) {
      margin-top: 1rem;
    }
    }
    &-title {
      font-size: $giant-font-size;
        font-weight: 700;
        line-height: 1.2;
        color: black;

        margin: rem(20) rem(0);
        

    strong {
    color: $primary-color;
    }
     
    }
  }
}


</style>