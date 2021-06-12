import React, { useState, useEffect } from 'react'
import MealCard from '../MealCard/MealCard'

const Menu = () => {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")
    const [meals, setMeals] = useState([])

    const fetchMeals = () => {
        fetch("http://localhost:3000/meals").then(res => res.json())
            .then(setMeals)
    }

    useEffect(() => {
        fetchMeals()
    }, [])

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
                <select onChange={e => setFilter(e.target.value)}>
                    <option value="specials">Specials</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="brunch">Brunch</option>
                    <option value="dinner">Dinner</option>
                </select>
            </div>
            <div className="">
                <div>
                    {meals.map(meal => <MealCard meal={meal} key={meal.id} />)}
                </div>
                <div>
                    CART/ORDER
                </div>
            </div>

        </div>
    )
}

export default Menu
