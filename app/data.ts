


export const getWorldstateData = async ()=> {
    try{
        const result: any = await fetch("https://api.warframestat.us/pc/")
        const responseJson = await result.json()//convert response object to json
        //console.log(responseJson)
    }catch(error){
        console.log(error)
    }
}


