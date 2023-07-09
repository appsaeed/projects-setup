import settings from "../app/settings";
import { TSkins, ThemeType } from "../types/preferences";
import { deviceTheme } from "./genarate";

export function setSession(name: string, data: unknown) {
  sessionStorage.setItem(name, btoa(JSON.stringify({ data: data })));
  sessionStorage.setItem(`wwe${name}`, "okmew92843902");
  sessionStorage.setItem(`kee${name}`, "woiru93fj");
}

export function getSession(name: string) {
  try {
    const str = sessionStorage.getItem(name) || "";
    return JSON.parse(atob(str))?.data;
  } catch (error) {
    return null;
  }
}
export function setStorage(name: string, data: unknown) {
  localStorage.setItem(name, btoa(JSON.stringify({ data: data })));
}

export function getStorage(name: string) {
  try {
    const str = localStorage.getItem(name) || "";
    return JSON.parse(atob(str))?.data;
  } catch (error) {
    return null;
  }
}

export function removeAuthSession() {
  sessionStorage.clear();
  sessionStorage.removeItem(settings.auth_session);
}

/**
 * save user theme mode
 * @param  mode ThemeType
 */
export function setThemeStore(mode: ThemeType) {
  localStorage.setItem("user_theme", mode);
}

/**
 * get user theme from local storage
 */
export function getThemeStore(): ThemeType {
  const store = localStorage.getItem("user_theme");
  if (store === "dark" || store === "light") {
    return store;
  }
  return deviceTheme();
}

/**
 * get user theme skin by theme mode
 */
export function detectThemeSkin(): TSkins {
  if (getThemeStore() === "dark") {
    return "skin5";
  } else {
    return "skin6";
  }
}
