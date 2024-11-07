export const fetchAlerts = async () => {


    try{
        const fetchResult = await fetch("https://api.warframestat.us/pc/alerts")
        const resultJson: MissionInterface[] = await fetchResult.json()
        return resultJson

    }catch(error){
        console.error(error)
    }
}

export interface MissionReward {
    items: [];
    countedItems: {
        count: number;
        type: string;
        key: string;
    }[];
    credits: number;
    asString: string;
    itemString: string;
    thumbnail: string;
    color: number;
}

export interface Mission {
    description: string;
    node: string;
    nodeKey: string;
    type: string;
    typeKey: string;
    faction: string;
    factionKey: string;
    reward: MissionReward;
    minEnemyLevel: number;
    maxEnemyLevel: number;
    maxWaveNum: number;
    nightmare: boolean;
    archwingRequired: boolean;
    isSharkwing: boolean;
    levelOverride: string;
    enemySpec: string;
    advancedSpawners: [];
    requiredItems: [];
    levelAuras: [];
}

export interface MissionInterface {
    id: string;
    activation: string;
    startString: string;
    expiry: string;
    active: boolean;
    mission: Mission;
    eta: string;
    rewardTypes: string[];
    tag: string;
}