export const fetchBounties: any = async () => {//uses different API since the official warframe API is poopybutts : ((

    try{//fetch fissure status and return the data.
        const fetchResult = await fetch("https://api.tenno.tools/worldstate/pc/bounties")
        const resultJson = await fetchResult.json()

        const sortedResult = sortBounties(resultJson)

        return sortedResult

    }catch(error){
        console.error(error)
    }
}

interface bountyList{
    ostron: any[]
    solaris: any[]
    entrati: any[]
    holdfast: any[]
    cavia: any[]
}

export const sortBounties = (bounties: any) =>{
    const bountiesList: any[] = bounties.bounties.data//data of all of the actual bounties
    //console.log(bountiesList)
    let ostronBounties: any[] = [],
        solarisBounties: any[] = [],
        entratiBounties: any[] = [],
        holdfastBounties: any[] = [],
        caviaBounties: any[]= []

    for(let bounty of bountiesList){
        //console.log(bounty.syndicate)
        switch(bounty.syndicate){
            case "Ostron":
                ostronBounties.push(bounty)
                break
            case "Solaris United":
                solarisBounties.push(bounty)
                break
            case "Entrati":
                entratiBounties.push(bounty)
                break
            case "The Holdfasts":
                holdfastBounties.push(bounty)
                break
            case "Cavia":
                caviaBounties.push(bounty)
                break
            default:
        }
    }
    
    return {
        ostron: ostronBounties,
        solaris: solarisBounties,
        entrati: entratiBounties,
        holdfast: holdfastBounties,
        cavia: caviaBounties,
    }
}

export const OstronBounties = (bounties: any) =>{
    //bounties is of structure id, start, end, syndicate, jobs array. Look through jobs array
    //we can hardcode this since the rotations are fixed and thus so are the rewards.
    //console.log(bounties.jobs[0].rotation)
    switch(bounties.jobs[0].rotation){
        case "A": 
            return {tier: 3, reward: 'Vigilante Supplies'}
        case "B":
            return {tier: 4, reward: 'Augur Secrets'}
        case "C":
            return {tier: 5, reward: 'Aya'}
    }
}

export const solarisBounties = (bounties: any) =>{

    switch(bounties.jobs[0].rotation){
        case "A": 
            return {tier: 2, reward: 'Synth Deconstruct'}
        case "B":
            return {tier: 3, reward: 'Mecha Empowered'}
        case "C":
            return {tier: 3, reward: 'Tek Enhance'}
    }
}

export const deimosBounties = (bounties: any) =>{

    switch(bounties.jobs[0].rotation){
        case "A": 
            return {tier: 4, reward: 'Blood Rush'}
        case "B":
            return {tier: 5, reward: 'Aya'}
        case "C":
            return {tier: 4, reward: 'Blood Rush'}
    }
}

