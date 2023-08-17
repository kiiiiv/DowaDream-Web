import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import axios from "axios";
import jwtDecode from "jwt-decode";

const clientId = '214705602138-tjmdhrgj1oq2ckdjcqo4njph250u5m0c.apps.googleusercontent.com'

/*const onSuccess = (credentialResponse) => {
  console.log(credentialResponse);
  const token = jwtDecode(credentialResponse.credential);
  console.log(1);

  return token;
}*/
const token = ""; 
export function GoogleLoginButton({onSuccess}) {
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        
        <GoogleLogin
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={(err) => {
            console.log(err);
          }}
        />

      </GoogleOAuthProvider>
    </>
  );
}