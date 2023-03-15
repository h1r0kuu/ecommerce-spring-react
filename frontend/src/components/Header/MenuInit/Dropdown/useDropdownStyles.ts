import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useDropdownStyles = makeStyles((theme: Theme) => ({
    hasDropdown: {
        '& > ul > &': {
            position: 'relative'
        },

        '& > ul': {
            backgroundColor: "#ffffff",
            boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.13)",
            position: "absolute",
            textAlign: "left",
            padding: "20px 0 20px",
            zIndex: "999",
            whiteSpace: "nowrap",
            transition: "all 0.3s ease",
            top: "120%",
            opacity: "0",
            visibility: "hidden"
        },

        '& > ul > li > a': {
            display: "block",
            padding: "8px 20px",
            color: "#333333",
            fontSize: "12px",
            fontWeight: "600"
        },

        '@media (min-width: 1025px)': {
            '&:hover > ul': {
                opacity: '1',
                visibility: 'visible',
                top: '100%'
            },

            '& &:hover > ul': {
                top: 0
            }
        }
    },

    hasDropdownLeft: {
        '& > ul': {
            left: '100%'
        }
    },

    hasDropdownRight: {
        '& > ul': {
            right: '100%'
        }
    }
}))