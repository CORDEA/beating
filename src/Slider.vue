<template>
  <div class="mdc-slider" @MDCSlider:input="$emit('update:value', $event.detail.value);">
    <input class="mdc-slider__input" type="range" min="0" :max="max" value="0" step="10" name="volume"
           aria-label="Slider">
    <div class="mdc-slider__track">
      <div class="mdc-slider__track--inactive"></div>
      <div class="mdc-slider__track--active">
        <div class="mdc-slider__track--active_fill"></div>
      </div>
    </div>
    <div class="mdc-slider__thumb">
      <div class="mdc-slider__thumb-knob"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {MDCSlider} from "@material/slider/component";

interface Data {
  ref: MDCSlider | undefined;
}

export default {
  name: "Slider",
  data: function (): Data {
    return {
      ref: undefined,
    };
  },
  props: {
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    value: function (value: number) {
      const ref: MDCSlider | undefined = this.ref;
      if (!ref) {
        return;
      }
      if (value == ref.getValue()) {
        return;
      }
      ref.setValue(value);
    },
  },
  mounted() {
    this.ref =
        new MDCSlider(document.querySelector(".mdc-slider"));
  },
}
</script>

<style scoped lang="scss">
@use "@material/slider/styles";
</style>
