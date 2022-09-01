import './itemFiltars.scss';

import AppBack from '../appBack/AppBack';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {filterChangeDisplay, filterChangeCoast, filterChangeMemory, filterChangeColor, filterReset} from '../../store/filtersSlice'
import { useDispatch } from 'react-redux/es/exports';

const ItemFilters = ({iphon}) => {
    const [model, setModel] = useState(null);
    const [filterMemory, setFilterMemory] = useState(null);
    const [filterColor, setFilterColor] = useState(null);
    const dispathc = useDispatch();

    useEffect(() => {
        dispathc(filterReset());
        // eslint-disable-next-line
    }, [])

    const resetFiltersMenu = () => {
        dispathc(filterReset())
        setFilterColor(null)
        setFilterMemory(null)
    }

    useEffect(() => {
        axios.get('http://localhost:3001/iphons')
                .then(data => setModel(data.data.filter(({name}) => {
                    return name === iphon
                })[0]))
                .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])

    const onChangeMemory = (e) => {
        setFilterMemory(e.target.textContent)
        dispathc(filterChangeMemory(e.target.textContent))
    }

    const onChangeColor = (el) => {
        setFilterColor(el);
        dispathc(filterChangeColor(el))
    }

    const onChangeCoast = (e) => { 
        e.preventDefault()
        dispathc(filterChangeCoast({
            ot: Number(e.target[0].value),
            do: Number(e.target[1].value > 5? (e.target[1].value): (999999))
        }))
    }

    const renderMemory = (obj) => {// Обернуть в usecallback 
        if(obj) {
            return obj.memory.map((el,id) => {
                return (
                    <div className='filter_memory_item' style={filterMemory === el? ({border: '1px solid #3522B0'}): null} key={id} onClick={(e) => onChangeMemory(e)}>
                        {el}
                    </div>
                )
            })
        } else {
            return null
        }}

    const renderColor = (obj) => { // Обернуть в usecallback 
        if(obj) {
            return obj.color.map((el,id) => {
                const style = {
                    backgroundColor: el.color,
                    border: filterColor === el.name? ('1px solid #3522B0'): null
                }
                return (
                    <div
                        key={id}
                        className='filter_color_item'
                        alt={el.name}
                        style={style}
                        onClick={() => onChangeColor(el.name)}></div>
                )
            })
        } else {
            return null
        }}

    const memoryItem = renderMemory(model);
    const colorsItem = renderColor(model);
    return(
        <div className='aside'>
            <AppBack/>
            <div className='filters'>
                <div className='filters_select'>
                    <select
                        className="filters_select-select filterItem"
                        name="select-element"
                        onChange={e => {dispathc(filterChangeDisplay(e.target.value))}}
                        >
                            <option>По умолчанию</option>
                            <option>Цены: по возрастанию</option>
                            <option>Цены: по убыванию</option>
                    </select>
                </div>
                <div className='filters_price filterItem'>
                    <form
                        name='filters_price'
                        className='filters_price_form'
                        onSubmit={(e) => onChangeCoast(e)}>
                        <label htmlFor="filters_price" className='filter_title'>Стоимость</label>
                        <div className='filters_price_form-inputs'>
                            <input type="number" name='ot' placeholder='От'/>
                            <input type="number" name='do' placeholder='До'/>
                        </div>
                        <button type='sumbit' className='filters_price_form-btn'>
                            Показать
                        </button>
                    </form>
                </div>
                <div className='filters_memmory filterItem'>
                    <span className='filter_title'>Объём памяти</span>
                    <div className='filters_memmory-grid'>
                        {memoryItem}
                    </div>
                </div>
                <div className='filters_colors filterItem'>
                    <span className='filter_title'>Цвет</span>
                    <div className='filters_colors-grid'>
                        {colorsItem}
                    </div>
                </div>
                <div className='filters_reset-filters'>
                    <div
                        className='filters_reset-filters_btn'
                        onClick={resetFiltersMenu}>
                            Cбросить фильтры
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemFilters;