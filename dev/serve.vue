<script lang="ts">
import { defineComponent } from 'vue'
// Uncomment import and local "components" registration if library is not registered globally.
// import { CodehouseMaybeUiSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  CodehouseMaybeUiSample,
  // }
})
</script>

<template>
  <div id="app" class="max-w-2xl">
    <codehouse-maybe-ui-sample />
  </div>
</template>
