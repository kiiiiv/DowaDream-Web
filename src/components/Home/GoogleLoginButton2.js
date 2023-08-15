import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import { gapi } from "gapi-script";
import {useCallback, useEffect} from "react";
const clientId="263882411657-kanoto1m439tbjmhahgc0hgv9u58t451.apps.googleusercontent.com"
const GoogleLoginButton2 = ({ onSocial}) => {
    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId
            });
        }
        gapi.load('client:auth2', start);
    },[]);
    const onSuccess=(response)=>{
        console.log(response);
    }
    const onFailure=(response)=>{
        console.log(response);
    }
    
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin                
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                />
        </GoogleOAuthProvider>
    );
}
export default GoogleLoginButton2;