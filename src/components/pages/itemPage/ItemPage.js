import './itemPage.scss'
import ItemFilters from '../../itemFilters/ItemFilters';
import ItemIphone from '../../itemIphone/ItemIphone';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIphons, filteredIphoneSelector } from '../../../store/iphonsSlice';

const ItemPage = () => {
    const {model} = useParams();
    const routerName = model.replace(/_/g, ' ')
    const dispathc = useDispatch();
    const {iphonsLoadingStatus} = useSelector(state => state.iphons)
    const {filterCoast, filterMemory, filterColor} = useSelector(state => state.filters)
    const iphons = useSelector(filteredIphoneSelector)

    useEffect(() => {
        window.scrollTo(0, 0)
        dispathc(fetchIphons(routerName))
         // eslint-disable-next-line
    }, []);

    const renderIphons = (arr) => {
        if(iphonsLoadingStatus === 'idle'){ //Проверяем загрузились ли телефоны
            if(arr.length > 0){ // Проверяем что загруженные телефон есть
                return arr.map(({id, ...props}) => {
                    if( (filterCoast.ot < props.price) && 
                        (filterCoast.do > props.price) && //Фильруем по заданной стоимости
                        (filterMemory === props.memory || filterMemory === 'none') && //Фильруем по заданной памяти
                        (filterColor === props.color.name || filterColor === 'none')//Фильруем по заданному цвету
                    ){
                        return (
                            <ItemIphone key={id} {...props} model={model}/>
                        )
                    }
                })
            } else {
                return (<h1 className='ErrorMassage_not-found'>Ничего не найдено</h1>)
            }
        }
    }

    const renderIphon = renderIphons(iphons);
    return(
        <div className='container'>
            <div className='item_page'>
                <ItemFilters iphon={routerName}/>
                <div className='items_grid'>{(renderIphon && renderIphon.length > 0)? (renderIphon): (<h1 className='ErrorMassage_not-found'>Ничего не найдено</h1>)}</div>
            </div>
        </div>
    )
}

export default ItemPage;