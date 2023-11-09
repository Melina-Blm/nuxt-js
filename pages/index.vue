<script setup>
// Import the 'usePrismic' function to interact with Prismic CMS
const { client } = usePrismic()

// Fetch the homepage data asynchronously
const { data: home, error } = await useAsyncData('home', () => client.getSingle('homepage'))
const env = useRuntimeConfig()
// Handle case when request fails
if (!home.value || error.value) {
  throw createError({ statusCode: 404, statusMessage: 'La page d\'accueil est introuvable' })
}

const { data: recipes } = await useAsyncData('recipes', async () => {
  return $fetch(env.public.apiUrl + '/recipes')
})

// Set SEO metadata for the page based on the homepage data
useSeoMeta({
    title: home.value.data.meta_title,
    description: home.value.data.meta_description,
    ogDesciption: home.value.data.meta_description,
    ogImage: home.value.data.meta_image.url,
    twitterCard:'summary_large_image',
})

// console.log(home)

</script>

<template>
    <div class="content">
        <Hero 
        :title="home.data.hero_title" 
        :text="home.data.hero_text" 
        :buttons="home.data.hero_buttons"/>
     
        <Information 
        :information="home.data.information" />

        <PopularItems 
        v-bind="{tag: 'Product', title:'Most Popular Items'}"/>

        <Services 
        v-bind="{ tag: 'Services', title: 'Why Choose Our Favorite Food', 
        services:home.data.services}" />
        
        <HowTo v-bind="{ tag: 'How to work', title: 'Food us An Important Part Of A Balanced Diet', items:home.data.how_to}"/>
        <Testimonial v-bind="{tag: 'Testimonials', title: 'Our Happy Client Says', testimonial:home.data.testimonial, text:home.data.testimonial}"/>
        <Newsletter :newsletter="home.data.newsletter"/>
    </div>
  <MyFooter/>
</template>

<style lang="scss" scoped>

.content {
    margin: rem(0) rem(80)
}
</style>