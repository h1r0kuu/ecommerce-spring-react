import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
    breakpoints: {
        values: {
            xl: 1400,
            lg: 1200,
            md: 992,
            sm: 768,
            xs: 576
        }
    }
})

defaultTheme.components = {
    MuiContainer: {
        styleOverrides: {
            root: {
                width: '100%',
                paddingRight: '15px !important',
                paddingLeft: '15px !important',
                marginRight: 'auto',
                marginLeft: 'auto',
                [defaultTheme.breakpoints.up('xs')]: {
                    maxWidth: '540px',
                },
                [defaultTheme.breakpoints.up('sm')]: {
                    maxWidth: '720px',
                },
                [defaultTheme.breakpoints.up('md')]: {
                    maxWidth: '960px',
                },
                [defaultTheme.breakpoints.up('lg')]: {
                    maxWidth: '1140px',
                },
            }
        }
    },
    MuiGrid: {
        styleOverrides: {
            item: {
                position: 'relative',
                width: '100%',
                paddingRight: '15px',
                paddingLeft: '15px'
            },
            container: {
                display: 'flex',
                flexWrap: 'wrap',
                marginRight: '-15px',
                marginLeft: '-15px'
            }
        }
    },
    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                fontSize: 10,
                fontWeight: 600,
                color: "#333333",
                backgroundColor: "#f5f5f5",
                fontFamily: [
                    '"Open Sans"',
                    '-apple-system',
                    'system-ui',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif'
                ].join(',')
            },

            arrow: {
                color: "#f5f5f5"
            },

            tooltipPlacementTop: {
                '&:before': {
                    borderTopColor: "#f5f5f5",
                }
            },

            tooltipPlacementRight: {
                '&:before': {
                    borderRightColor: "#f5f5f5"
                }
            },

            tooltipPlacementBottom: {
                '&:before': {
                    borderBottomColor: "#f5f5f5"
                }
            },

            tooltipPlacementLeft: {
                '&:before': {
                    borderLeftColor: "#f5f5f5"
                }
            }
        }
    }
}

export default defaultTheme;