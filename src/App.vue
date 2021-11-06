<template>
  <div id="app">
    <TextField hint="Url" :value.sync="url"/>
    <Slider :value.sync="volume" class="slider__volume"/>
    <div class="button__submit-container">
      <Button @click="onSubmit" label="Submit" class="button__submit"/>
      <Button @click="onClear" label="Clear" class="button__clear"/>
    </div>

    <List :items="items" class="list__pages"/>
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
      const self = this;
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
          self.updateItems(object);
        });
      });
    },
    onClear: function () {
      const self = this;
      chrome.storage.local.remove(KEY, function () {
        self.updateItems();
      });
    },
    updateItems: function (map: any | null = null) {
      this.items = (map?.[KEY] ?? []).map((v: any) => {
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
#app {
  padding: 16px;
}

.slider__volume {
  padding: 32px 0;
}

.button__submit-container {
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 16px;
}

.button__submit {
}

.list__pages {
  padding: 32px 0;
}
</style>
