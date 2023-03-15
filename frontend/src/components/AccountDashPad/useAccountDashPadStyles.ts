import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useAccountDashPadStyles = makeStyles((theme: Theme) => ({
    dashPad: {
        padding: '26px 20px'
    },

    dashText: {
        display: 'block',
        fontSize: '12px',
        color: '#7f7f7f'
    },

    dashActive: {
        fontWeight: '600'
    },

    dashList: {
        margin: '0',
        padding: '0',
        listStyle: 'none'
    },

    dashListItem: {
        padding: '4px 0',
    },

    dashListItemText: {
        fontSize: '13px',
        display: 'block',
        color: '#000000'
    },

    dashBoxShadow: {
        boxShadow: '-2px 0px 14px 0 rgba(36, 37, 38, 0.08)'
    },

    dashBoxBgWhite: {
        backgroundColor: '#ffffff'
    }
}))