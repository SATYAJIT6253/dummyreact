import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navbar';
import Homescreen from './screens/Homescreen';


function App() {
  return (
     <div className="Nav">
       <Navbar/>
       <Homescreen/>
     </div>
  );
}

export default App;
