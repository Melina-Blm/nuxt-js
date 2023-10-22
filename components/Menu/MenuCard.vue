<script setup>
const props = defineProps({
  menucard: Array,
  items: Array,
})
</script>

<template>

<div class="card">
    <div v-for="item in menucard">
        <MenuCardItem :image="item.menucard_image" :title="item.menucard_title" :text="item.menucard_text" :price="item.menucard_price"/>
    </div>
</div>

</template>

<style lang="scss" scoped>

.card{
  display: grid;
  grid-template-columns: repeat(2, 280px);
  justify-content: flex-end;
 
  

}

</style>