export const fetchVoidFissures = async () => {

    try{//fetch fissure status and return the data.
        const fetchResult = await fetch("https://api.warframestat.us/pc/fissures")
        const resultJson: voidFissure[] = await fetchResult.json()

        return resultJson

    }catch(error){
        console.error(error)
    }
}

export interface voidFissure{
    id: string,
    activation: string,
    startString: string,
    expiry: string,
    active: boolean,
    node: string,
    missionType: string,
    missionKey: string,
    enemy: string,
    enemyKey: string,
    nodeKey: string,
    tier: string,
    tierNum: number,
    expired: boolean,
    eta: string,
    isStorm: boolean,
    isHard: boolean
    
}