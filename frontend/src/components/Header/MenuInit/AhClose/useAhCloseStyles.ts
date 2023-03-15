import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useAhCloseStyles = makeStyles((theme: Theme) => ({
    ahClose: {
        '@media (max-width: 1024px)': {
            color: "#333333",
            padding: "20px",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
            display: "block"
        },
        '@media (min-width: 1025px)': {
            display: 'none'
        }
    }
}))