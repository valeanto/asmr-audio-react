import React from "react";
import { useGoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "734109086152-t8s3b90afs2pp426et6mu98j254bjkvb.apps.googleusercontent.com";

function Login() {
  let history = useHistory();
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);

    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );

    // refreshTokenSetup(res);

    //  history.push("/random");
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢 `);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <button onClick={signIn} className="login-button">
      <h3 className="buttonText title">Login</h3>
    </button>
  );
}

export default Login;
