import './App.css';
import Appbar from './components/Appbar';
import ImageCarousel from './components/ImageCarousel';
import ProductInformation from './components/ProductInformation';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [itemInCart, setItemInCart] = useState(false);

  return (
    <div className="container relative">
        <Appbar setCount={setCount} count={count} setItemInCart={setItemInCart} itemInCart={itemInCart} />
        <ImageCarousel/>
        <ProductInformation count={count} setCount={setCount} setItemInCart={setItemInCart} />
    </div>
  );
}

export default App;
