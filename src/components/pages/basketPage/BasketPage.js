import './basketPage.scss';
import AppBack from '../../appBack/AppBack';
import BasketItem from '../../basketItem/BasketItem';
import BasketForm from '../../basketForm/BasketForm';

import store from '../../../store/store';
import {selectAll} from '../../../store/basketSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { basketRemoveItem, basketUpdateItem, basketSetTotal } from '../../../store/basketSlice';
import { calcAmount } from '../../../store/basketSlice';
import { useDispatch } from 'react-redux';

const BasketPage = () => {
    const [itemsArray, setItemsArray] = useState(null)
    const amount = useSelector(calcAmount);//Кастомный селектор возвращает общую сумму корзины
    const dispatch = useDispatch()

    useEffect(() => {
        setItemsArray(selectAll(store.getState()))
        dispatch(basketSetTotal(amount))
    // eslint-disable-next-line
    }, [amount])

    const onDelete = (obj) => {
        dispatch(basketRemoveItem(obj))
    // eslint-disable-next-line
    }


    const onChangeCountInc = ({counter, id, stock}) => {
        if(stock > counter){
            dispatch(basketUpdateItem({id: id, changes: {counter: counter + 1}}))
        }
    }
    const onChangeCountDec = (el) => {
        const {counter, id} = el
        if(counter > 1){
            dispatch(basketUpdateItem({id: id, changes: {counter: counter - 1}}))
        } else {
            onDelete({id})
        }
    }

    const renderItems = (arr) => {
        if(arr && arr.length){
            return arr.map((el) => {
                return <BasketItem
                            key={el.id}
                            onDelete={() => onDelete({id: el.id, price: el.price, counter: el.counter})}
                            {...el}
                            onChangeCountInc={() => onChangeCountInc(el)}
                            onChangeCountDec={() => onChangeCountDec(el)}/>
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
                <div className='basket_amount'
                style={amount? ({display: 'table'}): ({display: 'none'})}>
                    <span>Итог:</span> <span>{amount} руб</span>
                </div>
                <BasketForm/>
            </div>
        </section>
    )
}

export default BasketPage;