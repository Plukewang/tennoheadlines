'use client'

import { MissionInterface } from "@/app/lib/data/fetchAlerts"

interface props{
    alerts: MissionInterface[] | null
}

export default function AlertsList({alerts}: props){
    const alertList = alerts
    if (alertList) return (
        <ul className="my-3">
            {alertList.length ? alertList?.map((alert: MissionInterface, i: number)=>{

                return <li key = {i} className="my-3">
                    <h1 className = "text-white text-xl">{alert.mission.description}</h1>
                    <h2 className = "text-white text-md text-right">{alert.mission.node}</h2>
                    <h2 className = "text-white text-md text-right">ETA: {alert.eta}</h2>
                    <ul>
                        {
                            alert.rewardTypes.map((reward: string, i: number)=>{
                                return <h2 className = "text-white text-right text-md" key = {i}>{reward.charAt(0).toUpperCase() + reward.slice(1)}</h2>
                            })
                        }
                    </ul>
                </li>
            })
        :
        <ul>

        <h1 className = "text-white">Alert name</h1>
            <h1 className = "text-white">Alert Expiry</h1>
        </ul>
        } 
        </ul>
    ) 

    else return (
        <div>

        <h1 className = "text-white">Alert name</h1>
            <h1 className = "text-white">Alert Expiry</h1>
        </div>
    )
}
/*
            */