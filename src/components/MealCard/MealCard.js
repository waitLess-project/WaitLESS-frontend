import React, { useState } from 'react'
import './styles.css'

const MealCard = ({ meal, addToOrder, order }) => {
    const [showDetails, setShowDetails] = useState(false)


    return (
        <div className="mealcard">
            <div className="meal-image-div">
                <img src={meal.img_url} alt={meal.title} title={meal.title}
                    className="meal-image"
                    onClick={e => setShowDetails(!showDetails)}
                />
            </div>
            {showDetails && (
                <>
                    <div className="center-text">
                        <h4>{meal.title}</h4>
                        <p>
                            {meal.description}
                        </p>
                    </div>
                    <div className="flex-row">
                        <h3>${meal.price}</h3>
                        <button onClick={_ => addToOrder(meal.id)}>
                            {order.includes(meal.id) ? "✅ Added to Order" : "Add To Order"}
                        </button>
                    </div>
                </>
            )}


        </div>
    )
}

export default MealCard
