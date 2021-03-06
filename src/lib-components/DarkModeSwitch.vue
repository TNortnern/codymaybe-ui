<template>
  <div class="switch">
    <input
      id="switch-checkbox-1"
      class="switch__input"
      type="checkbox"
      @input="toggleTheme"
    />
    <label
      :class="`switch__label switch__label--${variant}`"
      for="switch-checkbox-1"
      aria-hidden="true"
      >Option label</label
    >
    <div class="switch__marker" aria-hidden="true"></div>
  </div>
</template>

<script lang="ts">
import { Variant } from '@/types'
import { defineComponent, PropType } from '@vue/runtime-core'
import useTheme from '@/composables/useTheme'
export default defineComponent({
  props: {
    variant: {
      type: String as PropType<Variant>,
      default: 'primary',
    },
  },
  setup() {
    const { toggleTheme } = useTheme()
    return {
      toggleTheme,
    }
  },
})
</script>

<style>
/* -------------------------------- 

File#: _1_switch
Title: Switch
Descr: Custom ON/OFF checkbox toggle
Usage: codyhouse.co/license

-------------------------------- */
:root {
  --switch-width: 64px;
  --switch-height: 32px;
  --switch-padding: 3px;
  --switch-animation-duration: 0.2s;
}

.switch {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  width: var(--switch-width);
  height: var(--switch-height);
  border-radius: 50em;
  padding: var(--switch-padding) 0;
  cursor: pointer;
}

.switch__input,
.switch__label {
  position: absolute;
  left: 0;
  top: 0;
}

.switch__input {
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
}
.switch__input:checked + .switch__label--primary {
  background-color: var(--color-primary);
}
.switch__input:checked + .switch__label--accent {
  background-color: var(--color-accent);
}
.switch__input:checked + .switch__label--subtle {
  background-color: var(--color-subtle);
}
.switch__input:checked + .switch__label + .switch__marker {
  left: calc(100% - var(--switch-height) + var(--switch-padding));
}
.switch__input:focus + .switch__label,
.switch__input:active + .switch__label {
  box-shadow: 0 0 0 2px
    hsla(
      var(--color-contrast-higher-h),
      var(--color-contrast-higher-s),
      var(--color-contrast-higher-l),
      0.15
    );
}
.switch__input:checked:focus + .switch__label,
.switch__input:checked:active + .switch__label {
  box-shadow: 0 0 0 2px
    hsla(
      var(--color-primary-h),
      var(--color-primary-s),
      var(--color-primary-l),
      0.2
    );
}

.switch__label {
  width: 100%;
  height: 100%;
  color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: var(--color-bg-darker);
  border-radius: inherit;
  z-index: 1;
  transition: var(--switch-animation-duration);
  overflow: hidden;
}

.switch__marker {
  position: relative;
  background-color: var(--color-white);
  width: calc(var(--switch-height) - var(--switch-padding) * 2);
  height: calc(var(--switch-height) - var(--switch-padding) * 2);
  border-radius: 50%;
  z-index: 2;
  pointer-events: none;
  box-shadow: var(--shadow-xs);
  left: var(--switch-padding);
  transition: left var(--switch-animation-duration);
  will-change: left;
}
</style>
