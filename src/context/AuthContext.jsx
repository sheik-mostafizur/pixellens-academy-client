import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import {createContext, useContext, useEffect, useState} from "react";
import {auth, googleProvider} from "../config/firebase.js";
import LoaderSpinner from "../components/LoaderSpinner";
import axiosURL from "../axios/axiosURL.js";

const UserContext = createContext({});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const uesAuthContext = () => useContext(UserContext);

const AuthContext = ({children}) => {
  // for theme start
  const [theme, setTheme] = useState("dark");
  const handleTheme = () => {
    document.querySelector("html body").setAttribute("data-theme", theme);
    setTheme(theme === "light" ? "dark" : "light");
  };
  // for theme end

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logInUserWithGoogle = async () =>
    await signInWithPopup(auth, googleProvider);

  const logOutUser = async () => await signOut(auth);

  // always check user is logged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      if (res?.email) {
        axiosURL
          .post("jwt", {
            params: {email: res?.email, name: res?.displayName},
          })
          .then((response) => {
            const token = response?.data;
            localStorage.setItem("access-token", token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      // if user is logged in successfully the loading stopped
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    loading,
    user,
    createUser,
    logInUser,
    logInUserWithGoogle,
    logOutUser,
    handleTheme,
    theme,
  };

  return (
    <UserContext.Provider value={userInfo}>
      {loading ? (
        <div className="flex h-screen flex-col items-center justify-center">
          <LoaderSpinner />
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

export default AuthContext;
