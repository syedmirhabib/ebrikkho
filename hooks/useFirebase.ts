
    import { useEffect, useState } from "react";
    import {
      signInWithPopup,
      getRedirectResult,
 signInWithRedirect, 
      GoogleAuthProvider,
signInWithEmailAndPassword 
 createUserWithEmailAndPassword,

      getAuth,
      User,
    } from "firebase/auth";
    import firebaseInit from "../firebase/firebase.init";
    
    interface AuthMethods {
      signInWithGoogle?: (usePopup?: boolean) => Promise<void>;
      signInWithFacebook?: (usePopup?: boolean) => Promise<void>;
      signInWithGitHub?: (usePopup?: boolean) => Promise<void>;
      signInWithEmailAndPassword?: (email: string, password: string) => Promise<void>;
      signUpWithEmailAndPassword?: (email: string, password: string) => Promise<void>;
      signOut: () => Promise<void>;
    }
    
    const useFirebaseAuth = (): { user: User | null } & AuthMethods => {
      firebaseInit();
      const [user, setUser] = useState<User | null>(null);
      console.log(user);
      const auth = getAuth();
    
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            setUser(authUser);
          } else {
            setUser(null);
          }
        });
    
        return () => unsubscribe();
      }, [auth]); 
    
      
      
      const signInWithGoogle = async (usePopup = true): Promise<void> => {
        const provider = new GoogleAuthProvider();
        if (usePopup) {
          await signInWithPopup(auth, provider);
        } else {
          await signInWithRedirect(auth, provider);
        }
      };
      
undefined

      
    
      useEffect(() => {
      const handleRedirectResult = async (): Promise<void> => {
        try {
          const result = await getRedirectResult(auth);
          if (result?.user) {
            setUser(result?.user);
          }
        } catch (error) {
          console.error("Error handling redirect:", error);
        }
      };
  
      handleRedirectResult();
    }, [auth]);
    
     
    
      const signOut = async (): Promise<void> => {
        try {
          await auth.signOut();
        } catch (error) {
          console.error("Error signing out:", error);
        }
      };
    
      return {
        user, 
        signInWithGoogle,
signInWithEmailAndPassword 
 signUpWithEmailAndPassword,

        signOut,
      };
    };
    
    export default useFirebaseAuth;
  
  