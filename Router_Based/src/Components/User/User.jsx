import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {id} = useParams()
    return(
        <div className="bg-gray-500 pd-4 text-xl text-white">User: {id}</div>
    )
}
export default User