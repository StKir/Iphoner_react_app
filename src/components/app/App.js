import AppHeader from "../appHeader/AppHeader";
import MainOffer from "../mainOffer/MainOffer";
import MainSlider from "../mainslider/MainSlider";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <AppHeader/>
        <MainOffer/>
        <MainSlider/>
    </div>
  );
}

export default App;
