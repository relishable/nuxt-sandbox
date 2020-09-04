---
to: components/<%= category %>/<%= name %>/<%= name %>.vue
---
<template>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: '<%= h.changeCase.param(name) %>',
  components: {},
  props: {},
  setup() {},
})
</script>

<style lang="scss" scoped>
// .<%= h.changeCase.param(name) %>
</style>
