import sliderIcon from '../../assets/icons/layout-plit.svg';
import plitIcon from '../../assets/icons/layout-grid.svg';
import tradeIn from '../../assets/img/trade-in-img.png'
import './mainSlider.scss'

import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from 'axios';


const MainSlider = () => {
    const sliderRef = useRef('')
    const [display, SetDisplay] = useState('slider')
    const [data, SetData] = useState(null)

    const onChangeDisplay = (type) => {
        SetDisplay(type)
    }

    useEffect(() => {
        axios.get('http://localhost:3001/iphons')
        .then(data => SetData(data.data))
        .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])

    return(
        <section>
            <div className="container">
                <div className='slider' ref={sliderRef}>
                    <h2>Айфоны</h2>
                    <div className='slider_btns'>
                        <div className={display === 'plit'? ('active_slider_btn'): null} onClick={(e) => onChangeDisplay('plit')}>
                            <img src={plitIcon} alt="Плитками" />
                            <span>Плитками</span>
                        </div>
                        <div className={display === 'slider'? ('active_slider_btn'): null} onClick={(e) => onChangeDisplay('slider')}>
                            <img src={sliderIcon} alt="Слайдером" />
                            <span>Слайдер</span>
                        </div>
                    </div>
                </div>
            </div>
            {display === 'slider'?
                (<Slider offset={sliderRef.current} data={data}/>)
                : (<Plite data={data}/>)
            }
        </section>
    )
}

const Slider = (props) => {
    const renderItemsSlider = (arr) => {
        if(arr){
            return arr.map(({name,id,thumbnail}) => {
                return (
                    <SwiperSlide
                    style={{width: 428}}
                    key={id}
                    >
                        <div className='slider_item'>
                            <img src={thumbnail} alt={name} />
                            <div className="slider_item_info">
                                <h4>{name}</h4>
                                <a href="#" className='slider_item_info-link'>Смотреть товары</a>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
    }

    const itemsSlider = renderItemsSlider(props.data)
    return(
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            className="mySwiper"
            slidesOffsetBefore={props.offset ?  (props.offset.offsetLeft) :  (200)}
            >
                {itemsSlider}
                <SwiperSlide
                    style={{width: 428}}
                    key='99'
                    >
                    <div className='slider_item'>
                        <img src={tradeIn} alt='trade In' />
                        <div className="slider_item_info">
                            <h4>Trade-in</h4>
                            <a href="#" className='slider_item_info-link'>Расчитать стоимость</a>
                        </div>
                    </div>
                </SwiperSlide>
        </Swiper>
    )
}

const Plite = (props) => {
    const renderPlit = (arr) => {
        if(arr){
            return arr.map(({name,id,thumbnail}) => {
                return (
                    <div className='plite_wrp' key={id}>
                        <img src={thumbnail} alt={name} />
                        <div className='plite_info'>
                            <h5>{name}</h5>
                            <a href='#'>Смотреть товары</a>
                        </div>
                    </div>
                )
            })
        }
    }

    const items = renderPlit(props.data)

    return (
        <div className='container'>
            <div className='plite-grid'>
                {items}
                <div className='plite_wrp' key='99'>
                    <img src={tradeIn} alt='trade-in' />
                    <div className='plite_info'>
                        <h5>Trade-in</h5>
                        <a href='#'>Расчитать стоимость</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSlider;