import './itempage.scss';
import minus from '../../../assets/icons/minus.svg';
import plus from '../../../assets/icons/plus.svg';

import ReactImageZoom from 'react-image-zoom'; // выйдает ошибку в консоли Warning: Using...

import { useParams } from 'react-router-dom';

import AppBack from '../../appBack/AppBack';

const ItemPage = () => {
    const {title} = useParams();
    
    const imgZoomProps = {width: 555, height: 535, zoomWidth: 500, zoomPosition: 'original', img: "https://iphoriya.ru/wp-content/uploads/iphone-13-pro-max-silver.jpg"}
    return(
        <section className='item_iphone'>
            <div className='container'>
                <AppBack/>
                <div className='you-add-to-cart'>
                    Вы добавили Apple iPhone 13 Pro Max 1TB Silver в корзину
                </div>
                <div className='item_iphone_screen-wrp'>
                    <div className='item_iphone_screen-img'>
                        <ReactImageZoom {...imgZoomProps}/> 
                    </div>
                    <div  className='screen_info'>
                        <h3 className='screen_info-name'>
                            Apple iPhone 13 Pro Max 1TB Silver
                        </h3>
                        <div className='screen_info-stock-info'>
                            <h4 className='screen_info-stock-info_price'>125 500 руб.</h4>
                            <span className='stock_info'>В наличии, много</span>
                        </div>
                        <div className='screen_info-specifications'>
                            <div className='specifications_item'>
                                <span className='specifications-title'>Память</span>
                                <span className='specifications-specific'>1TB</span>
                            </div>
                            <div className='specifications-line'></div>
                            <div className='specifications_item'>
                                <span className='specifications-title'>Цвет</span>
                                <span className='specifications-specific'>Серебристый</span>
                            </div>
                        </div>
                        <div className='screen_info_shop-selectors'>
                            <div className='shop-selectors-counter'>
                                <img src={minus} alt="minus" />
                                    <span className='counter'>1</span>
                                <img src={plus} alt="plus" />
                            </div>
                            <div className='shop-selectors-oneClick'>
                                Купить в 1 клик
                            </div>
                            <div className='shop-selectors-add-to-cart'>
                                <div className='svg-basket'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.92516 9.36831C1.89453 9.24549 1.89228 9.11731 1.91858 8.99349C1.94488 8.86967 1.99904 8.75347 2.07696 8.65371C2.15487 8.55395 2.25449 8.47325 2.36824 8.41773C2.482 8.36222 2.60691 8.33335 2.73349 8.33331H17.2668C17.3934 8.33335 17.5183 8.36222 17.6321 8.41773C17.7458 8.47325 17.8455 8.55395 17.9234 8.65371C18.0013 8.75347 18.0554 8.86967 18.0817 8.99349C18.108 9.11731 18.1058 9.24549 18.0752 9.36831L16.566 15.4041C16.4759 15.7647 16.2678 16.0848 15.9749 16.3136C15.682 16.5423 15.321 16.6666 14.9493 16.6666H5.05099C4.67933 16.6666 4.31836 16.5423 4.02544 16.3136C3.73251 16.0848 3.52445 15.7647 3.43433 15.4041L1.92516 9.36915V9.36831Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                                        <path d="M7.5 11.6666V13.3333M12.5 11.6666V13.3333M5 8.33331L8.33333 3.33331M15 8.33331L11.6667 3.33331" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <span className='add-to-cart-txt'>Добавить в корзину</span>
                            </div>
                        </div>
                        <div className='screen_info-credit'>
                            <h5>Купите в кредит</h5>
                            <div className='credit-info'>
                                <p>Вы можете купить айфон в кредит, но оно вам надо? Нет, оно вам не надо.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ItemPage;