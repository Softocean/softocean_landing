import React from 'react';

type MediaQuery = `(${string}:${string})`;

function getSnapshot(query: MediaQuery) {
  return window.matchMedia(query).matches;
}

function subscribe(onChange: () => void, query: MediaQuery) {
  const mql = window.matchMedia(query);
  mql.addEventListener('change', onChange);
  return () => {
    mql.removeEventListener('change', onChange);
  };
}

export function useMediaQuery(query: MediaQuery) {
  const subscribeMediaQuery = React.useCallback(
    (onChange: () => void) => subscribe(onChange, query),
    [query]
  );
  const matches = React.useSyncExternalStore(
    subscribeMediaQuery,
    () => getSnapshot(query),
    () => false
  );
  return matches;
}
