
function ProfilePicture(){
    
    const imageLink = './ReactBro/src/assets/swedish.jpg';
    const deleteStyle = (e) => {e.target.style.display="none"}

    return(
        <img src={imageLink} alt="me" onClick={deleteStyle}/>
    );


}
export default ProfilePicture