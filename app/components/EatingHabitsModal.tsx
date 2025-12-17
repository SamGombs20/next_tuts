'use client'

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { radioGroupStyles } from "../styles/MUICustom";
import style from "../styles/detail_modal.module.css"
import { ChangeEvent, FC, useState } from "react";
interface Props{
    data:EatingHabits
    setData:(data:EatingHabits)=>void
    onSave:()=>void
}
export const EatingHabits:FC<Props> = ({data, setData, onSave}) => {
    const [errors, setErrors] = useState<EatingHabits>({
        caloriesIntake:'',
        dailyMeals:'',
        vegetableIntake:'',
        snackIntake:''
    })
    const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target
        setData({
            ...data,
            [name]:value
        })
        setErrors({
            ...errors,
            [name]:""
        })
    }
    const validateAndSave =()=>{
        const newErrors:EatingHabits = {
            caloriesIntake:'',
            vegetableIntake:'',
            dailyMeals:'',
            snackIntake:''
        }
        if(!data.caloriesIntake) newErrors.caloriesIntake = "Fill out this field"
        if(!data.dailyMeals) newErrors.dailyMeals = "Fill out this field"
        if(!data.vegetableIntake) newErrors.vegetableIntake = "Fill out this field"
        if(!data.snackIntake) newErrors.snackIntake = "Fill out this field"
    }
    return (
        <div className={style.details_form_container}>
            <p className={`${style.form_title} gradient-text`}>
                Eating Habits
            </p>
            <div className={style.details_form}>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="caloric"> Do you eat high caloric food frequently? (Red meat, nuts, milk, etc)</FormLabel>
                        <RadioGroup aria-labelledby="caloric" value={data.caloriesIntake} onChange={handleChange} name="caloriesIntake">
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="meals">How many meals do you have daily? </FormLabel>
                        <RadioGroup aria-labelledby="meals" value={data.dailyMeals} name="dailyMeals" row>
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="veg">Do you usually eat vegetables in your meals?</FormLabel>
                        <RadioGroup aria-labelledby="veg" value={data.vegetableIntake} onChange={handleChange} name="vegetableIntake">
                            <FormControlLabel value="1" control={<Radio />} label="Rarely" />
                            <FormControlLabel value="2" control={<Radio />} label="Sometimes" />
                            <FormControlLabel value="3" control={<Radio />} label="Always" />

                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="snack">Do you eat any food/snack between meals?</FormLabel>
                        <RadioGroup aria-labelledby="snack" value={data.snackIntake} onChange={handleChange} name="snackIntake">
                            <FormControlLabel value="1" control={<Radio />} label="No" />
                            <FormControlLabel value="2" control={<Radio />} label="Sometimes" />
                            <FormControlLabel value="3" control={<Radio />} label="Frequently" />
                            <FormControlLabel value="4" control={<Radio />} label="Always" />

                        </RadioGroup>
                    </FormControl>
                </div>


            </div>
            <div className={style.form_buttons}>
                <button className={`${style.close_btn} btn`}>Cancel</button>
                <button className={`${style.check_btn} btn`} onClick={onSave}>Save</button>
            </div>
        </div>
    );
}