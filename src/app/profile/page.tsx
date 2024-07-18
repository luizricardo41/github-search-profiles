import React from 'react'
import { ProfileProvider } from '../hooks/useProfile'

export default function profile() {
  return (  
    <ProfileProvider>
      <h1>Perfil do Usuário.</h1>
    </ProfileProvider>
  ) 
}
