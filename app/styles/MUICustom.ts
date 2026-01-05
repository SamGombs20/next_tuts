export const textfieldStyles = {
    marginBottom: '1rem',
    '& .MuiOutlinedInput-root': {
        color: '#8B4513',
        borderRadius: '12px',
        transition: 'border-color 0.3s ease-in-out, background-color 0.3s ease-in-out',
        minWidth: '300px',
        '& input[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
                display: 'none',
            },
            '&::-webkit-inner-spin-button': {
                display: 'none',
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#006400',
            borderWidth: '2px',
            transition: 'border-color 0.3s ease-in-out',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#006400',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#006400',
            borderWidth: '2px',
        },
        '& .MuiOutlinedInput-input': {
            // padding: "12px 12px",
            color: '#8B4513',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: "'Roboto', sans-serif",
        },
        '& .MuiOutlinedInput-input::placeholder': {
            color: '#a0a0a0',
            opacity: 0.8,
            fontWeight: '400',
        },
        '& .MuiInputAdornment-root': {
            color: '#8B4513',
        },
    },
    '.MuiOutlinedInput-root.Mui-focused': {
        backgroundColor: 'transparent',
    },
    '.MuiOutlinedInput-root.Mui-error': {
        backgroundColor: '#d32f2f15',
    },
    '.MuiOutlinedInput-root.Mui-error.Mui-focused': {
        backgroundColor: 'transparent',
    },
    '& .MuiInputLabel-outlined': {
        color: '#8B4513',
        fontSize: '14px',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
        color: '#006400',
    },
    '& .MuiInputLabel-outlined.Mui-error': {
        color: '#d32f2f',
    },
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: '#d32f2f',
    },
    '& .MuiFormHelperText-root.Mui-error': {
        fontSize: '0.7rem',
        color: '#d32f2f',
        marginLeft: '1rem',
        marginBottom: '-0.4rem',
    },
    '& .MuiInputLabel-outlined.Mui-success': {
        color: '#388e3c', // Success label color (green)
    },
    '& .MuiOutlinedInput-root.Mui-success .MuiOutlinedInput-notchedOutline': {
        borderColor: '#388e3c', // Success border color (green)
    },
    '& .MuiFormHelperText-root.Mui-success': {
        fontSize: '0.7rem',
        color: '#388e3c', // Success helper text color (green)
        marginLeft: '1rem',
        marginBottom: '-0.4rem',
    },
}
export const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    minWidth: 300,
    outline: 'none',
    borderRadius: '12px',
    p: 4,
};
export const radioGroupStyles = {
    marginBottom: "1rem",

    "& .MuiFormLabel-root": {
        color: "#8B4513",
        fontSize: "14px",
        fontWeight: 600,
        marginBottom: "0.5rem",

        "&.Mui-focused": {
            color: "#006400",
        },

        "&.Mui-error": {
            color: "#d32f2f",
        },

        "&.Mui-success": {
            color: "#388e3c",
        },
    },

    "& .MuiRadioGroup-root": {
        paddingLeft: "0.5rem",
        gap: "0.25rem",
    },

    "& .MuiFormControlLabel-root": {
        marginLeft: 0,

        "& .MuiTypography-root": {
            fontSize: "14px",
            fontWeight: 500,
            color: "#8B4513",
        },

        "&.Mui-disabled .MuiTypography-root": {
            color: "#a0a0a0",
        },
    },

    "& .MuiRadio-root": {
        color: "#006400",
        transition: "color 0.3s ease-in-out",

        "&:hover": {
            backgroundColor: "transparent",
        },

        "&.Mui-checked": {
            color: "#006400",
        },

        "&.Mui-error": {
            color: "#d32f2f",
        },

        "&.Mui-success": {
            color: "#388e3c",
        },
    },

    "& .MuiFormHelperText-root": {
        fontSize: "0.7rem",
        marginLeft: "0.75rem",
        marginTop: "0.25rem",

        "&.Mui-error": {
            color: "#d32f2f",
        },

        "&.Mui-success": {
            color: "#388e3c",
        },
    },
};
export const stepperStyle = {
    marginTop: '1rem',
    "& .MuiStep-root": {
        color: "#8B4513",
        fontSize: "1.3rem",

        "& .MuiStepLabel-label": {
            color: "#8B4513",
        },
        "& .MuiStepLabel-label.Mui-active": {
            fontWeight: 600,
            color: "#006400"
        },
        "& .MuiStepLabel-iconContainer": {
            backgroundColor: "#8B4513",
            padding: "0.3rem",
            borderRadius: "50%",
            marginRight: '0.3rem',
            color: "#fff"
        },
        "& .MuiStepLabel-iconContainer.Mui-active": {
            backgroundColor: "#006400",
            color: "#fff"
        },
        "& .MuiStepLabel-label.Mui-completed": {
            color: '#006400'
        },
        "& .MuiStepLabel-iconContainer.Mui-completed": {
            backgroundColor: "#006400",

        },
        "& .MuiStepConnector-line": {
            borderColor: '#8B4513',
        },
    },


}
export const dividerStyles = {
    borderColor: "#8B4513",
    opacity: 0.8,
    marginY: "1.5rem"
}

