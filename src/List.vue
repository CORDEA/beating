<template>
  <ul class="mdc-list mdc-list--two-line">
    <li class="mdc-list-item" v-for="(item) in items">
      <span class="mdc-list-item__ripple"></span>
      <span class="mdc-list-item__text">
      <span class="mdc-list-item__primary-text">{{ item.url }}</span>
      <span class="mdc-list-item__secondary-text">{{ item.volume }}</span>
    </span>
    </li>
  </ul>
</template>

<script lang="ts">
import {MDCList} from '@material/list';
import {PageVolume} from './PageVolume';

export default {
  name: 'List',
  props: {
    items: {
      type: Array as () => Array<PageVolume>,
      default: [],
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
