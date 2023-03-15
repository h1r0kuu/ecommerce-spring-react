import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMenuInitStyles = makeStyles((theme: Theme) => ({
    menuInitSvg: {
        '@media (max-width: 1024px)': {
            display: 'none',
        }
    },

    menuInitOpenLgMode: {
        '@media (max-width: 1024px)': {
            left: 0,
            transition: 'all .4s ease-in-out'
        }
    },

    menuInitOpen: {
        '@media (max-width: 1024px)': {
            content: "",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            left: "0",
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: "19999"
        }
    }
}))