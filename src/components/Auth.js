import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Auth = ({ user, setUser }) => {
  const handleLogin = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    setUser(result.user);
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={() => signOut(auth)}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Auth;
