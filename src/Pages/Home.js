import React, {useEffect, useState} from 'react';
import '../Style/Catalog/CatStyle.css';
import Carousel from 'carousel-react-rcdev'
import { Link } from 'react-router-dom';

const Home = () => {
    const [category, setCategory] = useState([]);
    const fetchData = async () => {
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const result = await data.json();
        setCategory(result.categories);
    }
    

    useEffect(() => {
        fetchData();
      },[]
    )
    return (
        <div>
            <div class="header">
                <h1>Selamat Datang</h1>
                <p>Muhammad Bahtiar <b>from</b> Yogyakarta.</p>
            </div>
            {
                category.length > 0 ? (
                    <div>
                        <br/><br/>
                        <Carousel>
                            {
                                category.map(meal => (
                                    <Link to={'/catalog/'+meal.strCategory} className='w3-quarter'>
                                        <img src={meal.strCategoryThumb} width="200px" height="200px" style={{"border-radius":"100px"}}/>
                                        <center>{meal.strCategory}</center>
                                    </Link>
                                ))
                            }
                        </Carousel>
                    </div>
                ):(
                    <div class='fullscreenDiv'>
                        <div class="center">Loading . . .</div>
                    </div>
                )
            }
        </div>
    );
}

export default Home