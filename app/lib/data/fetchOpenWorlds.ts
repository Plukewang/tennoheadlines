import { cambionCycle, cetusCycle, vallisCycle } from "@/app/ui/components/openWorldCycles"

export const fetchOpenWorlds = async () => {
    //TODO: void trader json type to replace implicit any type above.

    try{//fetch viod trader status from warframe api and return the relevant data
        const cetusResult = await fetch("https://api.warframestat.us/pc/cetusCycle")
        const vallisResult = await fetch("https://api.warframestat.us/pc/vallisCycle")
        const cambionResult = await fetch("https://api.warframestat.us/pc/cambionCycle")

        const cetusJson: cetusCycle = await cetusResult.json()
        const vallisJson: vallisCycle = await vallisResult.json()
        const cambionJson: cambionCycle = await cambionResult.json()

        const resJson: [cetusCycle, vallisCycle, cambionCycle] = [cetusJson, vallisJson, cambionJson]

        return resJson

    }catch(error){
        console.error(error)
    }
}
