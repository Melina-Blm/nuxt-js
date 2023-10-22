
<script setup>
const props = defineProps({
  testimonial: Array,
  image: Object,
  tag: String,
  title: String,
})
</script>

<template>
<div>
  <span class="c-text">{{ tag }}</span>
  <h2 class="c-title">{{ title }}</h2>

    <div class="card">
      <div v-for="item in testimonial" class="card__item">
        <div class="card__item-content">
          <MyIcon class="card__item-icon1" name="arrow left" variant="orange" stroke="white" size="regular" />
          <MyIcon class="card__item-icon2" name="arrow right2" variant="orange" stroke="white" size="regular" />

           <div class="card__item-sub">
            <img :src="`/icons/${item.testimonial_icon}.png`" alt="">
              <div class="card__item-sub-title">
                <PrismicRichText class="card__item-sub-title-name" :field="item.testimonial_name" />
                <PrismicRichText :field="item.testimonial_subtitle" />
              </div>
          </div>
            <div class="card__item-description">
              <PrismicRichText :field="item.testimonial_description" />
            </div>
        </div>
          <div class="card__right">
            <img :src="item.testimonial_image.url" :alt="item.testimonial_image.alt" />
          </div>
      </div>
    </div>
</div>
</template>

<style lang="scss" scoped>

.card{
&__right{
  display: flex;
  justify-content: flex-end;
  margin-top:rem(70);
 img {
  width:80%;
  }
}
 &__item{
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-description {
    text-align: center;
    margin-top: rem(50);
  }

  &-sub {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: rem(20);
    
    &-title-name {
      font-weight:bold;
    }

    &-title {
    display: flex;
    flex-direction: column;
    
  }

  }

  
  &-icon1 {
    position: absolute;
    bottom: rem(150);
    left: rem(-30);

  }
  &-icon2 {
    position: absolute;
    bottom: rem(150);
    right: rem(-30);

  }

  &-content {
  position: relative;
  width: rem(600);
  height: rem(250);
  border-radius: rem(20);
  border: rem(1) solid $gray;
  padding: rem(50);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
 } 
}

.c-text {
  display: flex;
  justify-content: center;
  color: $primary-color;
  margin-top: rem(130);
  font-size: $medium-font-size;

}

.c-title {
  display: flex;
  justify-content: center;
  font-size:$big-font-size;
  margin-top:rem(10);
  
}


</style>