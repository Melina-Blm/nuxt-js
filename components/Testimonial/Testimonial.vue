

<script setup>
const props = defineProps({
  testimonial: Array,
  image: Object,
  tag: String,
  title: String,
})
</script>

<template>
      <span class="c-text">{{ tag }}</span>
        <h2 class="c-title">{{ title }}</h2>
<div class="testimonials">
    <div v-for="item in testimonial" class="testimonial__item">
      <div class="testimonials__leftcontent">
        <img :src ="`/icons/${item.testimonial_icon}.png`" alt="">
      <div class="testimonials__leftcontent-name">
        <PrismicRichText :field="item.testimonial_name" />
      </div>
      <div class="testimonials__leftcontent-subtitle">
        <PrismicRichText :field="item.testimonial_subtitle" />
      </div>
      <div>
        <PrismicRichText class="testimonials__leftcontent-description" :field="item.testimonial_description" />
      </div>
    </div>
    <div class="testimonials__rightcontent">
    <img :src="item.testimonial_image.url" :alt="item.testimonial_image.alt" />
    </div>
    </div>  
</div>
</template>

<style lang="scss" scoped>

.testimonials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  &__rightcontent img {
    width: 300px;
  }
  &__leftcontent {
    background-color: orange;
  }
}
</style>