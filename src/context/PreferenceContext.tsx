import { createContext, useContext, useState } from "react";
import { Children } from "../types/global";
import {
  BoxLayout,
  HeaderPosition,
  PreferenceProps,
  SidebarPosition,
  SidebarType,
  TSkins,
  ThemeLayout,
  ThemeType,
  ThemeconfigType,
} from "../types/preferences";
import { detectThemeSkin, getThemeStore } from "../utils/storage";

//initialState
const initialState: ThemeconfigType = {
  theme: getThemeStore(),
  themeSkin: detectThemeSkin(),
  boxLayout: "full",
  themeLayout: "vertical",
  sidebarType: window.screen.width < 768 ? "mini-sidebar" : "full",
  sidebarPosition: "fixed",
  headerPosition: "absolute",
  switchTheme: () => null,
  setThemeSkin: () => null,
  setBoxLayout: () => void 0,
  setThemeLayout: () => void 0,
  setSidebarType: () => void 0,
  setSidebarPosition: () => void 0,
  setHeaderPosition: () => void 0,
};

//preference initialization values
const PreferenceContext = createContext<PreferenceProps>(initialState);

// eslint-disable-next-line react-refresh/only-export-components
export function usePreference(): PreferenceProps {
  return useContext(PreferenceContext);
}

export default function Preference({ children }: { children: Children }) {
  const [theme, switchTheme] = useState<ThemeType>(initialState.theme);
  const [themeSkin, setThemeSkin] = useState<TSkins>(initialState.themeSkin);
  const [boxLayout, setBoxLayout] = useState<BoxLayout>(initialState.boxLayout);
  const [themeLayout, setThemeLayout] = useState<ThemeLayout>(
    initialState.themeLayout
  );
  const [sidebarType, setSidebarType] = useState<SidebarType>(
    initialState.sidebarType
  );
  const [sidebarPosition, setSidebarPosition] = useState<SidebarPosition>(
    initialState.sidebarPosition
  );
  const [headerPosition, setHeaderPosition] = useState<HeaderPosition>(
    initialState.headerPosition
  );

  return (
    <PreferenceContext.Provider
      value={{
        theme,
        themeSkin,
        boxLayout,
        themeLayout,
        sidebarType,
        sidebarPosition,
        headerPosition,
        switchTheme,
        setThemeSkin,
        setBoxLayout,
        setThemeLayout,
        setSidebarType,
        setSidebarPosition,
        setHeaderPosition,
      }}
    >
      {children}
    </PreferenceContext.Provider>
  );
}
