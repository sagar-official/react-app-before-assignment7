import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import SingleProducts from "./SingleProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleCart = (p) => {
    const isExist = cart.find((pd) => pd.id === p.id);
    if (!isExist) {
      setCart([...cart, p]);
    } else {
      alert("already exists");
    }
  };
  console.log(cart);
  return (
    <>
      <div className="main-container">
        <div className="cards-container">
          {products.map((pd) => (
            <SingleProducts
              product={pd}
              handleCart={handleCart}
            ></SingleProducts>
          ))}
        </div>
        <div className="cart-container">
          <h3>This is cart</h3>
          <div className="cart-title">
            <h5>Name :</h5>
            <h5>Price :</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
