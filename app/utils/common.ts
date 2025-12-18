export const formatObesityLevel =(level:string):string=>{
    switch(level){
        case "Insufficient_Weight":
            return "Insufficient Weight"
        case "Normal_Weight":
            return "Normal Weight"
        default:
            return "Unknown"        
    }
}