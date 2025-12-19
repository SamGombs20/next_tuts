'use client'

import { FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { radioGroupStyles } from "../styles/MUICustom";
import style from "../styles/detail_modal.module.css"
import { ChangeEvent, FC, useState } from "react";

interface Props{
    data:DailyActivity2
    setData:(data:DailyActivity2)=>void
    onSave:()=>void
    onClose:()=>void
}
export const DailyActivity2:FC<Props> = ({data, setData, onSave, onClose}) => {
    const [errors, setErrors] = useState<DailyActivity2>({
        physicalActivity:'',
        technologyUse:'',
        transportMeans:''
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
        const newErrors:DailyActivity2 = {
            physicalActivity:'',
            technologyUse:'',
            transportMeans:''
        }
        if(!data.physicalActivity) newErrors.physicalActivity = "Fill out this field"
        if(!data.technologyUse) newErrors.technologyUse = "Fill out this field"
        if(!data.transportMeans) newErrors.transportMeans = "Fill out this field"

        setErrors(newErrors)
        if(Object.values(newErrors).every(value=>value.length ===0)){
            onSave()
        }
    }
    return (
        <div className={style.details_form_container}>
            <p className={`${style.form_title} gradient-text`}>
                Daily Activity & Lifestyle II
            </p>
            <div className={style.details_form}>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles} error={!!errors.physicalActivity}>
                        <FormLabel id="physical">How often do you have physical activity?</FormLabel>
                        <RadioGroup aria-labelledby="physical" value={data.physicalActivity} onChange={handleChange} name="physicalActivity">
                            <FormControlLabel value="0" control={<Radio />} label="I don't" />
                            <FormControlLabel value="1" control={<Radio />} label="Sometimes" />
                            <FormControlLabel value="2" control={<Radio />} label="Frequently" />
                            <FormControlLabel value="3" control={<Radio />} label="Always" />
                        </RadioGroup>
                        {errors.physicalActivity && <FormHelperText>{errors.physicalActivity}</FormHelperText>}
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles} error={!!errors.technologyUse}>
                        <FormLabel id="tech">How much time do you use technological devices such as cell phone, video games, television, computer and others?</FormLabel>
                        <RadioGroup aria-labelledby="tech" value={data.technologyUse} onChange={handleChange} name="technologyUse">
                            <FormControlLabel value="0" control={<Radio />} label="less than 3 hours" />
                            <FormControlLabel value="1" control={<Radio />} label="3-8 hours" />
                            <FormControlLabel value="2" control={<Radio />} label="more than 8 hours" />
                        </RadioGroup>
                        {errors.technologyUse && <FormHelperText>{errors.technologyUse}</FormHelperText>}
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles} error={!!errors.transportMeans}>
                        <FormLabel id="transport">Which transportation do you usually use?</FormLabel>
                        <RadioGroup aria-labelledby="transport" value={data.transportMeans} onChange={handleChange} name="transportMeans">
                            <FormControlLabel value="Bike" control={<Radio />} label="Bike" />
                            <FormControlLabel value="Walking" control={<Radio />} label="Walking" />
                            <FormControlLabel value="Motorbike" control={<Radio />} label="Motorbike" />
                            <FormControlLabel value="Automobile" control={<Radio />} label="Automobile" />
                            <FormControlLabel value="Public_Transportation" control={<Radio />} label="Public Transportation" />


                        </RadioGroup>
                        {errors.transportMeans && <FormHelperText>{errors.transportMeans}</FormHelperText>}
                    </FormControl>
                </div>
            </div>
            <div className={style.form_buttons}>
                <button className={`${style.close_btn} btn`} onClick={onClose}>Cancel</button>
                <button className={`${style.check_btn} btn`} onClick={validateAndSave}>Save</button>
            </div>
        </div>
    );
}