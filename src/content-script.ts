import {KEY} from './constants';
import {PageVolume} from './PageVolume';

function updateVolume(volume: number) {
  document
    .querySelectorAll('audio')
    .forEach((e) => {
      e.volume = volume;
    });
  document
    .querySelectorAll('video')
    .forEach((e) => {
      e.volume = volume;
    });
}

const url = location.href;
chrome.storage.local.get(KEY, async function (map) {
  const matches = map[KEY].filter((page: PageVolume) => url.startsWith(page.url));
  if (matches.length <= 0) {
    return;
  }
  updateVolume(matches[0].volume);
});
