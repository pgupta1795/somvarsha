export const getStoreTheme = () => localStorage.getItem('theme');

export const setStoreTheme = (theme: string) =>
  localStorage.setItem('theme', theme);
