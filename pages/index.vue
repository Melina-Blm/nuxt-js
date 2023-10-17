<script setup>
import hero from '@/components/hero/hero.vue';
const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle('homepage'))

// Handle case when request fails
if (!home.value || error.value) {
  throw createError({ statusCode: 404, statusMessage: 'La page d\'accueil est introuvable' })
}

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
{{ home.data.services }}
</pre> -->
    <div class="content">
        <MyHeader/>
       
    <BikeDelivery/>
    <div class="p-index">
        <Hero :title="home.data.hero_title" :text="home.data.hero_text" :buttons="home.data.hero_buttons"/>
        <Information :information="home.data.information" />
        <Services v-bind="{ tag: 'Services', title: 'Why Choose Our Favorite Food', services:home.data.services}" />
        <!-- <PrismicRichText v-bind="{field: home.data.hero_title}"/> -->
        <!-- <RecipeCard v-bind="{ title: 'Titre de la recette', description: 'une description' }"/>
        Page d'accueil -->
        <HowTo v-bind="{ tag: 'How to work', title: 'Food us An Important Part Of A Balanced Diet', items:home.data.how_to}"/>
        <Testimonial v-bind="{tag: 'pff', title: 'Food us An Important Part Of A Balanced Diet', testimonial:home.data.testimonial, text:home.data.testimonial}"/>
     
    </div>
    
</div>
<MyFooter/>
</template>

<style lang="scss" scoped>

.content {
    margin: rem(0) rem(80)
}

</style>