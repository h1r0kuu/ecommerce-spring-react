import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useGlobalStyles = makeStyles((theme: Theme) => ({
    usmb30: {
        marginBottom: '1.875rem'
    },

    usmb16: {
        marginBottom: '1rem'
    },

    usmr8: {
        marginRight: '0.5rem'
    },

    usml6: {
        marginLeft: '0.375rem'
    },

    uh100: {
        height: '100%'
    },

    orangeBtn: {
        color: '#ffffff',
        backgroundColor: '#ff4500',
        border: '2px solid #ff4500',
        transition: 'background-color 0.5s ease-in, border-color 0.5s ease-in'
    },

    platinumBtn: {
        color: '#333333',
        border: '2px solid #e5e5e5',
        backgroundColor: 'transparent',
        transition: 'border-color 0.5s linear'
    }
}))