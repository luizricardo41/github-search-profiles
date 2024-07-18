import React, { createContext, useContext, useState } from "react";

export type StateUser = {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean;
  html_url: string;
  id: number;
  location: string;
  login: string | undefined;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
  updated_at: string;
  url: string;
}

export type StateRepo = {
  name: string;
  stargazes_count: number,
  url: string;
}

export type State = {
  user: StateUser;
  repos: StateRepo[];
}

interface ChildrenProps {
  children: React.ReactNode;
}

interface ProfileContext {
  profile: State;
  setProfile: React.Dispatch<React.SetStateAction<State>>
}

export const profileContext = createContext<ProfileContext>({} as ProfileContext);


export function ProfileProvider({ children }: ChildrenProps) {
  const [profile, setProfile] = useState<State>({} as State);

  return (
    <profileContext.Provider
      value={{
        profile,
        setProfile
      }}
    >
      {children}
    </profileContext.Provider>
  )
}

export function useProfile() {
  const context = useContext(profileContext);

  return context;
}
