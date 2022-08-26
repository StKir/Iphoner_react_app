import AppHeader from "../appHeader/AppHeader";
import MainOffer from "../mainOffer/MainOffer";
import MainSlider from "../mainslider/MainSlider";
import MainAbout from "../mainAbout/MainAbout";
import AppFooter from "../appFooter/AppFoter";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <AppHeader/>
        <MainOffer/>
        <MainSlider/>
        <MainAbout/>
        <AppFooter/>
    </div>
  );
}

export default App;
