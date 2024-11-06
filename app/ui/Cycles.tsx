'use client'
import { fetchOpenWorlds } from "../lib/data/fetchOpenWorlds";
import { useEffect, useState } from "react";
import OpenWorldCycles from "./components/openWorldCycles";

export default function Cycles(){
    //gets just the void trader data. 
    const [cycleData, setCycleData] = useState<any>(null)
    const getCycles = async () =>{

        const openWorldData = await fetchOpenWorlds()

        try{
            setCycleData(openWorldData)
        }catch(error){
            console.log(error)
            return null
        }
    }
    useEffect(()=>{
        getCycles()
    }, [])
    
    //We need the expiry and activation params

    return (
        <div className="flex-row text-center items-center">

            <OpenWorldCycles 
                cycles={cycleData}
            />
        </div>
    )
}