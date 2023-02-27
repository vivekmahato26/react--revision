import { useState,useEffect } from 'react'

export default function State() {
    const [counter, setCounter] = useState(0);
    const [dep,setDep] = useState(true);
    useEffect(()=>{
        setCounter(500);

        return () => console.log("desrtoying component");

    },[dep])
    return (
        <div>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <br/>
            <button onClick={() => setDep(!dep)}>Update Dependency</button>
        </div>
    )
}
