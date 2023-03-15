import { ReactElement } from "react";

const SearchForm = (): ReactElement => {
    return (
        <form className="main-form">
            <label htmlFor="main-search" />
            <input
                className="input-text input-text--border-radius input-text--style-1"
                type="text"
                id="main-search"
                placeholder="Search"
            />
            <button
                className="btn btn--icon fas fa-search main-search-button"
                type="submit"
            />
        </form>
    )
}

export default SearchForm;