import React,{ useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Sarok");

    const nameHandler = () =>{
        setName("Ali")
    }

    const clickHandler = () =>{
        setNumber(prevNumber => prevNumber + 1)
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={nameHandler}>Change Name</button>
            <h1>{number}</h1>
            <button onClick={clickHandler}>Up One</button>
        </div>
    );
};

export default Counter;