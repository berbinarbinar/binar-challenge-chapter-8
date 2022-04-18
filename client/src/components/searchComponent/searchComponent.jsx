import React from 'react'

export default function SearchComponent() {

    return(
        <>
            <div>
                <label For="SearchCriteria">Choose Criteria:</label>
                <select name="criteria" id="criteria">
                    <option value="username">Username</option>
                    <option value="email">Email</option>
                    <option value="experience">Experience</option>
                    <option value="lvl">Level</option>
                </select>
                <input type="search" id="categorySearch" name="categorySearch" />
                <button>Search</button>
            </div>
        </>
    )
}