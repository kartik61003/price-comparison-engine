import './App.css';
import Deals from './Deals';
import News from './News';
import Navbar from './navbar';
import './pricecard.css'
import Products from './products';
import Topbrands from './topbrands';

function App() {
  return (
    <>
    <Navbar/>
    <Products/>
    <Topbrands/>
    <div className='container2'>
      <News/>
      <Deals/>
    </div>
    </>
  );
}

export default App;
