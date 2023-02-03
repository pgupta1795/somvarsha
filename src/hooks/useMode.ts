import { useEffect, useState } from 'react';

export default () => {
  const [mode, setMode] = useState(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    const modeMe = (e: MediaQueryListEvent): void => {
      setMode(e.matches ? 'dark' : 'light');
    };
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', modeMe);
    return window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', modeMe);
  }, []);

  return mode;
};
