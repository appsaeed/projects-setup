import { useEffect } from "react";
import settings from "../app/settings";

export default function useTitle(title: string, withName = false) {
  useEffect(() => {
    if (withName) {
      document.title = `${title} - ${settings.name}`;
    } else {
      document.title = title;
    }
  }, [title, withName]);
}
