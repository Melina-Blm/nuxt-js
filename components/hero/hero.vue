<script setup>
const { client } = usePrismic()
const { data: home, error } = await useAsyncData('home', () => client.getSingle('homepage'))  
const env = useRuntimeConfig()

if (!home.value || error.value) {
  throw createError({ statusCode: 404, statusMessage: 'La page d\'accueil est introuvable' })
}

const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array,
  menucard: Array,
  items: Array,
})

const { data: recipes } = await useAsyncData('recipes', async () => {
  return $fetch(env.public.apiUrl + '/recipes')
})
</script>

<template>
  <div class="hero">
    <div class="hero__leftcontent">
      <div class="hero__leftcontent__block">
        <BikeDelivery />
      </div>
      <PrismicRichText class="hero__leftcontent__elem hero__leftcontent__elem--title" :field="title" />
      <PrismicRichText class="hero__leftcontent__elem hero__leftcontent__elem--text" :field="text" />
      <div class="hero__leftcontent__elem hero__leftcontent__elem--btn">
        <div v-for="button in buttons">
          <MyButton :href="button.button_link.url" :variant="button.button_type">{{ button.button_label }}</MyButton>
        </div>
      </div>
    </div>
    <div class="hero__rightcontent">
      <MenuCard :menucard="home.data.menucard"/>
    </div>
  </div>
</template>

<style lang="scss">


.hero {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  &__leftcontent {
    display: flex;
    flex-direction: column;
    margin-top: rem(40);



    &__elem {
      &--title {
        font-size: $giant-font-size;
        font-weight: 700;
        line-height: 1.2;
        color: black;
        margin: rem(30) rem(0);

        strong {
          color: $primary-color;
        }
      }

      &--text {
        &:not(:first-child) {
          margin-top: 1rem;
        }
      }

      &--btn {
        display: flex;
        align-items: center;
        flex-direction: row;
      }
    }
  }


}
</style>
