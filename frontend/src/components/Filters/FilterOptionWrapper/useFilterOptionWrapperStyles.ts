import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useFilterOptionWrapperStyles = makeStyles((theme: Theme) => ({
    filterStyle: {
        border: '1px solid #f1f1f1',
        backgroundColor: '#ffffff',
        boxShadow: '0 6px 15px 0 rgba(36, 37, 38, 0.08)'
    },

    filterHeader: {
        fontSize: '14px',
        padding: '14px 18px',
        borderBottom: '1px solid #efefef',
        color: '#333333',
        fontWeight: '700',
        lineHeight: '20px'
    },

    toggleBtn: {
        position: 'absolute',
        top: '50%',
        padding: '8px 12px',
        backgroundColor: 'transparent',
        transform: 'translateY(-50%)',
        right: '10px',
        fontSize: '12px',
        cursor: 'pointer',
        color: '#444'
    },

    wrapper: {
        padding: '14px'
    }
}))