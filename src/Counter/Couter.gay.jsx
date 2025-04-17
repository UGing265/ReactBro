import React,{useState} from "react";
import './Couter.gay.jsx';
function Couter(){
    
    const [num, setNum] = useState(0);
    

    const increment = () => {
        setNum(num+1)
    }

    const decrement = () => {
        setNum(num-1)
    }

    const reset = () => {
        setNum(0)
    }


    return(
        <>
        <p>{num}</p>
        <button onClick={increment}>increment</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrement}>decrement</button>
        </>
    );

}

export default Couter