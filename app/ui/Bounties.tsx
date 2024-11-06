'use client'
import { useEffect, useState } from "react";
import { bountyInfo, bountyList, deimosBounties, fetchBounties, solarisBounties } from "../lib/data/fetchSyndicates"
import { OstronBounties } from "../lib/data/fetchSyndicates"
import BountiesList from "./components/bountiesList";


export default function Bounties(){
    //streams all the faction bounties separated by faction
    const [bountyData, setBountyData] = useState<bountyInfo[]| null>(null)

    const getBountyData = async () =>{
        try{
             const bountyData = await fetchBounties()
             if(bountyData){
                const ostronInfo = OstronBounties(bountyData.ostron[0]) 
                const solarisInfo = solarisBounties(bountyData.solaris[0])
                const deimosInfo = deimosBounties(bountyData.entrati[0])

                if(ostronInfo && solarisInfo && deimosInfo){
                        setBountyData([ostronInfo, solarisInfo, deimosInfo])
                }
                
             }
        }catch(error){
                console.log(error)
        }
    }

    useEffect(()=>{
        getBountyData()
    },[])
    
    const now = new Date().getTime() / 1000;

    
    //console.log(ostronInfo)
    return (
            <BountiesList 
                Ostron={bountyData?.[0] || null}
                Solaris={bountyData?.[1] || null}
                Entrati={bountyData?.[2] || null}
            />
    )
}