export const getItem = <T extends Record<string, unknown>>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key) ?? JSON.stringify(defaultValue);
    return JSON.parse(item) as T;
  } catch (error) {
    return defaultValue;
  }
};

export const setItem = <T extends Record<string, unknown>>(key: string, value: T): void => {
  localStorage.setItem(key as string, JSON.stringify(value));
};
