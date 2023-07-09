/**
 * Copy text to clipboard
 */
export async function toClipboard(text: string): Promise<boolean | void> {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}

/**
 * Copy text to clipboard
 */
export function copyToClipboard(text: string) {
  try {
    if ("clipboard" in navigator) {
      window.navigator.clipboard.writeText(text);
    } else {
      document.execCommand("copy", true, text);
    }
    return true;
  } catch (error) {
    return false;
  }
}
