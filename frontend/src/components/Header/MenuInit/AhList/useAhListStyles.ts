import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useAhListStyles = makeStyles((theme: Theme) => ({
    ahList: {
        '&': {
            margin: '0',
            padding: '0'
        },

        '& li': {
            listStyle: 'none'
        },

        '@media (max-width: 1024px)': {
            '& > li': {
                position: "relative",
                display: "block",
                borderTop: "1px solid #f8f8f8"
            },

            '& > li > a': {
                display: "block",
                padding: "8px 18px"
            },

            '& > li:last-child': {
                borderBottom: '1px solid #f8f8f8'
            },

            '& > li > ul > li > a': {
                padding: '8px 36px'
            },

            '& > li > ul > li > ul > li > a': {
                padding: '8px 54px'
            },

            '& > li > ul > li > ul > li > ul > li > a ': {
                padding: '8px 72px'
            }
        },

        '@media (min-width: 1025px)': {
            '& > li > a:hover': {
                color: '#ff4500'
            }
        }
    },

    ahListDesignFirst: {
        '& > li': {
            display: 'inline-block',
        },

        '& > li > a': {
            display: "inline-block",
            fontSize: "16px",
            padding: "28px 18px"
        },

        '@media (max-width: 1024px)': {
            '& > li > a': {
                fontWeight: "normal",
                fontSize: "14px"
            }
        }
    },

    ahListDesignSecond: {
        '& > li': {
            display: 'inline-block',
        },

        '& > li > a': {
            display: "inline-block",
            fontSize: "12px",
            fontWeight: "700",
            padding: "31px 14px"
        },

        '@media (max-width: 1024px)': {
            '& > li > a': {
                fontWeight: "normal",
                fontSize: "14px"
            }
        }
    },

    ahListColorWhite: {
        '@media (max-width: 1024px)': {
            '& > li > a': {
                color: '#333333'
            }
        }
    },

    ahListColorSecondary: {
        '& > li > a': {
            color: '#333333'
        }
    }
}))