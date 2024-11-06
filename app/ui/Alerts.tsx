'use client'
import { fetchAlerts, MissionInterface } from "../lib/data/fetchAlerts";
import { useEffect, useState } from "react";
import AlertsList from "./components/alertsList";

export default function Alerts(){
    //gets just the void trader data. 
    const [alertData, setAlertData] = useState<MissionInterface[] | null>(null)
    const getAlerts = async () =>{

        const alertData = await fetchAlerts()

        try{
            if(alertData){
                setAlertData(alertData)
                return alertData
            }
            
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