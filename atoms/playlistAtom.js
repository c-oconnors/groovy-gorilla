import { atom } from 'recoil';

export const playlistState = atom({
  key: "playlistState", 
  default: null,
});

export const playlistIdState = atom({
  key: "playlistIdState", // unique ID (with respect to other atoms/selectors)
  default: '2cxqAiIkU3hy1xKiYDZA2C', // default value (aka initial value)
});