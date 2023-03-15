import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTopHeaderStyles = makeStyles((theme: Theme) => ({
    primaryNav: {
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        height: '80px',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    primatyNavBorder: {
        borderBottom: '1px solid #f8f8f8'
    }
}))