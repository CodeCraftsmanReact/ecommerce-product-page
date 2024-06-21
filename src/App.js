import './App.css';
import Appbar from './components/Appbar';
import ProductInformation from './components/ProductInformation';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [itemInCart, setItemInCart] = useState(false);

  return (
    <div className="relative">
        <Appbar setCount={setCount} count={count} setItemInCart={setItemInCart} itemInCart={itemInCart} />
        <div className='md:flex md:gap-16 md:items-center md:mx-[120px] md:p-52'>
          <ProductInformation count={count} setCount={setCount} setItemInCart={setItemInCart} />
        </div>
    </div>
  );
}

export default App;
