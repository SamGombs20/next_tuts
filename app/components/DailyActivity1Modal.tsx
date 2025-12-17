'use client'

import { FormControl, FormControlLabel, FormLabel,  Radio, RadioGroup } from "@mui/material";
import { radioGroupStyles} from "../styles/MUICustom";
import style from "../styles/detail_modal.module.css"
import { FC } from "react";

interface Props{
    data:DailyActivity1
    setData:(data:DailyActivity1)=>void
    onSave:()=>void
}
export const DailyActivity1:FC<Props> = ({data, setData, onSave}) => {
    
    return (
        <div className={style.details_form_container}>
            <p className={`${style.form_title} gradient-text`}>
                Daily Activity & Lifestyle I
            </p>
            <div className={style.details_form}>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="water">How much water do you drink daily?</FormLabel>
                        <RadioGroup aria-labelledby="water" name="water-group">
                            <FormControlLabel value="1" control={<Radio />} label="less than 3 glasses" />
                            <FormControlLabel value="2" control={<Radio />} label="3-8 glasses" />
                            <FormControlLabel value="3" control={<Radio />} label="more than 8 glasses" />

                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="calorie">Do you monitor the calories you eat daily?</FormLabel>
                        <RadioGroup aria-labelledby="calorie" name="calorie-group">
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
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
                <button className={`${style.close_btn} btn`}>Cancel</button>
                <button className={`${style.check_btn} btn`}>Save</button>
            </div>
        </div>
    );
}