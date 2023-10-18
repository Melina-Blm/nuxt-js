<script setup>
import hero from '@/components/hero/hero.vue';
const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle('homepage'))
const env = useRuntimeConfig()
// Handle case when request fails
if (!home.value || error.value) {
  throw createError({ statusCode: 404, statusMessage: 'La page d\'accueil est introuvable' })
}

const { data: recipes } = await useAsyncData('recipes', async () => {
  return $fetch(env.public.apiUrl + '/recipes')
})


useSeoMeta({
    title: home.value.data.meta_title,
    description: home.value.data.meta_description,
    ogDesciption: home.value.data.meta_description,
    ogImage: home.value.data.meta_image.url,
    twitterCard:'summary_large_image',
})

console.log(home)

</script>

<template>
        <!-- <pre>
{{ home.data.testimonial_description }}
</pre>
     <pre>
{{ home.data.testimonial }}
</pre>
<pre>
{{ home.data.how_to }}
</pre> --> 
<!-- <pre>
{{ home.data.newsletter }}
</pre> -->
    <div class="content">
        <MyHeader/>
       
    <BikeDelivery/>
    <div class="p-index">

    
        <Hero :title="home.data.hero_title" :text="home.data.hero_text" :buttons="home.data.hero_buttons"/>
        
        <Information :information="home.data.information" />
        <div class="recipes-list">
      <div v-for="(recipes,index) in recipes" :key="recipe_id">
        <RecipeCard :title="recipes.recipe_name" :description="recipes.recipe_description " :id="recipes.recipe_id" :image="recipes.image_url"/>
      </div>
    </div>
        <Services v-bind="{ tag: 'Services', title: 'Why Choose Our Favorite Food', services:home.data.services}" />
        <!-- <PrismicRichText v-bind="{field: home.data.hero_title}"/> -->
        <!-- <RecipeCard v-bind="{ title: 'Titre de la recette', description: 'une description' }"/>
        Page d'accueil -->
        <HowTo v-bind="{ tag: 'How to work', title: 'Food us An Important Part Of A Balanced Diet', items:home.data.how_to}"/>
        <Testimonial v-bind="{tag: 'Testimonials', title: 'Our Happy Client Says', testimonial:home.data.testimonial, text:home.data.testimonial}"/>
        <Newsletter :newsletter="home.data.newsletter"/>
     
    </div>
    
</div>
<MyFooter/>
</template>

<style lang="scss" scoped>

.content {
    margin: rem(0) rem(80)
}
.recipes-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: rem(30);
  }


</style>