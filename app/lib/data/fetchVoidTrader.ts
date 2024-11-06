export const fetchVoidTrader = async () => {
    //TODO: void trader json type to replace implicit any type above.

    try{//fetch viod trader status from warframe api and return the relevant data
        const fetchResult = await fetch("https://api.warframestat.us/pc/voidTrader")
        const resultJson:trader = await fetchResult.json()

        return resultJson

    }catch(error){
        console.error(error)
    }
}

export interface trader {
    id: string;
    activation: string;
    startString: string;
    expiry: string;
    active: boolean;
    character: string;
    location: string;
    inventory: [];
    psId: string;
    endString: string;
    initialStart: string;
    schedule: [];
}