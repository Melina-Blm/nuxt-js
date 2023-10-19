<script setup>
const props = defineProps({
  services: Array,
  items: Array,
  tag: String,
  title: String,
  text: String,
})
</script>

<template>
      
          <span class="c-text">{{ tag }}</span>
        <h2 class="c-title">{{ title }}</h2>    
        <div v-for="item in services">
        <img :src="`/icons/${item.services_icon}.svg`">
        <ServicesItem :title="item.services_title" :text="item.services_text"/>

     
</div>
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