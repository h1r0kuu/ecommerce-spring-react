import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useWishlistToolbarStyles = makeStyles((theme: Theme) => ({
    routeBox: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#f1f1f1',
        justifyContent: 'space-between'
    },

    routeBoxLink: {
        color: '#333333',
        fontSize: '13px',
        textAlign: 'center',
        padding: '17px',
        fontWeight: '600',
        display: 'inline-block',
        transition: 'color 0.5s'
    }
}))