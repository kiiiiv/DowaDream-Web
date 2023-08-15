import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {useCallback} from "react";

const Login = ({ setUserInfo, setIsLogin }) => {
    const googleLogin = useCallback((response) => {
      if (!response.profileObj) {
        console.error("Failed to log into img");
        return;
      }
      const { profileObj } = response;
      const userInfo = {
        profileImg: profileObj.imageUrl || "",
        email: profileObj.email || "",
        name: profileObj.name || "",
        

      };
      console.log(profileObj);
      setUserInfo(userInfo);
      setIsLogin(true);
    }, []);

    return (
        <GoogleOAuthProvider clientId="263882411657-kanoto1m439tbjmhahgc0hgv9u58t451.apps.googleusercontent.com">
            <GoogleLogin                
                buttonText="Login"
                onSuccess={googleLogin}
                onFailure={(res) => console.log("Failed to log in")}
                cookiePolicy={'single_host_origin'}
                />
        </GoogleOAuthProvider>
    );
}
export default Login;