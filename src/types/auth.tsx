export type AuthType = "google" | "facebook" | "twitter" | null;

export type UserProps = {
  user_id: string;
  name: string;
  email: string;
  picture: string;
  authType?: AuthType;
} | null;

export type AuthProps = {
  isLogin: boolean;
  user: UserProps;
  authType: AuthType;
  setAuthType: (authType: AuthType) => void;
  onAuthLogin: (authType: AuthType, user: UserProps) => UserProps;
  onLogout: () => void;
};
