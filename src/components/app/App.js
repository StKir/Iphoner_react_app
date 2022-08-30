import {lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFoter";

import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = lazy(() => import('../pages/mainPage/MainPage'));
const ItemPage = lazy(() => import('../pages/itemPage/ItemPage'));

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader/>
          <main>
            <Suspense fallback={<h1>dsadsa</h1>}>
              <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/:model" element={<ItemPage/>} />
              </Routes>
            </Suspense>
          </main>
        <AppFooter/>
      </div>
    </Router>
  );
}

export default App;
