
import './App.css';
import Leftitem from './Components/Leftitem/Leftitem';
import Leftitembook from './Components/Leftitembook/Leftitembook'
import Leftitembags from './Components/Leftitembags/Leftitembags'
import Leftitemcar from './Components/Leftitemcar/Leftitemcar'
import Leftitemlap from './Components/Leftitemlap/Leftitemlap'
import Leftitemhl from './Components/Leftitemhl/Leftitemhl'
import Leftitembook2 from './Components/Leftitembook2/Leftitembook2'
import Leftitemcar2 from './Components/Leftitemcar2/Leftitemcar2'
import {BrowserRouter as Router , Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App" >

<Route path="/" exact component={Leftitem} ></Route>
<Route path="/books" component={Leftitembook}  ></Route>
<Route path="/bags" component={Leftitembags}  ></Route>
<Route path="/cars" component={Leftitemcar}  ></Route>
<Route path="/laptops" component={Leftitemlap}  ></Route>
<Route path="/pageno2" component={Leftitemhl}  ></Route>
<Route path="/bookpageno2" component={Leftitembook2}  ></Route>
<Route path="/carpageno2" component={Leftitemcar2}  ></Route>
    </div>
    </Router> 
  );
}

export default App;
