import React from 'react'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';

const SearchButton = ({ handleClick }) => {

    return (
        <Button variant="text" color="primary" onClick={handleClick}>
            search <SearchIcon />
        </Button>
    )
}

export default SearchButton;
