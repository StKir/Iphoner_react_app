import './basketPage.scss';
import AppBack from '../../appBack/AppBack';
import BasketItem from '../../basketItem/BasketItem';

import store from '../../../store/store';
import {selectAll} from '../../../store/basketSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const BasketPage = () => {
    const amount = useSelector(store => store.basket.basketResult);
    const itemsArray = selectAll(store.getState());

    // useEffect(() => {

    // })

    const renderItems = (arr) => {
        if(arr && arr.length){
            return arr.map((el, {id}) => {
                return <BasketItem {...el} key={id}/>
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
                    {items.length? (items): (<h1>Коризна пуста</h1>)}
                </div>
            </div>
        </section>
    )
}

export default BasketPage;