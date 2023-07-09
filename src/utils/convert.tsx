import { removeHtml } from "./str";

export function formatPrice(price: number | string) {
  if (typeof price === "string") {
    return Number(price) * 100;
  }
  return price * 100;
}

/**
 * Convert currency to symbol
 */
type Lang = "en-US";
export function currencyToSymbol(
  currency: string,
  language: Lang = "en-US"
): string {
  return (0)
    .toLocaleString(language, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, "")
    .trim();
}

/**
 * make a string from object
 */
export function objectToStr(message: string | string): string {
  if (typeof message === "object") {
    return (
      Object.entries(message)
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        .map(([key, value]) => `${key}: ${value}`)
        .join("")
        .toString()
    );
  } else {
    return String(message).toString();
  }
}

/**
 * extarct error from string | object | null | undefined
 */
export function extartError(error: any): string {
  if (!error) {
    return "";
  }
  let message = "";
  try {
    if (typeof error === "string") {
      message = error;
    } else if (error?.response?.data?.message) {
      message = error?.response?.data?.message.toString();
    } else if (error?.response?.data) {
      message = error?.response?.data.toString();
    } else if (error?.response) {
      message = error?.response.toString();
    } else if (error?.message) {
      message = error?.message.toString();
    } else if (error?.data?.message) {
      message = error?.data?.message.toString();
    } else {
      message = error.toString();
    }
  } catch (_err: unknown) {
    if (_err instanceof Error) {
      message = _err.message.toString();
    }
  }
  return objectToStr(removeHtml(message));
}

/**
 * convert rgb to hex string
 * @param red
 * @param green
 * @param blue
 */
export function rgbToHex(
  red: number | string,
  green: number | string,
  blue: number | string
) {
  return (
    "#" +
    ((1 << 24) | (Number(red) << 16) | (Number(green) << 8) | Number(blue))
      .toString(16)
      .slice(1)
  );
}

/**
 * convert hex string to rgb
 * @param hex string
 */
export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16),
      }
    : null;
}
