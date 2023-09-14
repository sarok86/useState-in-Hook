import React, { useState } from 'react';

const Array = () => {
     
    const [data, setData] = useState(["item"])

    return (
        <div>
            <button onClick={() => setData([...data,"new Item"])}>Add</button>
          <p>{JSON.stringify(data)}</p>   
        </div>
    );
};

export default Array;