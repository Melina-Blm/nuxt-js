<script setup>
const props = defineProps({
  menucard: Array,
})
</script>

<template>

<div>
    <div v-for="item in menucard">
      <!-- <img :src="image.url" :alt="image.alt" /> -->
      <img :src="item.menucard_image.url" :alt="item.menucard_image.alt" />
      <PrismicRichText :field="item.menucard_title" />
      <PrismicRichText :field="item.menucard_text" />
    </div>
  </div>

</template>

<style lang="scss">

</style>