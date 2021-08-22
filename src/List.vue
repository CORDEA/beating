<template>
  <ul class="mdc-list mdc-list--two-line">
    <li class="mdc-list-item">
      <span class="mdc-list-item__ripple"></span>
      <span class="mdc-list-item__text">
      <span class="mdc-list-item__primary-text">{{ title }}</span>
      <span class="mdc-list-item__secondary-text">{{ description }}</span>
    </span>
    </li>
  </ul>
</template>

<script lang="ts">
import {MDCList} from '@material/list';

export default {
  name: "List",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  mounted() {
    new MDCList(document.querySelector('.mdc-list'));
  }
}
</script>

<style scoped lang="scss">
@use "@material/list";

@include list.deprecated-core-styles;
</style>
