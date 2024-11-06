'use client'

import { bountyInfo } from "@/app/lib/data/fetchSyndicates"


interface bountyProps{
    Ostron: bountyInfo | null
    Solaris: bountyInfo| null
    Entrati: bountyInfo | null
}

export default function BountiesList(  {Ostron, Solaris, Entrati}:bountyProps){

    if(Ostron && Solaris && Entrati){
        return (
            <ul className="flex-col w-3/4 items-center ">
                <li className="flex-col ">

                        <h1 className="text-white text-2xl text-left font-bold">Ostron</h1> 
                        <h1 className="text-white text-xl text-left">{Ostron?.reward}</h1>
                        <h2 className="text-white text-right">T{Ostron?.tier}</h2>
                </li>
                <li className="flex-col ">

                        <h1 className="text-white text-2xl text-left  font-bold">Solaris</h1> 
                        <h1 className="text-white text-xl text-left">{Solaris?.reward}</h1>
                        <h2 className="text-white text-right">T{Solaris?.tier}</h2>
                </li>
                <li className="flex-col ">

                        <h1 className="text-white text-2xl text-left  font-bold">Entrati</h1> 
                        <h1 className="text-white text-xl text-left">{Entrati?.reward}</h1>
                        <h2 className="text-white text-right">T{Entrati?.tier}</h2>
                </li>
            </ul>
        )
    }else return <div></div>
}
