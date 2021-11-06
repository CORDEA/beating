<template>
  <div id="app">
    <TextField hint="Url" :value.sync="url"/>
    <Slider :value.sync="volume"/>
    <Button @click="onSubmit"/>

    <List :items="items"/>
  </div>
</template>

<script lang="ts">
import {KEY} from './constants';
import TextField from './TextField.vue';
import Slider from './Slider.vue';
import Button from './Button.vue';
import List from './List.vue';
import {PageVolume} from './PageVolume';

export default {
  components: {
    List,
    Slider,
    TextField,
    Button,
  },
  data: function () {
    return {
      url: '',
      volume: 0,
      items: [] as Array<PageVolume>,
    };
  },
  methods: {
    onSubmit: function () {
      const url = this.url;
      const volume = this.volume;
      chrome.storage.local.get([KEY], function (map) {
        const value = {
          'url': url,
          'volume': volume,
        };
        const object: { [key: string]: any } = {};
        const values = map[KEY] ?? [];
        values.push(value)
        object[KEY] = values;
        chrome.storage.local.set(object, function () {
          this.updateItems(object);
        });
      });
    },
    updateItems: function (map: any) {
      this.items = (map[KEY] ?? []).map((v: any) => {
        return {
          url: v['url'],
          volume: v['volume'],
        };
      });
    }
  },
  mounted() {
    chrome.storage.local.get([KEY], this.updateItems);
  },
}
</script>

<style scoped lang="scss">

</style>
