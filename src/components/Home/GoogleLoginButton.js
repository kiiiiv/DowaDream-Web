import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import axios from "axios";
import jwtDecode from "jwt-decode";
const clientId = '214705602138-tjmdhrgj1oq2ckdjcqo4njph250u5m0c.apps.googleusercontent.com'


const token = ""; 
export function GoogleLoginButton({LoginSuccess}) {
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={LoginSuccess}
          onFailure={(err) => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}