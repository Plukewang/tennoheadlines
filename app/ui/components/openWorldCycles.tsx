'use client'


export default function OpenWorldCycles(cycles: any){
    console.log(cycles)

    let cycleList = cycles.cycles
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
