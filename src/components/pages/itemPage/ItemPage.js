import './itemPage.scss'
import ItemFilters from '../../itemFilters/ItemFilters';
import ItemIphone from '../../itemIphone/ItemIphone';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
        dispathc(fetchIphons(routerName))
         // eslint-disable-next-line
    }, []);

    const renderIphons = (arr) => {
        if(iphonsLoadingStatus === 'idle'){
            if(arr.length > 0){
                return arr.map(({id,...props}) => {
                    if(filterCoast.ot < props.price && filterCoast.do > props.price){
                        return (
                            <ItemIphone key={id} {...props} model={model}/>
                        )
                    }
                })
            } else {
                return (<h1>Ничего не найдено</h1>)
            }
        }
    }

    const renderIphon = renderIphons(iphons);
    return(
        <div className='container'>
            <div className='item_page'>
                <ItemFilters iphon={routerName}/>
                <div className='items_grid'>{renderIphon}</div>
            </div>
        </div>
    )

}

export default ItemPage;