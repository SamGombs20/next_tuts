type PersonalDetails ={
    gender:string
    familyHistory:string
    age:string
    height:string
    weight:string
}
type EatingHabits={
    caloriesIntake:string
    dailyMeals:string
    vegetableIntake:string
    snackIntake:string
}
type DailyActivity1={
    waterIntake:string
    calorieMonitoring:string
    smoke:string
    alcohol:string
}
type DailyActivity2={
    physicalActivity:string
    technologyUse:string
    transportMeans:string
}
type Obesity ={
    gender: string;
    familyHistory: string;
    age: string;
    height: string;
    weight: string;
    caloriesIntake: string;
    dailyMeals: string;
    vegetableIntake: string;
    snackIntake: string;
    waterIntake: string;
    calorieMonitoring: string;
    smoke: string;
    alcohol: string;
    physicalActivity: string;
    technologyUse: string;
    transportMeans: string;
    
}
type APIInput ={
    Gender:string
    Age:number
    Height:number
    Weight:number
    family_history_with_overweight:string
    FAVC:string
    FCVC:number
    NCP:number
    CAEC:string
    SMOKE:string
    CH2O:number
    SCC:string
    FAF:number
    TUE:number
    CALC:string
    MTRANS:string
}
type PredictionRespone ={
    prediction:string
}
type RecommendationResponse ={
    recommendation:string
}