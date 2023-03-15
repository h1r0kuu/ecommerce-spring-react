import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCategoryFilterStyles = makeStyles((theme: Theme) => ({
    categoryUl: {
        margin: '0',
        paddingLeft: '0',
        listStyle: 'none'
    },

    categoryList: {
        overflow: 'auto',
        maxHeight: '290px'
    },

    list: {
        padding: '4px 14px'
    },

    subCategoryUl: {
        display: 'block',
        listStyle: 'none',
        paddingLeft: '8px'
    },

    categoryTitle: {
        fontSize: '14px',
        color: '#333333',
        transition: 'color 110ms ease-in-out'
    },

    categoryText: {
        fontSize: '10px',
        color: '#a0a0a0'
    },

    categoryPlus: {
        cursor: 'pointer',
        fontSize: '13px',
        color: '#444',
        transition: 'color 110ms ease-in-out'
    },

    subCategory: {
        fontSize: '13px',
        fontWeight: '700',
        color: '#333333'
    },

    subCategoryLiText: {
        fontSize: '13px',
        color: '#7f7f7f',
        transition: 'color 110ms ease-in-out'
    }
}))