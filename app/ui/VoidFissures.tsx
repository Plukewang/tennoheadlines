
'use client'
import { fetchVoidFissures } from "../lib/data/fetchVoidFissures";
import { parseVoidFissures } from "../lib/missionParser";
import ToggleDifficulty from "./components/difficultyToggle";
import { Suspense, useEffect, useState } from "react";
import FissureSkeleton from "./skeletons/FissuresSkeleton";

export default function VoidFissures(){
    
    const [fissures, setFissures] = useState<any>(null)

    const processFissures = async ()=>{
        try{
            const result =  await fetchVoidFissures()
            const topFissures = parseVoidFissures(result)
            setFissures(topFissures)
        }catch(error){
            console.log(error)
        }
        
    }
    useEffect(()=>{
        processFissures()
    }, [])
    //gets just the void trader data. 
    //We need the expiry and activation params
    //console.log(fissureData)

    //console.log(topFissures[1])

    
    return (
        <Suspense    
        >
            <ToggleDifficulty 
                fissures={fissures}
            />
        </Suspense>
        
    )
}