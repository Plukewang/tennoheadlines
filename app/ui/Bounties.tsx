import { deimosBounties, fetchBounties, solarisBounties } from "../lib/data/fetchSyndicates"
import { OstronBounties } from "../lib/data/fetchSyndicates"


export default async function Bounties(){
    //streams all the faction bounties separated by faction
    const bountyData = await fetchBounties()
    const now = new Date().getTime() / 1000;

    const ostronInfo = OstronBounties(bountyData.ostron[0])
    const solarisInfo = solarisBounties(bountyData.solaris[0])
    const deimosInfo = deimosBounties(bountyData.entrati[0])
    //console.log(ostronInfo)
    return (
            <ul className="flex-col w-3/4 items-center ">
                <li className="flex-col ">

                        <h1 className="text-white text-2xl text-left font-bold">Ostron</h1> 
                        <h1 className="text-white text-xl text-left">{ostronInfo?.reward}</h1>
                        <h2 className="text-white text-right">T{ostronInfo?.tier}</h2>
                </li>
                <li className="flex-col ">

                        <h1 className="text-white text-2xl text-left  font-bold">Solaris</h1> 
                        <h1 className="text-white text-xl text-left">{solarisInfo?.reward}</h1>
                        <h2 className="text-white text-right">T{solarisInfo?.tier}</h2>
                </li>
                <li className="flex-col ">

                        <h1 className="text-white text-2xl text-left  font-bold">Entrati</h1> 
                        <h1 className="text-white text-xl text-left">{deimosInfo?.reward}</h1>
                        <h2 className="text-white text-right">T{deimosInfo?.tier}</h2>
                </li>
            </ul>
    )
}