'use client'
import { fetchAlerts } from "../lib/data/fetchAlerts";
import { useEffect, useState } from "react";
import AlertsList from "./components/alertsList";

export default function Alerts(){
    //gets just the void trader data. 
    const [alertData, setAlertData] = useState<any>(null)
    const getAlerts = async () =>{

        const alertData = await fetchAlerts()
        console.log(alertData.length)

        try{
            setAlertData(alertData)
            return alertData
        }catch(error){
            console.log(error)
            return null
        }
    }
    useEffect(()=>{
        getAlerts()
    }, [])
    
    //We need the expiry and activation params

    return (
        <div className="flex-col text-center items-center">

            <AlertsList 
                alerts={alertData}
            />
        </div>
    )
}