export type ThemeType = "dark" | "light" | "auto";

export type TSkins = "skin1" | "skin2" | "skin3" | "skin4" | "skin5" | "skin6";

export type BoxLayout = "boxed" | "full"; //boxed , full

export type ThemeLayout = "horizontal" | "vertical";

export type SidebarPosition = "fixed" | "position" | "absolute" | "relative";

export type HeaderPosition = "fixed" | "position" | "absolute" | "relative";

export type SidebarType =
  | "full"
  | "mini-sidebar"
  | "stylish"
  | "iconbar"
  | "overlay"; //['full', 'stylish', 'mini-sidebar' , 'iconbar' , 'overlay']

export type ThemeconfigType = {
  theme: ThemeType;
  themeSkin: TSkins;
  boxLayout: BoxLayout;
  themeLayout: ThemeLayout;
  sidebarType: SidebarType;
  sidebarPosition: SidebarPosition;
  headerPosition: HeaderPosition;
  switchTheme: (theme: ThemeType) => void;
  setThemeSkin: (skin: TSkins) => void;
  setBoxLayout: (boxLayout: BoxLayout) => void;
  setThemeLayout: (layout: ThemeLayout) => void;
  setSidebarType: (type: SidebarType) => void;
  setSidebarPosition: (position: SidebarPosition) => void;
  setHeaderPosition: (position: HeaderPosition) => void;
};

export type PreferenceProps = ThemeconfigType;
