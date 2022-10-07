import AppBack from '../../appBack/AppBack';
import Slider from '@mui/material/Slider';

import './tradeIn.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useMemo } from 'react';

const TradeIn = () => {
    const [models, setModels] = useState([])
    const [kitInfo, setkitInfo] = useState([])
    const [modelPrice, setModelPrice] = useState(null)
    const [kit, setKit] = useState(null)
    const [damage, setDamage] = useState(1)
    const [total, setTotal] = useState(null)

    const setModel = (value) => {
        setModelPrice(value)
    }

    useEffect(() => {
        axios.get('http://localhost:3001/tradeIn')
                    .then(data => setModels(data.data))
                    .catch(err => console.log(err))

        axios.get('http://localhost:3001/tradeInKit')
                    .then(data => setkitInfo(data.data))
                    .catch(err => console.log(err))
    }, [])

    const renderModels = (arr) => {
        return arr.map((props) => {
            return <PhoneItem 
                    checked={modelPrice?.model === props.model? (true):(false)} 
                    key={props.id} {...props} 
                    setModel={() => setModel(props)} />
        })
    }

    const renderKit = (arr) => {
        return arr.map((props) => {
           return <ItemKit
                    {...props}
                    key={props.id}
                    checked={kit?.title === props.title? (true):(false)}
                    setKit={() => setKit(props)}/>
        })
    }
    console.log(total);
    const checkForm = (e) => {
        e.preventDefault()
        setTotal({
            model: modelPrice? ("error"): (modelPrice),
            kit: kit? ("error"): (kit),
            damage,
        })
        console.log(total);
    }

    const modelsArr = renderModels(models)
    const kitArr = renderKit(kitInfo)
    return(
        <section>
            <div className="container trade-in_wrp">
                <AppBack/>
                <h1>Расчитать Trade-in</h1>
                <div className='trade-in_part patr-1'>
                    <h3>Шаг 1. Выберете модель</h3>
                    <div className='trade-in_grid'>
                        {modelsArr}
                    </div>
                </div>
                <div className='trade-in_part patr-2'>
                    <h3>Шаг 2. Комплект</h3>
                    <div className='trade-in_grid'>
                        {kitArr}
                    </div>
                </div>
                <div className='trade-in_part patr-3'>
                    <h3>Шаг 3. Оцените состояние</h3>
                    <div className='trade-in_grid'>
                        <div className='damage-score'>
                            <div className='damage-score-number'>1</div>
                            <p className='damage-score-info'>
                                На запчасти, телефон не работает
                            </p>
                        </div>
                        <div className='damage-score'>
                            <div className='damage-score-number'>&#60;5</div>
                            <p className='damage-score-info'>
                                Телефон работает из последних сил
                            </p>
                        </div>
                        <div className='damage-score'>
                            <div className='damage-score-number'>&#62;5</div>
                            <p className='damage-score-info'>
                                Телефон работает исправно, но есть внешние дефекты
                            </p>
                        </div>
                        <div className='damage-score'>
                            <div className='damage-score-number'>10</div>
                            <p className='damage-score-info'>
                                Телефон как новый, ничего не менялось
                            </p>
                        </div>
                    </div>
                    <div className='trade-in-range'>
                        <Slider
                            aria-label="range"
                            defaultValue={1}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={10}
                            onChange={(e) => setDamage(e.target.value)}
                        />
                    </div>
                </div>
                <button className='math-sale' onClick={(e) => checkForm(e)}>
                    Рассчитать
                </button>
            </div>
        </section>
    )
}

const PhoneItem = (props) => {
    return (
            <div 
                className={props.checked? ("trade-in_item trade-in_item-active"): ('trade-in_item')}
                onClick={props.setModel}>
                <span className='item-name'>{props.model}</span>
            </div>
    )
}

const ItemKit = (props) => {
    return (
            <div 
            className={props.checked? ("trade-in_item trade-in_item-active"): ('trade-in_item')}
            onClick={props.setKit}>
                <span className='item-name'>{props.title}</span>
            </div>
    )
}

const ErrorText = (props) => {
    return (
            <div 
            className={props.checked? ("trade-in_item trade-in_item-active"): ('trade-in_item')}
            onClick={props.setKit}>
                <span className='item-name'>{props.title}</span>
            </div>
    )
}

export default TradeIn;