'use client'
import { fetchVoidTrader, trader } from "../lib/data/fetchVoidTrader";
import { useEffect, useState } from "react";


export default function VoidTrader(){
    //gets just the void trader data. 
    const [traderData, setTraderData] = useState<trader | null>(null)
    const fetchVoid = async () =>{
        const voidTraderData = await fetchVoidTrader()
        
        try{
            if(voidTraderData){
                setTraderData(voidTraderData)
                return voidTraderData
            }
            
        }catch(error){
            console.log(error)
            return null
        }
    }
    useEffect(()=>{
        fetchVoid()
    }, [])
    
    //We need the expiry and activation params

    return (
        <div className="flex-col text-center items-center">
            <h1 className="text-white text-lg">{traderData?.active===true? "Leaves": "Arrives"} in {traderData?.endString}</h1>
            <h2 className="text-white">at</h2>
            <h1 className="text-white text-lg font-bold">{traderData?.location}</h1>
        </div>
    )
}