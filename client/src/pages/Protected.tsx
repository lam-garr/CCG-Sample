import React, { useState, useEffect} from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected(){

    //handle if token sent to api is validated
    const [ validated, setValidated ] = useState(false);

    //handle waiting for response from api
    const [ fetching, setFetching ] = useState(true);

    useEffect(() => {
        const validate = async () => {
            const data = window.localStorage.getItem("AccessToken");

            let dataToken;

            if(data) dataToken = JSON.parse(data);

            const response = await fetch("/api/validate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${dataToken}`
                }
            });

            const responseObj = await response.json();

            if(!responseObj.response){
                setFetching(false);
            }else{
                setValidated(true);
                setFetching(false);
            }
        }
        setValidated(true);//*
        setFetching(false)
        //validate();
    }, [])

    if(fetching) return null;

    return validated ? <Outlet/> : <Navigate to="/log-in"/>;
}

export default Protected;