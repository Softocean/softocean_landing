import { useSyncExternalStore } from 'react';

export function useWindowSize() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(callback: any) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
  return { width: window.innerWidth, height: window.innerHeight };
}

function getServerSnapshot() {
  return {
    width: 0,
    height: 0,
  };
}
