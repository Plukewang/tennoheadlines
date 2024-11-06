export const fetchAlerts: any = async () => {
    //TODO: void trader json type to replace implicit any type above.

    try{//fetch viod trader status from warframe api and return the relevant data
        const fetchResult = await fetch("https://api.warframestat.us/pc/alerts")
        const resultJson = await fetchResult.json()
        return resultJson

    }catch(error){
        console.error(error)
    }
}