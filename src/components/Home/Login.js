import useGoogleLogin from "@react-oauth/google";
import {useCallback} from "react";

const Login = ({setUserInfo, setIsLogin}) => {

    const googleLogin = useCallback((response) => {
        const userInfo = {
            profileImg: response.profileObj.imageUrl,
            email: response.profileObj.email,
            name: response.profileObj.name
        }
        setUserInfo(userInfo);
        setIsLogin(true);
    }, [])

    return (
        <useGoogleLogin
            clientId="263882411657-kanoto1m439tbjmhahgc0hgv9u58t451.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={googleLogin}
            onFailure={(res) => console.log(res)}
            cookiePolicy={'single_host_origin'}/>
    );
}
export default Login;