<script setup>
const props = defineProps({
    services:Array,
    items:Array,
    image: Object,
  title: Array,
  text: Array,
})
</script>

<template>
      
       

        <img :src="`/icons/${items.services_icon}.svg`   ">
        <PrismicRichText :field="title" />
        <PrismicRichText :field="text" />
     

</template>

<style lang="scss" scoped>


.c-title {
  display: flex;
  justify-content: center;
  font-size:$big-font-size;
}
.c-text {
  display: flex;
  justify-content: center;
  color: orange;
  margin-top: rem(130);
  font-size:$regular-font-size;
}

  </style>