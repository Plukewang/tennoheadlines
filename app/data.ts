


export const getWorldstateData = async ()=> {
    try{
        const result: any = await fetch("https://api.warframestat.us/pc/")
        const responseJson = await result.json()//convert response object to json
        return responseJson
    }catch(error){
        console.log(error)
    }
}


