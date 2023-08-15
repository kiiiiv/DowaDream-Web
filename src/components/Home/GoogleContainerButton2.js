import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import jwtDecode from "jwt-decode";

const GoogleLoginButton2 = () => {
    const clientId = '263882411657-kanoto1m439tbjmhahgc0hgv9u58t451.apps.googleusercontent.com'
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={((credentialResponse: any)) => {
                        console.log(jwtDecode(credentialResponse.credential));
                    }}
                    onFailure={(err) => {
                        console.log("Login Failed");
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton2