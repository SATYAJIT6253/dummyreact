import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
<<<<<<< HEAD
import Footer from './components/Footer';
=======
import UI from './components/UI';
>>>>>>> 87c933c67f43dd7c2ff02990f10af8d875e1e2bb
import Navbar from './components/navbar';
import Homescreen from './screens/Homescreen';


function App() {
  return (
     <div className="Nav">
       <Navbar/>
       <UI/>
       <Homescreen/>
       <Footer/>
     </div>
  );
}

export default App;
