<template>
  <button class="mdc-button mdc-button--outlined" v-on="$listeners">
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__label">{{ label }}</span>
  </button>
</template>

<script lang="ts">
import {MDCRipple} from '@material/ripple';

export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  mounted() {
    new MDCRipple(document.querySelector('.mdc-button'));
  }
}
</script>

<style scoped lang="scss">
@use "@material/button/styles";
</style>
