import { Cookies } from "quasar";

const tokenName = "access_token";
const tokenSettings = { domain: process.env.DOMAIN };

export function setToken(token) {
  Cookies.set(tokenName, token, tokenSettings);
}

export function removeToken() {
  Cookies.remove(tokenName, tokenSettings);
}

export function getToken() {
  return Cookies.get(tokenName);
}
