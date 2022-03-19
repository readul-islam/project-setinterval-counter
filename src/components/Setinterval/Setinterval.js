import React, { useEffect, useState } from 'react';

const Setinterval = () => {
let [counter, setCounter] = useState(1); 
useEffect(()=>{                          
    let id = setInterval(()=>{
       if(counter <= 2080){
        return setCounter(counter += 5);
         
       }
       else{
           clearInterval(id)
       }
    },5)

},[])
    return (
        <div>
            <h1>{counter}</h1>
        </div>
    );
};

export default Setinterval;