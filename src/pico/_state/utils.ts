export function parseJSON<T = any>(value: any): T {
  try {
    return JSON.parse(value);
  } catch {
    return {} as T;
  }
}
