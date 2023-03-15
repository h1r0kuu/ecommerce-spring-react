import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useHeaderStyles = makeStyles((theme: Theme) => ({
    header: {
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.07)'
    }
}))