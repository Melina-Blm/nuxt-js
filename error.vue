<script setup>
const { client } = usePrismic()
const { data: errorPage, error } = await useAsyncData('errorPage', () => client.getSingle('page404'))

// Handle case when request fails
if (!errorPage.value || error.value) {
  throw createError({ statusCode: 404, statusMessage: 'La page d\'erreur 404 est introuvable' })
}
const env = useRuntimeConfig()
const props = defineProps ({
    error: Object
})

</script>

<template>
    <div class="content">
        <MyHeader/>
        <div class="content-leftside">
           <BikeDelivery/>
           <PrismicRichText class="content-leftside__title" :field="errorPage.data.title" />
           <PrismicRichText class="content-leftside__text" :field="errorPage.data.text" />
           <div class="btn-more">
            <MyButton variant="rounded" :hasIcon="true" size="small"><router-link to="/">Return home</router-link></MyButton>
            </div>

        </div>

  
 <!-- {{ error }}
 <p>Oops! Something went wrong.</p>
 <pre>
 {{ errorPage.data.title[0].text}}
 {{ errorPage.data.text[0].text}}
</pre> -->


    </div>

<MyFooter/>
</template>

<style lang="scss" scoped>

.content {
    margin:rem(0) rem(80);
    &-leftside {

        &__title {
        font-size: $giant-font-size;
        font-weight: 700;
        line-height: 1.2;
        color: black;
        margin: rem(30) rem(0);

    }
    &__text {
        font-size: $medium-font-size;
        font-weight: 400;
        line-height: 1.5;
        color: $primary-color;
        margin: rem(30) rem(0);
    }
    
    }
    }



  .btn-more a{
  text-decoration: none;
  color:$white;
  }
</style>