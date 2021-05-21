import React, { useState } from 'react'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div>

            <input type="text" className="searchbox" placeholder="Search.." name="search" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}>

            </input>

        </div>
    )
}

