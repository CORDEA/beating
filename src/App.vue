<template>
  <div id="app">
    <TextField hint="Url" :value.sync="url"/>
    <Slider :value.sync="volume"/>
    <Button @click="onSubmit"/>
  </div>
</template>

<script lang="ts">
import TextField from './TextField.vue';
import Slider from "./Slider.vue";
import Button from "./Button.vue";

const key = 'BEATING_VALUES';

export default {
  components: {
    Slider,
    TextField,
    Button,
  },
  data: function () {
    return {
      url: '',
      volume: 0,
    };
  },
  methods: {
    onSubmit: function () {
      const url = this.url;
      const volume = this.volume;
      chrome.storage.local.get([key], function (map) {
        const value = {
          'url': url,
          'volume': volume,
        };
        const object: { [key: string]: any } = {};
        const values = map[key] ?? [];
        values.push(value)
        object[key] = values;
        chrome.storage.local.set(object, function () {
        });
      });
    }
  },
}
</script>

<style scoped lang="scss">

</style>
