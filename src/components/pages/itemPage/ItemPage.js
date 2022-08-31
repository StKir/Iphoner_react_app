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
    const routerName = model.replace(/_/g, ' ')
    const dispathc = useDispatch();
    const {iphonsLoadingStatus} = useSelector(state => state.iphons)
    const iphons = selectAll(store.getState());

    useEffect(() => {
        dispathc(fetchIphons(routerName))
         // eslint-disable-next-line
    }, []);

    const renderIphons = (arr) => {
        if(iphonsLoadingStatus === 'idle'){
            return arr.map(({id,...props}) => {
                return (
                    <ItemIphone key={id} {...props} model={model}/>
                )
            })
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