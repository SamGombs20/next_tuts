'use client'
import { GiAwareness, GiMeal } from "react-icons/gi"
import style from "./styles/home.module.css"
import { BsPersonCircle } from "react-icons/bs"
import { PiPersonSimpleBikeFill } from "react-icons/pi"
import Image from "next/image"
import { Box, Modal, Step, StepButton, StepLabel, Stepper } from "@mui/material"
import { modalStyle, stepperStyle } from "./styles/MUICustom"
import { PersonalDetailsModal } from "./components/PersonalDetailsModal"
import { useState } from "react"
import { EatingHabits } from "./components/EatingHabitsModal"
import { DailyActivity1 } from "./components/DailyActivity1Modal"
import { DailyActivity2 } from "./components/DailyActivity2Modal"
import { predict, recommendation } from "./api/api"
import { formatObesityLevel } from "./utils/common"
import { ResponseModal } from "./components/ModelResponseModal"
import { TbTreadmill } from "react-icons/tb"
import { MdSportsGymnastics } from "react-icons/md"
export default function Main() {

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
  const steps = [
    {
      label: 'Personal Details',
      icon: BsPersonCircle
    },
    {
      label: 'Eating Habits',
      icon: GiMeal
    },
    {
      label:'Daily Activity & Lifestyle I',
      icon:TbTreadmill
    },
    {
      label:'Daily Activity & Lifestyle II',
      icon: MdSportsGymnastics
    }
  ]
  const onClickCheckComponent = (number: string) => {
    setGlobalError('')
    setCheckNumber(parseInt(number))
    setOpen(true)
  }
  const handleSave = () => {
    setOpen(false)
    if (checkNumber < 4) {
      let value = checkNumber
      setCheckNumber(value += 1)
    }
  }
  const handleClose =()=>{
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
      const pred = await predict(apiInput)
      const recommend = await recommendation(apiInput)
      setPredictionInfo(formatObesityLevel(pred.prediction))
      setRecommendationInfo(recommend.recommendation)
      setOpenResponse(true)
    }
    catch (e) {
      throw new Error("Couldn't process data")
    }
  }
  return (
    <div className={style.home_container}>
      <div className={style.intro_main_container}>
        <div className={style.intro_container}>
          <p className={style.intro_text}>Obesi<span>Scan</span> - start your <em><strong>journey</strong></em> to better <em><strong>health</strong></em> today</p>
          <div className={style.check_container}>
            <p className={style.check_title}>Quickly check your obesity level</p>
            <p>We collect anonymous data of your personal, physical, diet and lifestyle information.</p>
            <Box sx={{width:"100%",...stepperStyle}}>
              <Stepper nonLinear activeStep={checkNumber}>
                {steps.map((step,index)=>(
                  <Step key={index}>
                    <StepLabel icon={<step.icon/>}>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
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
                  width={300}
                  height={400}
                  loading="eager"
                  alt=""
                />
              </div>
            </div>
            {globalError && <p className="error-text">{globalError}</p>}
            <button onClick={handlePredict} className={style.check_btn}>Get Prediction</button>
          </div>
        </div>
      </div>
      <div className={style.how_container}>
        <div className={style.container}>
          <p className={style.title_text}>How it works</p>
          <p>Our model predicts a person's likelihood of being  overweight or obese based on various lifestyle habits, physical characteristics and daily routines.Once you provide this information, our AI-powered model analyses patterns and predicts you obesity risk based on real-world data and scientific predearch. <strong>Note</strong>, <em>your data is used solely for prediction and is not stored or shared</em> </p>
          <div className={style.how_components_container}>
            <div className={`${style.how_component} ${style.transparent}`}>
              <div className={style.how_content_title}>
                <BsPersonCircle className={style.icon} />
                <p>Personal and Physical Information</p>
              </div>
              <ul>
                <li><span>Gender & Age</span>: Influence metabolism and body composition.</li>
                <li><span>Height & Weight</span>: Used to calculate BMI, a key weight idicator.</li>
                <li><span>Family History</span>: Genetics may contribute to obesity risks.</li>
              </ul>
            </div>
            <div className={style.how_component}>
              <div className={style.how_content_title}>
                <GiAwareness className={style.icon} />
                <p>Hydration & Dietary Awareness</p>
              </div>
              <ul>
                <li><span>Water Intake</span>: Drinking water regulates metabolism.</li>
                <li><span>Calorie Monitoring</span>: Tracking food intake helps manage weight.</li>
              </ul>
            </div>
            <div className={style.how_component}>
              <div className={style.how_content_title}>
                <GiMeal className={style.icon} />
                <p>Eating Habits</p>
              </div>
              <ul>
                <li><span>Caloric Food Frequency</span>: How often high-calorie foods are consumed.</li>
                <li><span >Main Meals Per Day</span>: The number of meals eaten daily.</li>
                <li><span>Vegetable Intake</span>: A balanced diet supports weight management.</li>
                <li><span>Snack Intake</span>: Frequent unheathy snacks may lead to weight gain.</li>
              </ul>
            </div>

            <div className={`${style.how_component} ${style.transparent}`}>
              <div className={style.how_content_title}>
                <PiPersonSimpleBikeFill className={style.icon} />
                <p>Lifestyle & Behavioral Factors</p>
              </div>
              <ul>
                <li><span>Smoking & Alcohol Consumption</span>: These can affect metabolism.</li>
                <li><span>Exercise Frequency</span>: Physical activity plays a major role in weight control.</li>
                <li><span>Technology Usage</span>: Excessive screen time leads to a sedentary lifestyle.</li>
                <li><span>Mode of Transport</span>: Walking vs. using a car affects daily activity levels.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          {checkNumber === 0 && <PersonalDetailsModal data={personalDetails} setData={setPersonalDetails} onSave={handleSave} onClose={handleClose}/>}
          {checkNumber === 1 && <EatingHabits data={eatingHabits} onSave={handleSave} setData={setEatingHabits} />}
          {checkNumber === 2 && <DailyActivity1 data={dailyActivity1} setData={setDailyActivity1} onSave={handleSave} />}
          {checkNumber === 3 && <DailyActivity2 data={dailyActivity2} setData={setDailyActivity2} onSave={handleSave} />}
        </Box>

      </Modal>
      <Modal open={openResponse} onClose={handleCloseResponse}>
        <Box sx={modalStyle}>
          {predictionInfo && <ResponseModal prediction={predictionInfo} recommendation={recommendationInfo} close={handleCloseResponse} />}

        </Box>
      </Modal>
    </div>
  )
}