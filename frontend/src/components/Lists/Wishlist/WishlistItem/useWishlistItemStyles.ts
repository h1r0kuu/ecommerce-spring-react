
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useWishlistItemStyles = makeStyles((theme: Theme) => ({
    wr: {
        backgroundColor: '#ffffff',
        border: '1px solid #eee',
        boxShadow: '1px 1px 6px 0 rgba(0, 0, 0, 0.07)'
    },

    wrContainer: {
        display: 'flex',
        padding: '20px',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    wrap1: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    wrap2: {
        '@media (max-width: 991px)': {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            alignItems: 'flex-end',
        }
    },

    imgWrap: {
        display: 'inline-block',
        verticalAlign: 'middle',
        backgroundColor: '#f5f5f5',
        width: '120px',
        height: '120px'
    },

    imgFluid: {
        width: '100%',
        maxWidth: '100%',
        height: 'auto'
    },

    wrInfo: {
        marginLeft: '18px'
    },

    wrName: {
        display: 'block',
        '& > a': {
            color: '#333333',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'color 0.5s'
        }
    },

    wrCategory: {
        display: 'block',
        marginBottom: '2px',
        '& > a': {
            color: '#a0a0a0',
            transition: 'color 0.5s',
            fontSize: '12px'
        }
    },

    wrPrice: {
        display: 'block',
        color: '#ff4500',
        fontSize: '14px',
        fontWeight: '600'
    },

    wrDiscount: {
        fontWeight: '600',
        marginLeft: '12px',
        color: '#333333',
        fontSize: '14px',
        textDecoration: 'line-through'
    },

    wrLink: {
        fontSize: '12px',
        fontWeight: '600',
        display: 'inline-block',
        borderRadius: '5px',
        margin: '0 0 10px 10px',
        padding: '12px 30px'
    },

}))