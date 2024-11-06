
'use client'
import { fetchVoidFissures, voidFissure } from "../lib/data/fetchVoidFissures";
import { bounty, parseVoidFissures } from "../lib/missionParser";
import ToggleDifficulty from "./components/difficultyToggle";
import { Suspense, useEffect, useState } from "react";
import FissureSkeleton from "./skeletons/FissuresSkeleton";

export default function VoidFissures(){
    
    const [fissures, setFissures] = useState<bounty[][] >([])

    const processFissures = async ()=>{
        try{
            const result =  await fetchVoidFissures()
            if(result){
                const topFissures = parseVoidFissures(result)
                setFissures(topFissures)
            }
            
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