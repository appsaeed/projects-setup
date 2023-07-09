import { ThemeType } from "../types/preferences";

//create  a stroe from save theme settings
export function getThemeStroe(): ThemeType | string | null {
  return localStorage.getItem("theme_mode");
}

export function setThemeStroe(mode: ThemeType) {
  localStorage.setItem("theme_mode", mode);
}
