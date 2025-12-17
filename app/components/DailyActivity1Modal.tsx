'use client'

import { FormControl, FormControlLabel, FormHelperText, FormLabel,  Radio, RadioGroup } from "@mui/material";
import { radioGroupStyles} from "../styles/MUICustom";
import style from "../styles/detail_modal.module.css"
import { ChangeEvent, FC, useState } from "react";

interface Props{
    data:DailyActivity1
    setData:(data:DailyActivity1)=>void
    onSave:()=>void
}
export const DailyActivity1:FC<Props> = ({data, setData, onSave}) => {
    const [errors, setErrors] = useState<DailyActivity1>({
        waterIntake:'',
        calorieMonitoring:'',
        smoke:'',
        alcohol:''
    })
    const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target

        setData({
            ...data,
            [name]:value
        })
        setErrors({
            ...errors,
            [name]:''
        })
    }
    const validateAndSave =()=>{
        const newErrors:DailyActivity1 ={
            waterIntake:'',
            calorieMonitoring:'',
            smoke:'',
            alcohol:''
        }
        if(!data.waterIntake) newErrors.waterIntake ="Fill out this field"
        if(!data.calorieMonitoring) newErrors.calorieMonitoring = "Fill out this field"
        if(!data.smoke) newErrors.smoke = "Fill out this field"
        if(!data.alcohol) newErrors.alcohol = "Fill out this field"

        setErrors(newErrors)

        if(Object.values(newErrors).every(value=>value.length===0)){
            onSave()
        }
    }
    return (
        <div className={style.details_form_container}>
            <p className={`${style.form_title} gradient-text`}>
                Daily Activity & Lifestyle I
            </p>
            <div className={style.details_form}>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles} error={!!errors.waterIntake}>
                        <FormLabel id="water">How much water do you drink daily?</FormLabel>
                        <RadioGroup aria-labelledby="water" value={data.waterIntake} onChange={handleChange} name="waterIntake">
                            <FormControlLabel value="1" control={<Radio />} label="less than 3 glasses" />
                            <FormControlLabel value="2" control={<Radio />} label="3-8 glasses" />
                            <FormControlLabel value="3" control={<Radio />} label="more than 8 glasses" />

                        </RadioGroup>
                        {errors.waterIntake && <FormHelperText>{errors.waterIntake}</FormHelperText>}
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles} error={!!errors.calorieMonitoring}>
                        <FormLabel id="calorie">Do you monitor the calories you eat daily?</FormLabel>
                        <RadioGroup aria-labelledby="calorie" value={data.calorieMonitoring} onChange={handleChange} name="calorieMonitoring">
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        {errors.calorieMonitoring && <FormHelperText>{errors.calorieMonitoring}</FormHelperText>}
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="smoke">Do you smoke?</FormLabel>
                        <RadioGroup aria-labelledby="smoke" name="smoke-group">
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="alcohol">How often do you drink alcohol?</FormLabel>
                        <RadioGroup aria-labelledby="alcohol" name="alcohol-group">
                            <FormControlLabel value="1" control={<Radio />} label="I don't" />
                            <FormControlLabel value="2" control={<Radio />} label="Sometimes" />
                            <FormControlLabel value="3" control={<Radio />} label="Frequently" />
                            <FormControlLabel value="4" control={<Radio />} label="Always" />


                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <div className={style.form_buttons}>
                <button className={`${style.close_btn} btn`} onClick={onSave}>Cancel</button>
                <button className={`${style.check_btn} btn`} onClick={validateAndSave}>Save</button>
            </div>
        </div>
    );
}