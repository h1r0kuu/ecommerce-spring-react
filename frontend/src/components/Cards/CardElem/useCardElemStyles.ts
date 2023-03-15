import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCardElemStyles = makeStyles((theme: Theme) => ({
    service: {
        display: 'flex',
        backgroundColor: '#ffffff',
        padding: '23px',
        boxShadow: '0 6px 15px 0 rgba(36, 37, 38, 0.08)',
        border: '2px solid #f5f5f5'
    },

    serviceIcon: {
        marginRight: '20px',
        '& svg': {
            color: '#ff4500',
            fontSize: '30px'
        }
    },

    serviceInfoText1: {
        display: 'block',
        fontSize: '14px',
        marginBottom: '4px',
        color: '#333333',
        fontWeight: '600'
    },

    serviceInfoText2: {
        fontSize: '13px',
        display: 'block',
        color: '#7f7f7f'
    }
}))