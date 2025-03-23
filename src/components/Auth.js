import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

export default function Auth() {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}
