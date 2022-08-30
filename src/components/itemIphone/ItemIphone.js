import basket from '../../assets/icons/akar-icons_basket_white.svg'
import './itemIphone.scss'
import { Link } from 'react-router-dom';

const ItemIphone = (props) => {
    const {title,memory,color,thumbnail,stock,model,price} = props;
    const routerName = title.replace(/ /g, '_')
    return(
        <div className="Iphone_item">
                <Link to={`/${model}/${routerName}`}>
                    <img 
                        className="Iphone_item_thumbnail"
                        src={thumbnail}
                        alt={model} />
                </Link>
            <div className="Iphone_item_info">
                <h5>{title}</h5>
                <span className="Iphone_item_info-specifications">{memory} {color.name}</span>
                <span className="Iphone_item_info-number">На складе: {stock}шт</span>
            </div>
            <div className="Iphone_item_pay">
                <div className="Iphone_item_pay_price">
                    <span>{price}</span> руб
                </div>
                <div className="Iphone_item_pay_basket">
                    <img src={basket} alt="basket" />
                    <span>В корзину</span>
                </div>
            </div>
        </div>
    )
}

export default ItemIphone;