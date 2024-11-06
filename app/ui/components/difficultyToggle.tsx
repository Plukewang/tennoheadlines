'use client'

import { MouseEventHandler, Suspense, useState } from "react"
import Image from "next/image"

import frame1 from "../../../public/Frame 4.svg"
import frame2 from "../../../public/Frame 5.svg"
import { bounty } from "@/app/lib/missionParser"
import {motion} from "framer-motion"
import FissureSkeleton from "../skeletons/FissuresSkeleton"
interface props{
    fissures: bounty[][]
} 

export default function ToggleDifficulty({fissures}: props){
    const [hardmode, setHardmode] = useState(false)

    const changeDifficulty = ()=>{
        setHardmode(!hardmode)
    }

    return(
        <Suspense fallback={<FissureSkeleton/>}>
            <div className="flex-col items-end">
                {fissures?.map((fissure, i)=>{
                    return (
                        <div key={i} className="flex-col items-end my-2">
                            <h1 className="text-white text-xl"> {fissure[hardmode===false? 0 : 1]?.missionType}   </h1>
                            <h1 className="text-white text-md">{fissure[hardmode===false? 0 : 1]?.eta}</h1>
                        </div>
                    )
                })}
                <button onClick={changeDifficulty}>
                    <div className="w-[62px] h-[30px] bg-[#404040] rounded-2xl">
                        <motion.div
                            animate={{x: hardmode===false? 0 : 25}}
                            transition={{type: 'tween', damping: 10, stiffness: 100,} }
                            
                        >
                            <Image 
                                src = {hardmode? frame2: frame1}
                                alt="button"                     
                            />
                        </motion.div>
                    </div>
                </button>
            </div>
        </Suspense>

    )

}