//@ts-nocheck
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  User,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../utils/firebase.utils";
interface CustomUser {
  token: string;
  user: User;
}

// Create a context for the authentication provider
interface AuthContextProps {
  user: CustomUser | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  // Add any other values or functions you want to expose
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<CustomUser | null>(null);
  async function login() {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = result.user;

      // IdP data available using getAdditionalUserInfo(result)
      // ...

      setUser({ user: user, token: token as string });
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      // The email of the user's account used.
      const email = error.customData.email;

      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setUser({ user, token });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Provide the auth context value to the children
  const contextValue: AuthContextProps = {
    user,
    login,
    logout,
    // Add any other values or functions you want to expose
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
