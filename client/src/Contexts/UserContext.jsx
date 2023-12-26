import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../URL";
export const UserContext = createContext(null);

function UserDetails({children}){
    const [userDetails,setUserDetails] = useState(null);
    useEffect(()=>{
        if(!userDetails){
            axios.get(`${baseUrl}/profile`,{withCredentials:true}).then((res)=>{
                setUserDetails(res.data)
            })
        }
    }, [userDetails])
    return(
        <UserContext.Provider value={{userDetails,setUserDetails}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserDetails;