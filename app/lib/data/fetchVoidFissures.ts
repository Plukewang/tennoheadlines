export const fetchVoidFissures: any = async () => {
    //TODO: void trader json type to replace implicit any type above.

    try{//fetch fissure status and return the data.
        const fetchResult = await fetch("https://api.warframestat.us/pc/fissures")
        const resultJson = await fetchResult.json()

        return resultJson

    }catch(error){
        console.error(error)
    }
}