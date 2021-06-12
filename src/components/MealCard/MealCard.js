import React from 'react'

const MealCard = ({ meal }) => {
    console.log(meal)

    return (
        <div>
            <div>
                <img src={meal.img_url} alt={meal.title} />
            </div>
            <div>
                <h4>{meal.title}</h4>
                <p>
                    {meal.description}
                </p>
            </div>
            <div>
                <h3>${meal.price}</h3>
                <button>
                    Add to Order
                </button>
            </div>


        </div>
    )
}

export default MealCard
