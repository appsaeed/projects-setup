interface SettingsTypes {
  dev: boolean;
  url: string;
  name: string;
  title: string;
  lang: string;
  logo: string | null;
  desc: string;
  favicon: string | null;
  basename: string;
  auth_session: string;
}

import { unslash } from "../utils/url";
import data from "./settingJson";

const settings: SettingsTypes = {
  /**
   * app local
   */
  dev: import.meta.env.DEV || false,
  /**
   * app url
   */
  url: unslash(import.meta.env.BASE_URL),
  /**
   * name
   */
  name: data?.name || "name",

  /**
   * title
   */
  title: data?.title || "title",

  /**
   * app logo
   */
  logo: data.logo || "",

  /**
   * app lang
   */
  lang: data?.lang || "en-US",

  /**
   * app description
   */
  desc: data?.desc || "",

  /**
   * app favicon
   */
  favicon: data?.favicon || "",

  /**
   * app base route
   */

  basename: data?.basename || "",

  /**
   * app stroage name
   */
  auth_session: import.meta.env.VITE_AUTH_SESSTION || "authSession",
};
export default settings;
