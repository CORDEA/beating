<template>
  <label class="mdc-text-field mdc-text-field--outlined">
      <span class="mdc-notched-outline">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <span class="mdc-floating-label" id="label-id">{{ hint }}</span>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>
    <input type="text" class="mdc-text-field__input" aria-labelledby="label-id" v-on="$listeners" v-model="value"
           @input="$emit('update:value', value);"/>
  </label>
</template>

<script lang="ts">
import {MDCTextField} from "@material/textfield";

export default {
  name: "TextField",
  props: {
    hint: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  mounted() {
    new MDCTextField(document.querySelector(".mdc-text-field"));
  }
}
</script>

<style scoped lang="scss">
@use "@material/floating-label/mdc-floating-label";
@use "@material/line-ripple/mdc-line-ripple";
@use "@material/notched-outline/mdc-notched-outline";
@use "@material/textfield";

@include textfield.core-styles;
</style>
