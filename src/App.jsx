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

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // console.log(cart);
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
            <h5>Name </h5>
            <h5>Price </h5>
          </div>
          {cart.map((item, index) => (
            <div className="cart-info">
              <p>{index + 1}</p>
              <h5>Name :{item.title.slice(0, 10)}</h5>
              <h5>Price : {item.price}</h5>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
