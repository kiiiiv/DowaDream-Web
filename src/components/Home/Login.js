import {useGoogleLogin} from "@react-oauth/google";
import {useCallback} from "react";

const Login = ({setUserInfo, setIsLogin}) => {

    const onSuccess = useCallback((response) => {
        const userInfo = {
            profileImg: response.profileObj.imageUrl,
            email: response.profileObj.email,
            name: response.profileObj.name
        }
        setUserInfo(userInfo);
        setIsLogin(true);
    }, [])

    const {signIn} = useGoogleLogin({
        clientId: "263882411657-kanoto1m439tbjmhahgc0hgv9u58t451.apps.googleusercontent.com",
        onSuccess,
        onFailure: (response) => {console.log(response)},
        scope: 'profile email',
        longtitle: true,
        cookiePolicy: 'single_host_origin',
        buttonText: 'Login'
    })

    return (
        <button onClick={signIn}>
            Login
        </button>
    );
}
export default Login;