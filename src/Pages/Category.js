import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Style/Catalog/Product.css';
import '../Style/Catalog/Loading.css';

const CategoryProduct = () => {
    const {idCategory} = useParams();
    const [meals, setMeals] = useState(null);

    const fetchData = async (idCategory) => {
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+idCategory);
        const result = await data.json();
        setMeals(result.meals);
    }

    useEffect(() => {
        fetchData(idCategory);
      },[])

    return (
        <div>
        {
            meals && meals.length > 0 ? (
                <div>
                    <div class="header">
                        <h1>Product Category</h1>
                        <p>{idCategory}</p>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                        <div className='w3-row-padding w3-padding-16 w3-center'>
                            {
                                meals.map(meal => (
                                    <Link to={'/catalog/detail/'+meal.idMeal} className='w3-quarter'>
                                        <img src={meal.strMealThumb} width="100%" height="100%"/>
                                        <p>{meal.strMeal}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <div class='fullscreenDiv'>
                    <div class="center">Loading . . .</div>
                </div>
            )
        }
        </div>
    );
}

export default CategoryProduct