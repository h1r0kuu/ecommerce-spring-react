import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactElement } from "react"
import { useGlobalStyles } from "../../../utils/useGlobalStyles"
import FilterOptionWrapper from "../FilterOptionWrapper/FilterOptionWrapper"
import { useCategoryFilterStyles } from "./useCategoryFilterStyles"

const CategoryFilter = (): ReactElement => {
    const globalClasses = useGlobalStyles()
    const classes = useCategoryFilterStyles()

    return (
        <FilterOptionWrapper title="CATEGORY">
            <ul className={`${classes.categoryUl} ${classes.categoryList} gl-scroll`}>
                <li className={classes.list}>
                    <a href="#" className={classes.categoryTitle}>Electronics</a>
                    <span className={`${classes.categoryText} ${globalClasses.usml6}`}>(23)</span>
                    <FontAwesomeIcon icon={faPlus} className={`${classes.categoryPlus} ${globalClasses.usml6}`} />
                    <ul className={classes.subCategoryUl}>
                        <li>
                            <a href="#" className={classes.subCategory}>3D Printer &amp; Supplies</a>
                            <FontAwesomeIcon icon={faPlus} className={`${classes.categoryPlus} ${globalClasses.usml6}`} />
                            <ul className={classes.subCategoryUl}>
                                <li>
                                    <a href="#" className={classes.subCategoryLiText}>3d Printer</a>
                                </li>
                                <li>
                                    <a href="#" className={classes.subCategoryLiText}>3d Printing Pen</a>
                                </li>
                                <li>
                                    <a href="#" className={classes.subCategoryLiText}>3d Printing Accessories</a>
                                </li>
                                <li>
                                    <a href="#" className={classes.subCategoryLiText}>3d Printer Module Board</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" className={classes.categoryTitle}>Food &amp; Supplies</a>
                    <span className={`${classes.categoryText} ${globalClasses.usml6}`}>(0)</span>
                </li>
            </ul>
        </FilterOptionWrapper>

    )
}

export default CategoryFilter