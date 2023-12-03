export const JWT_KEY = "my-jwt";
export const REFRESHTOKEN_KEY = "my-refreshtoken";

export const USER_OBJ = "my-user-obj";
export const USER_TYPE = "my-usertype";
export const ACCOUNT_OBJ = "my-account-obj";

export function storeSET(key: string, item: any) {
  localStorage.setItem(key, item);
}

export function storeGET(key: string) {
  return localStorage.getItem(key);
}