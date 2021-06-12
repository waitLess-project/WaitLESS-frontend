import React, { useState } from 'react'

const Menu = () => {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")

    return (
        <div className="menu">
            <div>
                <form>
                    <input
                        type="text"
                        label="searchBar"
                        placeholder="enter an item"
                        name="searchBar"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <input type="submit" />
                </form>
                <select onChange="">
                    <option>Specials</option>
                    <option>Breakfast</option>
                    <option>Brunch</option>
                    <option>Dinner</option>
                </select>
            </div>
            
            <div>

            </div>

        </div>
    )
}

export default Menu
