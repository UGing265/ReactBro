
import React,{useState} from "react";
function StateComponent(){

    let [name, setName] = useState("guest");
    let [age, setAge] = useState(0);
    let [isEmployeed, setIsEmployeed] = useState(false);
    
    const eventName = () =>{
        name = "GAY"; //này là biến
        console.log(name)
        setName("GAY");//này là function
    }

    const increaseAge = () =>{
        console.log(age)
        setAge(age+1);//này là function
    }


    const ToggleEmployee = () =>{
        
        console.log(!isEmployeed)
        setIsEmployeed(!isEmployeed);//này là function
    }


    return (
        <>
        <p>name: {name}</p>
        <button onClick={() => eventName()}> nameClick</button>

        <p>Age: {age}</p>
        <button onClick={() => increaseAge()}> ageClick</button>

        <p>Is employed: {isEmployeed ? "Yes" : "No"}</p>
        <button onClick={() => ToggleEmployee()}> isEmployeeClick</button>
        </>
    );    
}
export default StateComponent
