<template>
  <section class="feature-v9">
    <div class="grid">
      <div
        v-for="(item, i) in items"
        :key="item[objectKey]"
        class="feature-v9__block col-6@md"
        :style="`background-image: url(${item.image})`"
      >
        <div class="feature-v9__content text-center max-width-xxxs">
          <div class="text-component">
            <slot :item="item" v-bind="$props" :name="`${item.headerText}Text`">
              <h2 class="text-xxl color-inherit">{{ item.headerText }}</h2>
              <p class="opacity-90%">
                {{ item.description }}
              </p>
            </slot>
          </div>

          <div class="margin-top-sm">
            <slot
              :item="item"
              v-bind="$props"
              :name="`${item.headerText}Button`"
            >
              <CodyButton
                :variant="item.buttonVariant"
                v-bind="{
                  ...(item.href && { href: item.href }),
                }"
                size="lg"
                v-on="{
                  click:
                    item.action && !item.href
                      ? () => item.action && item.action()
                      : null,
                }"
              >
                {{ item.buttonText }}
              </CodyButton>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'
import { FeatureV9Item } from '@/types'
import CodyButton from './CodyButton.vue'

export default defineComponent({
  components: {
    CodyButton,
  },
  props: {
    items: {
      type: Array as PropType<FeatureV9Item[]>,
      default: () => [],
      required: true,
    },
    objectKey: {
      type: String as PropType<keyof FeatureV9Item>,
      default: 'headerText',
    },
  },
})
</script>

<style scoped>
/* -------------------------------- 

File#: _1_feature-v9
Title: Feature v9
Descr: A feature section with 2 blocks
Usage: codyhouse.co/license

-------------------------------- */
.feature-v9:hover .feature-v9__block:not(:hover) .feature-v9__content {
  opacity: 0.5;
}
.feature-v9:hover .feature-v9__block:not(:hover)::after {
  background-color: hsla(
    var(--color-black-h),
    var(--color-black-s),
    var(--color-black-l),
    0.8
  );
  -webkit-backdrop-filter: grayscale(100%);
  backdrop-filter: grayscale(100%);
}

.feature-v9__block {
  position: relative;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: var(--space-xl) var(--space-md);
  min-height: 350px;
}
.feature-v9__block::before,
.feature-v9__block::after {
  content: '';
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: 0.2s;
}
.feature-v9__block::before {
  height: 70%;
  background: linear-gradient(
    hsla(var(--color-black-h), var(--color-black-s), var(--color-black-l), 0),
    hsla(var(--color-black-h), var(--color-black-s), var(--color-black-l), 0.8)
  );
  mix-blend-mode: multiply;
}
.feature-v9__block::after {
  height: 100%;
  background-color: hsla(
    var(--color-black-h),
    var(--color-black-s),
    var(--color-black-l),
    0
  );
}
.feature-v9__block:hover .feature-v9__content {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}
@media (min-width: 48rem) {
  .feature-v9__block {
    min-height: 450px;
  }
}
@media (min-width: 64rem) {
  .feature-v9__block {
    min-height: 600px;
  }
}
@media (min-width: 80rem) {
  .feature-v9__block {
    min-height: 700px;
  }
}

.feature-v9__content {
  position: relative;
  z-index: 2;
  color: var(--color-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto auto 0;
  transition: 0.2s;
}

.feature-v9__link {
  color: var(--color-black);
  text-decoration: none;
  display: inline-block;
  padding: var(--space-xs) var(--space-md);
  background-color: hsla(
    var(--color-white-h),
    var(--color-white-s),
    var(--color-white-l),
    0.8
  );
  border-radius: var(--radius-md);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  transition: background-color 0.2s;
}
.feature-v9__link:hover {
  background-color: hsla(
    var(--color-white-h),
    var(--color-white-s),
    var(--color-white-l),
    1
  );
}
</style>
