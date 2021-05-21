
import './index.css';
import HomePage from './component/HomePage';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";




function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />


        <Switch>
          <main>

            <Route path='/' component={HomePage}></Route>

          </main>

        </Switch>



      </BrowserRouter>

    </>

  );
}

export default App;
