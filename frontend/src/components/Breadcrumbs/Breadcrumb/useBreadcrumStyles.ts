import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useBreadcrumbStyles = makeStyles((theme: Theme) => ({
    breadCrumbText: {
        color: '#a0a0a0',
        fontSize: '13px',
        fontWeight: '700',
        transition: 'color 0.5s'
    },

    isMarked: {
        '& a': {
            color: '#333333'
        }
    },

    hasSeparator: {
        '&:after': {
            content: '\'/\'',
            margin: '0 16px'
        }
    }
}))