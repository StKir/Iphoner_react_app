import './itempage.scss';

import axios from 'axios';

import { useParams } from 'react-router-dom';

import AppBack from '../../appBack/AppBack';
import Spiner from '../../spiner/Spiner';
import ItemInfo from '../../itemInfo/ItemInfo';

import { useEffect, useState } from 'react';


const ItemPage = () => {
    const {title} = useParams();
    const routerName = title.replace(/_/g, ' ');
    const [iphon, setIphon] = useState(null);

    useEffect(()=> {
        axios.get('http://localhost:3001/stock')
                    .then(data => setIphon(data.data.filter(({title}) => title === routerName)[0]))
                    .catch(err => console.log(err))
    // eslint-disable-next-line
    }, [])

    return(
        <section className='item_iphone'>
            <div className='container'>
                <AppBack/>
                <div className='you-add-to-cart'>
                    Вы добавили {iphon? (iphon.title): ('Что-то')} в корзину
                </div>
                {iphon? <ItemInfo {...iphon}/> : <Spiner/>}
            </div>
        </section>
    )
}

export default ItemPage;