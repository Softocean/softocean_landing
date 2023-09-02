import { useSyncExternalStore } from 'react';

export function useWindowSize() {
  const width = useSyncExternalStore(subscribe, () => getWidth());
  const height = useSyncExternalStore(subscribe, () => getHeight());
  return { width, height };
}

function subscribe(callback: any) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getWidth() {
  return window.innerWidth;
}

function getHeight() {
  return window.innerHeight;
}
