import { ReactChild, ReactFragment, ReactPortal } from "react";

function ReuseComponent(props:any)
{
    console.log(props);
    
    return(
        <div>
        <span>User: {props.data.name}</span>
        <span>User:{props.data.email}</span>
        <span>User: {props.data.contact}</span>
        </div>

    )
}

export default ReuseComponent;