import './itemImgGrid.scss';

import { useEffect, useState } from "react"
import { useUnsplash } from "../../hooks/useUnsplash";

const ItemImgGrid = ({iphone}) => {
    const [gridType, setGridType] = useState(1);
    const [imgArray, setImgArray] = useState([]);
    const {request, loading, process} = useUnsplash();

    useEffect(() => {
        request(`${iphone}`, 8).then(data => setImgArray(data))
    }, [])

    useEffect(() => {
        setGridType(Math.floor(Math.random() * (3 - 1) + 1))
    }, [])

    const getGrid = (num) => {
        if(num === 1) {
            return(
                <GridTypeOne arrayImg={imgArray}/>
            )
        } else {
            return (
                <GridTypeTwo arrayImg={imgArray}/>
            )
        }
    }

    return(
        <section className="photo_iphons">
            <div className="container">
                <h2>Фото</h2>
                {(process === 'success')? (getGrid(1)): <h1>Ошибка при загрузке картинок</h1>}
            </div>
        </section>
    )
}

const GridTypeOne = ({arrayImg}) => {
    const grid = arrayImg.map(({regular}, index) => {
        return (
            <img src={regular} key={index} alt="iphone img" />
        )
    })
    return (
        <div className="grid-one_img_wrp main">
            {grid}
        </div>
    )
}

const GridTypeTwo = ({arrayImg}) => {
    return (
        <div className="grid-two_img_wrp main">
            <img src={arrayImg[0].regular} alt="iphone img" />
        </div>
    )
}

export default ItemImgGrid;