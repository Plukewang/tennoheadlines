export const fetchOpenWorlds: any = async () => {
    //TODO: void trader json type to replace implicit any type above.

    try{//fetch viod trader status from warframe api and return the relevant data
        const cetusResult = await fetch("https://api.warframestat.us/pc/cetusCycle")
        const vallisResult = await fetch("https://api.warframestat.us/pc/vallisCycle")
        const cambionResult = await fetch("https://api.warframestat.us/pc/cambionCycle")

        const cetusJson = await cetusResult.json()
        const vallisJson = await vallisResult.json()
        const cambionJson = await cambionResult.json()
        return [cetusJson, vallisJson, cambionJson]

    }catch(error){
        console.error(error)
    }
}