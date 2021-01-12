import React, { useState, useEffect } from 'react';
import firebase, { auth } from '../firebaseEntity';


export const AuthContext = React.createContext<firebase.User | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AuthWrapper: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((next) => {
      setUser(next);
    });

    return () => {
      unsub();
    };
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
