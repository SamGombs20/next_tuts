'use client'

import { FormControl, FormControlLabel, FormLabel,  Radio, RadioGroup, TextField } from "@mui/material";
import { radioGroupStyles, textfieldStyles } from "../styles/MUICustom";
import style from "../styles/detail_modal.module.css"
export const PersonalDetailsModal = () => {
    return (
        <div className={style.details_form_container}>
            <p className={`${style.form_title} gradient-text`}>
                Personal Details
            </p>
            <div className={style.details_form}>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="gender">Gender</FormLabel>
                        <RadioGroup aria-labelledby="gender" name="gender-group">
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles}>
                        <FormLabel id="family"> Do have a family history of anyone being overweight?</FormLabel>
                        <RadioGroup aria-labelledby="family" name="family-group">
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <TextField label="Age" sx={textfieldStyles} />
                <TextField label="Height (m)" sx={textfieldStyles} />
                <TextField label="Weight (kg)" sx={textfieldStyles} />
            </div>
        </div>
    );
}