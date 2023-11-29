export const JWT_KEY = "my-jwt";
export const REFRESHTOKEN_KEY = "my-refreshtoken";

export function storeSET(key: string, item: any) {
  localStorage.setItem(key, item);
}

export function storeGET(key: string) {
  return localStorage.getItem(key);
}