import MainOffer from "../../mainOffer/MainOffer";
import MainSlider from "../../mainslider/MainSlider";
import MainAbout from "../../mainAbout/MainAbout";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
    return(
        <div className="Main_page_wrp">
            <MainOffer/>
            <MainSlider/>
            <MainAbout/>
        </div>
    )
}

export default MainPage;