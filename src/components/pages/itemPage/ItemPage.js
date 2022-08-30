import './itemPage.scss'
import ItemFilters from '../../itemFilters/ItemFilters';
import ItemIphone from '../../itemIphone/ItemIphone';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIphons, selectAll } from '../../../store/iphonsSlice';
import store from '../../../store/store';

const ItemPage = () => {
    const {model} = useParams();
    const dispathc = useDispatch();
    const {iphonsLoadingStatus} = useSelector(state => state.iphons)
    const iphons = selectAll(store.getState());

    useEffect(() => {
        dispathc(fetchIphons(model))
         // eslint-disable-next-line
    }, []);

    const renderIphons = (arr) => {
        if(iphonsLoadingStatus === 'idle'){
            console.log('yes');
            return arr.map(({id,...props}) => {
                return (
                    <ItemIphone key={id} {...props} model={model}/>
                )
            })
        }
    }

    const renderIphon = renderIphons(iphons);
    console.log(iphons);
    return(
        <div className='container'>
            <div className='item_page'>
                <ItemFilters/>
                <div className='items_grid'>{renderIphon}</div>
            </div>
        </div>
    )

}

export default ItemPage;