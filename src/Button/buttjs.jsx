

//event click
function button_click(){

    const handleClick = () => console.log("FUCKYOU");

    const handleClick2 = (name) => console.log(`${name} hey hey`);

    //handle condition
    let count = 0;
    const handleClick3 = (name) => {
        if(count < 3){
            count++
            console.log(`${name} keep it ${count}`);
        }
        else if(count > 2 && count < 8){
            count++
            console.log(`${name} ok now you have to stop click ${count}`);
        }
        else{
            count++
            console.log(`${name} AAAAAAAAAAAAAAAAAah STOOOPP CLICK ${count}`)
        }
    }




    //event include action, date, where, how,...
    //event = e

    const event = (e) => {console.log(e)}


    //add feature in e
     const changeNameEvent = (e) => {e.target.textContent = "HOLY MOMO"; }
     //const changeLinkEvent = (e) => {e.target.baseURI = "https://chatgpt.com/"; console.log(e)}



    return(
        <>
        <button onClick={(e) => event(e)}>kill me</button>
        <button onClick={(e) => changeNameEvent(e)}>CLICK NAME</button>
        {/* <button onDoubleClick={(e) => changeLinkEvent(e)}>CLICK LINK</button> */}
        </>
    );
}

export default button_click