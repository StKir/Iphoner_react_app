import './basketPage.scss';
import AppBack from '../../appBack/AppBack';
import BasketItem from '../../basketItem/BasketItem';

import store from '../../../store/store';
import {selectAll} from '../../../store/basketSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { basketRemoveItem } from '../../../store/basketSlice';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

const BasketPage = () => {
    const [itemsArray, setItemsArray] = useState(null)
    const amount = useSelector(store => store.basket.basketResult);
    const dispatch = useDispatch()

    useEffect(() => {
        setItemsArray(selectAll(store.getState()))
    // eslint-disable-next-line
    })

    const onDelete = useCallback((obj) => {
        dispatch(basketRemoveItem(obj))
    // eslint-disable-next-line
    }, [itemsArray]);

    const renderItems = (arr) => {
        if(arr && arr.length){
            return arr.map((el) => {
                return <BasketItem key={el.id} onDelete={() => onDelete({id: el.id, price: el.price})} {...el}/>
            })
        } else {
            return false
        }
    }

    const items = renderItems(itemsArray);

    return(
        <section className="basket-section">
            <div className='container'>
                <AppBack/>
                <h2 className='basket_title'>Корзина</h2>
                <div className='basket_items-wrp'>
                    {items.length? (items): (<h1 className='basket-empty'>Корзина пуста</h1>)}
                </div>
            </div>
        </section>
    )
}

export default BasketPage;