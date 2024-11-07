'use client'

export interface cetusCycle{
    id:string,
    activation: string,
    expiry: string,
    startString: string,
    active: boolean,
    isDay: boolean,
    state: string,
    timeLeft: string,
    isCetus: boolean,
    shortString: string
}

export interface vallisCycle{
    id:string,
    expiry: string,
    isDay: boolean,
    timeLeft: string,
    isWarm: boolean,
}

export interface cambionCycle{
    id:string,
    activation: string,
    expiry: string,
    active: boolean,
    state: string,
    timeLeft: string,
}

interface props {
    cycles: [cetusCycle, vallisCycle, cambionCycle] | null
}


export default function OpenWorldCycles({cycles}: props){
    const cycleList = cycles
    if(cycleList?.length) return (
    <ul className="flex flex-row text-white">
        <li className=" w-1/3">
            <h1>Cetus</h1>
            <h2 className="font-bold text-xl" > {cycleList[0].isDay? "Night" : "Day"} </h2>
            <h2>in {cycleList[0].timeLeft}</h2>
        </li>
        <li className=" w-1/3">
            <h1>Orb Vallis</h1>
            <h2 className="font-bold text-xl"> {cycleList[1].isWarm? "Cold" : "Warm"}</h2>
            <h2>in {cycleList[1].timeLeft}</h2>
        </li>
        <li className=" w-1/3">
            <h1>Cambion Drift</h1>
            <h2 className="font-bold text-xl"> {cycleList[2].state==='Vome' ? 'Fass': 'Vome'}</h2>
            <h2>in {cycleList[2].timeLeft}</h2>
        </li>
    </ul>)
    else return <div></div>

}
