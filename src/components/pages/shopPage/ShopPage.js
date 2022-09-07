import './shopPage.scss';
import ShopFilters from '../../shopFilters/ShopFilters';
import ItemIphone from '../../itemIphone/ItemIphone';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIphons, filteredIphoneSelector } from '../../../store/iphonsSlice';

const ShopPage = () => {
    const {model} = useParams();
    const routerName = model.replace(/_/g, ' ')
    const dispatch = useDispatch();
    const {iphonsLoadingStatus} = useSelector(state => state.iphons)
    const {filterDisplay} = useSelector(state => state.filters)
    const iphons = useSelector(filteredIphoneSelector)

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchIphons(routerName))
         // eslint-disable-next-line
    }, []);

    const sortArray = (arr) => {
        switch (filterDisplay) {
            case 'Цены: по возрастанию': {
                return arr.sort((a,b) => parseFloat(a.price) - parseFloat(b.price));
            }
            case 'Цены: по убыванию': {
                return arr.sort((a,b) => parseFloat(b.price) - parseFloat(a.price));
            }
            default: {
                return arr
            }
        }
    }

    const renderIphons = (arr) => {
        if(iphonsLoadingStatus === 'idle' && arr.length > 0){ //Проверяем загрузились ли телефоны
            return sortArray(arr).map((props) => {
                return <ItemIphone key={props.id} {...props} model={model}/>
            })
        } else {
            return <h1 className='ErrorMassage_not-found'>Ничего не найдено по вашим фильтрам((</h1>
        }
    }

    const renderIphon = renderIphons(iphons);
    return(
        <div className='container'>
            <div className='item_page'>
                <ShopFilters iphon={routerName}/>
                <div className='item_page_shop-wrp'>
                    <h2>{routerName}</h2>
                    <div className='items_grid'>{renderIphon}</div>
                </div>
            </div>
        </div>
    )
}

export default ShopPage;