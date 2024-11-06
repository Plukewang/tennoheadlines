import { fetchBounties } from "./data/fetchSyndicates"
import { sortBounties } from "./data/fetchSyndicates"
interface mission{
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

export interface bounty{
    missionType: string,
    tier: string,
    eta: string,
    isHard: boolean
}


export function parseVoidFissures(missions: mission[]): Array<bounty[]>{
    let lithFissures: bounty[] = []
    let mesoFissures: bounty[] = []
    let neoFissures: bounty[] = []
    let axiFissures: bounty[] = []
    let kuvaFissures: bounty[] = []
    let omniaFissures: bounty[] = []



    //loop through missions prioritizing exterminates, captures, and rescues. If not those, then just add whatever to the list. bounty[0] for easy, bounty[1] for hard
    for(let mission of missions){
        if(mission.isStorm===true) continue//skip void storms
        switch(mission.tier){
            case("Lith"):
                if(!lithFissures[0]&& mission.isHard===false){
                    lithFissures[0] = mission
                }else if (lithFissures[0]){
                    if(lithFissures[0].missionType!=="Exterminate" && lithFissures[0].missionType!=="Rescue" && lithFissures[0].missionType!=="Capture" && mission.isHard===false ){
                        lithFissures[0] = mission
                    }
                }

                if(!lithFissures[1]&&mission.isHard===true){
                    lithFissures[1] = mission
                }else if (lithFissures[1]){
                    if(lithFissures[1].missionType!=="Exterminate" && lithFissures[1].missionType!=="Rescue" && lithFissures[1].missionType!=="Capture"&& mission.isHard===true ){
                        lithFissures[1] = mission
                    }
                }
                break

            case("Meso"):
                if(!mesoFissures[0]&&mission.isHard===false){
                    mesoFissures[0] = mission
                }else if (mesoFissures[0]) {
                    if(mesoFissures[0].missionType!=="Exterminate" && mesoFissures[0].missionType!=="Rescue" && mesoFissures[0].missionType!=="Capture"&&mission.isHard===false){
                        mesoFissures[0] = mission
                    }
                }

                if(!mesoFissures[1] &&mission.isHard===true){
                    mesoFissures[1] = mission
                }else if (mesoFissures[1]){
                    if(mesoFissures[1].missionType!=="Exterminate" && mesoFissures[1].missionType!=="Rescue" && mesoFissures[1].missionType!=="Capture"&&mission.isHard===true ){
                        mesoFissures[1] = mission
                    }
                }
                break

            case("Neo"):
                if(!neoFissures[0]&&mission.isHard===false){
                    neoFissures[0] = mission
                }else if (neoFissures[0]){
                    if(neoFissures[0].missionType!=="Exterminate" && neoFissures[0].missionType!=="Rescue" && neoFissures[0].missionType!=="Capture" &&mission.isHard===false){
                        neoFissures[0] = mission
                    }
                }

                if(!neoFissures[1] &&mission.isHard===true){
                    neoFissures[1] = mission
                }else if (neoFissures[1]){
                    if(neoFissures[1].missionType!=="Exterminate" && neoFissures[1].missionType!=="Rescue" && neoFissures[1].missionType!=="Capture"&&mission.isHard===true ){
                        neoFissures[1] = mission
                    }
                }
                break

            case("Axi"):
                if(!axiFissures[0]&&mission.isHard===false){
                    axiFissures[0] = mission
                }else if (axiFissures[0]){
                    if(axiFissures[0].missionType!=="Exterminate" && axiFissures[0].missionType!=="Rescue" && axiFissures[0].missionType!=="Capture" &&mission.isHard===false){
                        axiFissures[0] = mission
                    }
                }

                if(!axiFissures[1] &&mission.isHard===true){
                    axiFissures[1] = mission
                }else if (axiFissures[1]){
                    if(axiFissures[1].missionType!=="Exterminate" && axiFissures[1].missionType!=="Rescue" && axiFissures[1].missionType!=="Capture" &&mission.isHard===true){
                        axiFissures[1] = mission
                    }
                }
                break

            case("Kuva"):
                if(!kuvaFissures[0]&&mission.isHard===false){
                    kuvaFissures[0] = mission
                }

                if(!kuvaFissures[1] &&mission.isHard===true){
                    kuvaFissures[1] = mission
                }
                break

            case("Omnia"):
                if(!omniaFissures[0]&&mission.isHard===false){
                    omniaFissures[0] = mission
                }

                if(!omniaFissures[1] &&mission.isHard===true){
                    omniaFissures[1] = mission
                }
                break


            default: break
        }
    }

    return [lithFissures,
            mesoFissures,
            neoFissures,
            axiFissures,
            kuvaFissures,
            omniaFissures,]
} 


