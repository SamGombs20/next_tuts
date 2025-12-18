'use client'

import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { radioGroupStyles, textfieldStyles } from "../styles/MUICustom";
import style from "../styles/detail_modal.module.css"
import { ChangeEvent, FC, useState } from "react";
interface Props {
    data: PersonalDetails
    setData: (data: PersonalDetails) => void
    onSave: () => void
}
export const PersonalDetailsModal: FC<Props> = ({ data, setData, onSave }) => {
    const [errors, setErrors] = useState<PersonalDetails>({
        gender: '',
        familyHistory: '',
        age: '',
        height: '',
        weight: ''
    })
    // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = event.target



    //     setData({
    //         ...data,
    //         [name]: value
    //     })
    //     setErrors({
    //         ...errors,
    //         [name]: ''
    //     })
    // }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (value === '') {
            setData({ ...data, [name]: '' });
            setErrors((prev) => ({ ...prev, [name]: '' }));
            return;
        }

        // Specific rules per field
        let isValid = false;

        if (name === 'age') {
            isValid = /^\d+$/.test(value); 
        } else if (name === 'height' || name === 'weight') {
            isValid = /^\d*\.?\d*$/.test(value) && parseFloat(value) >= 0;
        }
        else{
            setData({...data,[name]:value})
            setErrors({...errors, [name]:''})
        }

        // Only update if the input is valid
        if (isValid) {
            setData({ ...data, [name]: value });
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };
    const validateAndSave = () => {
        const newErrors: PersonalDetails = {
            gender: '',
            familyHistory: '',
            age: '',
            height: '',
            weight: ''
        }
        if (!data.gender) newErrors.gender = "Fill out this field"
        if (!data.familyHistory) newErrors.familyHistory = "Fill out this field"
        if (!data.age) newErrors.age = "Fill out this field"
        if (!data.height) newErrors.height = "Fill out this field"
        if (!data.weight) newErrors.weight = "Fill out this field"

        setErrors(newErrors)
        if (Object.values(newErrors).every(value => value.length === 0)) {
            onSave()
        }
    }
    return (
        <div className={style.details_form_container}>
            <p className={`${style.form_title} gradient-text`}>
                Personal Details
            </p>
            <div className={style.details_form}>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles} error={!!errors.gender}>
                        <FormLabel id="gender">Gender</FormLabel>
                        <RadioGroup aria-labelledby="gender" value={data.gender} onChange={handleChange} name="gender">
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        </RadioGroup>
                        {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
                    </FormControl>
                </div>
                <div className={style.radio_container}>
                    <FormControl sx={radioGroupStyles} error={!!errors.familyHistory}>
                        <FormLabel id="family"> Do have a family history of anyone being overweight?</FormLabel>
                        <RadioGroup aria-labelledby="family" value={data.familyHistory} onChange={handleChange} name="familyHistory">
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                        {errors.familyHistory && <FormHelperText>{errors.familyHistory}</FormHelperText>}
                    </FormControl>
                </div>
                <TextField label="Age" name="age" value={data.age} onChange={handleChange} error={!!errors.age} helperText={errors.age} sx={textfieldStyles} />
                <TextField label="Height (m)" name="height" value={data.height} onChange={handleChange} error={!!errors.height} helperText={errors.height} sx={textfieldStyles} />
                <TextField label="Weight (kg)" name="weight" value={data.weight} onChange={handleChange} error={!!errors.weight} helperText={errors.weight} sx={textfieldStyles} />
            </div>
            <div className={style.form_buttons}>
                <button className={`${style.close_btn} btn`} onClick={onSave}>Cancel</button>
                <button className={`${style.check_btn} btn`} onClick={validateAndSave}>Save</button>
            </div>
        </div>
    );
}