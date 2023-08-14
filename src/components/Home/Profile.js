export const Profile = ({userInfo}) => {

    return(
        <>
            <div style={{
                width: "32px",
                height: "32px",
                borderRadius: "32px",
                background: `url(${userInfo.profileImg.replace("96", "32")})`}}
            />

        </>
    );
}