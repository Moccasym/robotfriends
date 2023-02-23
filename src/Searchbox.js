import React from "react";

const Searchbox = ({searchfield, searchChange}) => {
    return(
    <div className='pa2'>
        {/* input creates a input box that can be used */}
        <input
        className='pa3 ba b--green bg-lightest-blue' 
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
        />
    </div>
)};

export default Searchbox;