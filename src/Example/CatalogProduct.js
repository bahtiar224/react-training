import React, {useEffect, useState} from 'react';

const CatalogProduct = () => {
    const [meals, setMeals] = useState(null);
    const [selectedCat, setSelectedCat] = useState('Seafood');
    const selectHandle = (category) => {
        setSelectedCat(category);
    }
    const fetchData = async (category) => {
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+category);
        console.log(data);
        const result = await data.json();
        console.log(result);
        setMeals(result.meals);
    }

    useEffect(() => {
        fetchData(selectedCat);
      },[selectedCat])

    return (
        <div>
            <button onClick={() => selectHandle('Beef')}>Beef</button>
            <button onClick={() => selectHandle('Seafood')}>Seafood</button>
        {
            meals && meals.length > 0 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                    {
                        meals.map(meal => (
                            <div>
                                <label>{meal.strMeal}</label>
                                <img src={meal.strMealThumb} />
                            </div>
                        ))
                    }
                </div>
            ) : (
                <p>Loading</p>
            )
        }
        </div>
    );
}

export default CatalogProduct