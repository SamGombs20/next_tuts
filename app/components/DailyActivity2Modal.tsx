'use client'

import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { radioGroupStyles, textfieldStyles } from "../styles/MUICustom";
import style from "../styles/detail_modal.module.css"
export const DailyActivity2 = () => {
    return (
        <div className={style.details_form_container}>
            <p className={`${style.form_title} gradient-text`}>
                Daily Activity & Lifestyle II
            </p>
            <div className={style.details_form}>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="physical">How often do you have physical activity?</FormLabel>
                        <RadioGroup aria-labelledby="physical" name="physical-group">
                            <FormControlLabel value="1" control={<Radio />} label="I don't" />
                            <FormControlLabel value="2" control={<Radio />} label="Sometimes" />
                            <FormControlLabel value="3" control={<Radio />} label="Frequently" />
                            <FormControlLabel value="4" control={<Radio />} label="Always" />


                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="tech">How much time do you use technological devices such as cell phone, video games, television, computer and others?</FormLabel>
                        <RadioGroup aria-labelledby="tech" name="tech-group">
                            <FormControlLabel value="1" control={<Radio />} label="less than 3 hours" />
                            <FormControlLabel value="2" control={<Radio />} label="3-8 hours" />
                            <FormControlLabel value="3" control={<Radio />} label="more than 8 hours" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="transport">Which transportation do you usually use?</FormLabel>
                        <RadioGroup aria-labelledby="transport" name="transport-group">
                            <FormControlLabel value="1" control={<Radio />} label="Bike" />
                            <FormControlLabel value="2" control={<Radio />} label="Walking" />
                            <FormControlLabel value="3" control={<Radio />} label="Motorbike" />
                            <FormControlLabel value="4" control={<Radio />} label="Automobile" />
                            <FormControlLabel value="5" control={<Radio />} label="Public Transportation" />


                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}