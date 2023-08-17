import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import axios from "axios";
import jwtDecode from "jwt-decode";
const clientId = '263882411657-kanoto1m439tbjmhahgc0hgv9u58t451.apps.googleusercontent.com'
/*const onSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  const token = jwtDecode(credentialResponse.credential);
  console.log(1);
  return token;
  
}*/

const token = ""; 
export function GoogleLoginButton({handleGoogleLoginSuccess}) {
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onFailure={(err) => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}