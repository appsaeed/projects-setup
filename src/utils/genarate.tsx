import { RangeOf } from "../types/numbers";
import { ThemeType } from "../types/preferences";

/**
 * genarate random uuid
 */
export function uuid(
  _length: number | null = null,
  prefix: string | null = null
): string {
  const _Length: number = _length ? _length : 36;
  const _prefix: string = prefix ? prefix : "";
  const maps = "abcdefghigklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const made = [...Array(_Length)]
    .map(() => maps.substr(Math.floor(Math.random() * maps.length) + 0, 1))
    .join("")
    .toString();

  return _prefix + made;
}

/**
 * Generate random uuidv1
 * @returns
 */
export const uuidv1 = (_length: RangeOf<0, 36> = 36, prefix = ""): string => {
  const _Length = _length;
  const uuid =
    Date.now().toString(_Length) + Math.random().toString(_Length).substring(2);
  return `${prefix}${uuid}`;
};

//generate custom uudi with v4
export function uuidv4(): string {
  const arr = crypto.getRandomValues(new Uint8Array(16));
  arr[6] = (arr[6] & 0x0f) | 0x40; // set version number to 4
  arr[8] = (arr[8] & 0x3f) | 0x80; // set variant number to RFC4122
  return Array.from(arr)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .replace(
      /^.{8}(.{4}).{3}(.{3}).{12}$/,
      `$1-$2-4$3-8-${Date.now() % 1000000000}`
    );
}

/**
 * Get avatar placeholder image by shorts latters
 * uses api: https://github.com/LasseRafn/ui-avatars
 */
export const avatar = (n = "s") => `https://ui-avatars.com/api/?name=${n}`;

/**
 * detect device dark schema
 * @returns {boolean}
 */
export const isDark = (): boolean =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

/**
 *@method deviceTheme
 */
export const deviceTheme = (): ThemeType => {
  if (isDark()) {
    return "dark";
  }
  return "light";
};
