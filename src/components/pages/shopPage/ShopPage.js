import { useParams } from 'react-router-dom';

const ShopPage = () => {
    const {title} = useParams();
    return(
        <h1>{title}</h1>
    )
}
export default ShopPage;