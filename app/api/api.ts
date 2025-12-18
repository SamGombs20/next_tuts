const apiUrl = "https://obesityml.onrender.com"


export const predict = async(input:APIInput):Promise<PredictionRespone>=>{
    const res = await fetch(`${apiUrl}/predict`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(input)

    })
    if(!res.ok){
        throw new Error("Failed to get prediction")
    }
    return res.json()
    
}
export const recommendation = async(input:APIInput):Promise<RecommendationResponse>=>{
    const res = await fetch(`${apiUrl}/recommendation`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify(input)
    })
    if(!res.ok){
        throw new Error("Failed to get a recommendation")
    }
    return res.json()
}