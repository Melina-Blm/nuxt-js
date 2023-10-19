<script setup>
const props = defineProps({
  menucard: Array,
  items: Array,
})
</script>

<template>


    <div v-for="item in menucard">
        <MenuCardItem :image="item.menucard_image" :title="item.menucard_title" :text="item.menucard_text" :price="item.menucard_price"/>
  </div>

</template>

<style lang="scss" scoped>


</style>