import {
  createUserAuth,
  signInWithGooglePopup,
} from "../../utilities/firebase.utitities";

const SignIn = () => {
  const loginUser = async () => {
    const { user } = await signInWithGooglePopup();

    createUserAuth(user);
  };
  return (
    <>
      <h1>Sign in Page</h1>
      <button onClick={loginUser}>Login</button>
    </>
  );
};

export default SignIn;
