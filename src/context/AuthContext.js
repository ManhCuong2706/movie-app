import {createContext, useContext, useEffect, useState} from 'react';
import {auth, db} from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {setDoc, doc} from 'firebase/firestore';

// Create Context
const AuthContext = createContext();

// Create provide function
export function AuthContextProvider({children}) {
  const [user, setUser] = useState({});

  // Handle sign up
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, 'users', email), {saveShows: []});
  }

  // Handle log in
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Handle log out
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{signUp, user, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
