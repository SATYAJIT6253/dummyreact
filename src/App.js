import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import UI from './components/UI';
import Navbar from './components/navbar';
import Homescreen from './screens/Homescreen';


function App() {
  return (
     <div className="Nav">
       <Navbar/>
       <UI/>
       <Homescreen/>
     </div>
  );
}

export default App;
