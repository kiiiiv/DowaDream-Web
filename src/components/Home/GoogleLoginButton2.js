import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import jwtDecode from "jwt-decode";
const clientId = '263882411657-kanoto1m439tbjmhahgc0hgv9u58t451.apps.googleusercontent.com'
const onGoogleSignInSuccess = (res) => {
  const params = new URLSearchParams();
    params.append("idToken", res.tokenObj.id_token);

    const googleLogin = async () => {
      const res = await axios.post("요청 주소", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      localStorage.setItem("accessToken", res.data.token.access);
      localStorage.setItem("refreshToken", res.data.token.refresh);
    };

    googleLogin();
  
}
const token = ""; 
export function GoogleLoginButton({onSuccess}) {
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={onSuccess}
          onFailure={(err) => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}