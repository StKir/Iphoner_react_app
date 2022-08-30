import './itemFiltars.scss';
import AppBack from '../appBack/AppBack';

const ItemFilters = () => {
    return(
        <div className='aside'>
            <AppBack/>
            <div className='filters'>
                <div className='filters_select'>
                    <select
                        className="filters_select-select"
                        name="select-element"
                        >
                            <option>Цены: по возрастанию</option>
                            <option>Цены: по убыванию</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default ItemFilters;