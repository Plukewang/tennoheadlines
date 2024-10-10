import { fetchVoidTrader } from "../lib/data/fetchVoidTrader";



export default async function VoidTrader(){
    //gets just the void trader data. 
    const voidTraderData = await fetchVoidTrader()
    //We need the expiry and activation params
    const now = new Date()
    const timeString = new Date(voidTraderData.active===true? voidTraderData.expiry:voidTraderData.activation) //arrival or leaving date

    let timeDiff = (timeString.getTime() - now.getTime())/(1000) //time difference in seconds
    const daysDiff = Math.floor(timeDiff/(3600*24))//diffference in days
    timeDiff-=daysDiff*3600*24
    const hoursDiff = Math.floor(timeDiff/(3600))

    const parsedTimeString = " " + daysDiff + " Days and " + hoursDiff + " Hours"
    return (
        <div className="flex-col text-center items-center">
            <h1 className="text-white text-lg">{voidTraderData.active===true? "Leaves": "Arrives"} in {parsedTimeString}</h1>
            <h2 className="text-white">at</h2>
            <h1 className="text-white text-lg font-bold">{voidTraderData.location}</h1>
        </div>
    )
}