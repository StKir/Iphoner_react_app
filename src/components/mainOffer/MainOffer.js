import omgImg from '../../assets/smiles/omg.png';

import './mainOffer.scss'

const MainOffer = () => {
    return(
        <div className='container'>
            <div className='mainOffer'>
                <div className='mainoffer_block-offer'>
                    <div className='mainoffer_block-offer_txt'>
                        <h2>Здесь продают яблоки и делают это хорошо!</h2>
                        <p>Мы открылись совсем недавно, но уже готовы радовать вас ценами и высоким сервисом!</p>
                    </div>
                    <img className='mainoffer_block-offer_img' src={omgImg} alt="omgImg" />
                </div>
                <a href="#" className='mainoffer_block_popular'>
                    <div className='popular-sticker'>
                        <span>Популярное</span>
                    </div>
                    <div className='mainoffer_block_popular_txt'>
                        <h4>Iphone 12 64gb</h4>
                        <p>Смартфон iPhone 12 64Gb Чёрный имеет огромный дисплей Super Retina XDR c диагональю 6,1 дюйма...</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default MainOffer;