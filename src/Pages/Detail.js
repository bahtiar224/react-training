import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import '../Style/Catalog/Product.css';
import '../Style/Catalog/Loading.css';
import ModalImage from "react-modal-image";


const Detail = () => {
    const {idMeal} = useParams();
    const [titles, setTitles] = useState('');
    const [description, setDesc] = useState('');
    const [images, setImages] = useState('https://miro.medium.com/max/512/0*pyRw1qikTI1eqGm9.gif');
    const [link, setLink] = useState('https://www.youtube.com/embed/tgbNymZ7vqY');
    const [loading, setLoading] = useState(false);

    const fetchData = async (idMeal) => {
        console.log(idMeal);
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+idMeal);
        const result = await data.json();
        console.log(result.meals[0]['idMeal']);
        console.log("MANANANAssss");
        setLoading(true);
        setImages(result.meals[0]['strMealThumb']);
        setTitles(result.meals[0]['strMeal']);
        setDesc(result.meals[0]['strInstructions']);
        const temp = result.meals[0]['strYoutube'].split("=");
        setLink("https://www.youtube.com/embed/"+temp[1]);
    }
    useEffect(() => {
        fetchData(idMeal);
      },[])

    return (
        <div>
            {
            loading ?
                (
                    <div class="header">
                        <table>
                            <tr>
                                <td style={{"width" : "50%", "padding":"10px"}}>
                                    <iframe width="100%" height="300px"
                                    src={link}>
                                    </iframe>
                                    <br/>
                                    <div style={{"width":"100px"}}>
                                        <ModalImage
                                        small={images}
                                        large={images}
                                        alt={titles}
                                        />
                                    </div>
                                </td>
                                <td style={{"width" : "50%"}}>
                                    <h1>{titles}</h1>                                       
                                    <p className='description'>{description}</p>
                                </td>
                            </tr>
                        </table>
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

export default Detail