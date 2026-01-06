export const formatObesityLevel =(level:string):string=>{
    switch(level){
        case "Insufficient_Weight":
            return "Insufficient Weight"
        case "Normal_Weight":
            return "Normal Weight"
        case "Overweight_Level_I":
            return "Overweight Level I"
        case "Overweight_Level_II":
            return "Overweight Level II"
        case "Obesity_Type_I":
            return "Obesity Type I"
        case "Obesity_Type_II":
            return "Obesity Type II"
        case "Obesity_Type_III":
            return "Obesity Type III"
        default:
            return "Unknown"        
    }
}
export const truncateText = (text:string, limit:number):string=>{
    if(!text) return ""

    if(text.length <=limit) return text

    const trimmed = text.slice(0,limit)

    return trimmed.slice(0, trimmed.lastIndexOf(" ")) + "..."
}
export const formatDate = (isoDate:string):string=>{
    const date = new Date(isoDate)
    return date.toLocaleDateString("en-US",{
        year:'numeric',
        month:'long',
        day:'numeric'
    })

}