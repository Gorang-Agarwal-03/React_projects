import React, { useEffect, useState } from "react";

function GitHub(){
    const[data,setData] = useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setData(data)
            
        })
    } ,[])
    return(
        <div className="text-center m-4 p-3 text-white bg-gray-500 text-xl">GitHub Followers : {data.followers}</div>
    )
}
export default GitHub