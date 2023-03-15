import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useBreadCrumbsStyles = makeStyles((theme: Theme) => ({
    breadcrumbWrap: {
        backgroundColor: '#fbfbfb',
        padding: '1.125rem',
        borderRadius: '0.1875rem'
    },

    breadcrumbList: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
        wordWrap: 'break-word',
        '& li': {
            display: 'inline-block'
        }
    }
}))