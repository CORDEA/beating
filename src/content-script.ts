import {KEY} from './constants';
import {PageVolume} from './PageVolume';

function updateVolume() {
  const url = location.href;
  chrome.storage.local.get(KEY, async function (map) {
    const matches = map[KEY].filter((page: PageVolume) => url.startsWith(page.url));
    if (matches.length <= 0) {
      return;
    }
    const first = matches[0];
    document
      .querySelectorAll('audio')
      .forEach((e) => {
        e.volume = first.volume;
      });
    document
      .querySelectorAll('video')
      .forEach((e) => {
        e.volume = first.volume;
      });
  });
}

updateVolume();
