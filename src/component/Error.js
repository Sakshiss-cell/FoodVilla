import React from 'react'

import { useRouteError } from 'react-router-dom';

const err=useRouteError();
console.log(err)
const Error=()=>{
    return(
        <div>{err.status}</div>
    )
}

export default Error;