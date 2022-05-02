import React, { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.production.min";


const SearchBar = () => {

    const {searchValue, setSearchValue} = useState('SEARCH')
    return ( 
        <div>
            <form>
                <input
                type='text'
                value={searchValue}
                >
                </input>
            </form>
        </div>
     );
}
 
export default SearchBar;