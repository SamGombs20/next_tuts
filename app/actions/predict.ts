import { predict, recommendation } from "../api/api";

export const predictAction = async(input:APIInput)=>{
    return await predict(input)
}

export const recommendationAction = async(input:APIInput)=>{
    return await recommendation(input)
}