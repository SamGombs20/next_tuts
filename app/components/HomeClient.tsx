'use client'
import { useState } from "react"
import { predictAction, recommendationAction } from "../actions/predict"
import { formatObesityLevel } from "../utils/common"
import style from "../styles/home.module.css"
import Image from "next/image"
import { Box, Modal } from "@mui/material"
import { modalStyle } from "../styles/MUICustom"
import { PersonalDetailsModal } from "./PersonalDetailsModal"
import { EatingHabits } from "./EatingHabitsModal"
import { DailyActivity1 } from "./DailyActivity1Modal"
import { DailyActivity2 } from "./DailyActivity2Modal"
import { ResponseModal } from "./ModelResponseModal"

export const HomeClient = () => {
    const [open, setOpen] = useState(false)
    const [openResponse, setOpenResponse] = useState(false)
    const [checkNumber, setCheckNumber] = useState(0)
    const [predictionInfo, setPredictionInfo] = useState("")
    const [recommendationInfo, setRecommendationInfo] = useState("")
    const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
        gender: "",
        familyHistory: "",
        age: "",
        height: "",
        weight: ""
    })
    const [eatingHabits, setEatingHabits] = useState<EatingHabits>({
        caloriesIntake: "",
        dailyMeals: "",
        vegetableIntake: "",
        snackIntake: ""
    })
    const [dailyActivity1, setDailyActivity1] = useState<DailyActivity1>({
        waterIntake: "",
        calorieMonitoring: "",
        smoke: "",
        alcohol: ""
    })
    const [dailyActivity2, setDailyActivity2] = useState<DailyActivity2>({
        physicalActivity: "",
        technologyUse: "",
        transportMeans: ""
    })
    const [globalError, setGlobalError] = useState('')

    const onClickCheckComponent = (number: string) => {
        setGlobalError('')
        setCheckNumber(parseInt(number))
        setOpen(true)
    }

    const handleSave = () => {
        setOpen(false)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleCloseResponse = () => {
        setOpenResponse(false)
    }
    const handlePredict = async () => {
        const isPersonalComplete = Object.values(personalDetails).every(value => value !== '')
        const isEatingComplete = Object.values(eatingHabits).every(value => value !== '')
        const isActivity1Complete = Object.values(dailyActivity1).every(value => value !== '')
        const isActivity2Complete = Object.values(dailyActivity2).every(value => value !== '')

        if (!isPersonalComplete || !isEatingComplete || !isActivity1Complete || !isActivity2Complete) {
            setGlobalError("Please complete all the sections.")
            return;
        }
        setGlobalError('')
        const data: Obesity = { ...personalDetails, ...eatingHabits, ...dailyActivity1, ...dailyActivity2 }
        const apiInput: APIInput = {
            Gender: data.gender,
            Age: parseInt(data.age),
            Height: parseInt(data.height),
            Weight: parseInt(data.weight),
            family_history_with_overweight: data.familyHistory,
            FAVC: data.caloriesIntake,
            FCVC: parseInt(data.vegetableIntake),
            NCP: parseInt(data.dailyMeals),
            CAEC: data.snackIntake,
            SMOKE: data.smoke,
            CH2O: parseInt(data.waterIntake),
            SCC: data.calorieMonitoring,
            FAF: parseInt(data.physicalActivity),
            TUE: parseInt(data.technologyUse),
            CALC: data.alcohol,
            MTRANS: data.transportMeans
        }
        try {
            const pred = await predictAction(apiInput)
            const recommend = await recommendationAction(apiInput)
            setPredictionInfo(formatObesityLevel(pred.prediction))
            setRecommendationInfo(recommend.recommendation)
            setOpenResponse(true)
        }
        catch (e) {
            throw new Error("Couldn't process data")
        }
    }

    return (
        <>
            <div className={style.check_components_container}>

                <div className={style.check_components}>
                    <div className={style.check_component} onClick={() => onClickCheckComponent("0")}>
                        <Image
                            src="/personal_details.webp"
                            width={80}
                            height={80}
                            alt=""
                        />
                        <p className={`${style.check_component_title} gradient-text`}>Personal Details</p>
                    </div>
                    <div className={style.check_component} onClick={() => onClickCheckComponent("1")}>
                        <Image
                            src="/meal.webp"
                            width={80}
                            height={80}
                            alt=""
                        />
                        <p className={`${style.check_component_title} gradient-text`}>Eating Habits</p>
                    </div>
                    <div className={style.check_component} onClick={() => onClickCheckComponent("2")}>
                        <Image
                            src="/lifestyle_1.webp"
                            width={80}
                            height={80}
                            alt=""
                        />
                        <p className={`${style.check_component_title} gradient-text`}>Daily Activity & Lifestyle I</p>
                    </div>
                    <div className={style.check_component} onClick={() => onClickCheckComponent("3")}>
                        <Image
                            src="/lifestyle_2.webp"
                            width={80}
                            height={80}
                            alt=""
                        />
                        <p className={`${style.check_component_title} gradient-text`}>Daily Activity & Lifestyle II</p>
                    </div>
                </div>
                <div className={style.intro_image}>
                    <Image
                        src="/intro_pic.webp"
                        width={350}
                        height={350}
                        loading="eager"
                        alt=""
                    />
                </div>
            </div>
            {globalError && <p className="error-text">{globalError}</p>}
            <button onClick={handlePredict} className={style.check_btn}>Get Prediction</button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    {checkNumber === 0 && <PersonalDetailsModal data={personalDetails} setData={setPersonalDetails} onSave={handleSave} onClose={handleClose} />}
                    {checkNumber === 1 && <EatingHabits data={eatingHabits} onSave={handleSave} setData={setEatingHabits} onClose={handleClose} />}
                    {checkNumber === 2 && <DailyActivity1 data={dailyActivity1} setData={setDailyActivity1} onSave={handleSave} onClose={handleClose} />}
                    {checkNumber === 3 && <DailyActivity2 data={dailyActivity2} setData={setDailyActivity2} onSave={handleSave} onClose={handleClose} />}
                </Box>

            </Modal>
            <Modal open={openResponse} onClose={handleCloseResponse}>
                <Box sx={modalStyle}>
                    {predictionInfo && <ResponseModal prediction={predictionInfo} recommendation={recommendationInfo} close={handleCloseResponse} />}

                </Box>
            </Modal>
        </>
    );
}