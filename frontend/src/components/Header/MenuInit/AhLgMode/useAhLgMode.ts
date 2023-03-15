import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useAhLgMode = makeStyles((theme: Theme) => ({
    ahLgMode: {
        '@media (max-width: 1024px)': {
            position: "fixed",
            left: "-315px",
            width: "315px",
            height: "100%",
            top: "0",
            backgroundColor: "#ffffff",
            zIndex: "20000",
            overflowY: "auto"
        }
    }
}))