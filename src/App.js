import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar';
import Homescreen from './screens/Homescreen';


function App() {
  return (
    <div className="Nav">
      <Navbar />
      <Homescreen />
      <Footer />
    </div>
  );
}

export default App;
