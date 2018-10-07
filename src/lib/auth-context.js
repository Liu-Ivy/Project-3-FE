import React from 'react';

export const authStore = {
  isLogged: false,
  user: {},
};

export const AuthContext = React.createContext(
  // authStore // default value
);

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;