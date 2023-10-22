<script setup>
const props = defineProps({
  services: Array,
  items: Array,
  tag: String,
  title: String,

})
</script>

<template>
  

        <span class="c-text">{{ tag }}</span>
        <h2 class="c-title">{{ title }}</h2>
        <div class="cards">
          <div v-for="item in services">
            <ServicesItem :icon="item.services_icon" :title="item.services_title" :text="item.services_text"/>
          </div>
        </div>

</template>

<style lang="scss" scoped>
.cards {
  display: flex;
  justify-content: space-between;
  margin-top:rem(70);
}

.c__icon {
    display: inline-flex;
    width: 30px;
    height: 30px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color:$secondary-color;
    border-radius: 50%;
  }

.c-title {
  display: flex;
  justify-content: center;
  font-size:$big-font-size;
  margin-top:rem(10);
}
.c-text {
  display: flex;
  justify-content: center;
  color:$primary-color;
  margin-top: rem(130);
  font-size: $medium-font-size;
}
  </style>