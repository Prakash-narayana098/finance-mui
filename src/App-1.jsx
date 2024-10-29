import { useState } from "react";
function App() {
  // Your state and logic for managing cart and count
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === "Dessert");

      if (existingItem) {
        return prevCart.map((item) =>
          item.name === "Dessert" ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prevCart,
          { id: Date.now(), name: "Dessert", price: 10, quantity: 1 },
        ];
      }
    });
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);

      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.name === "Dessert");

        if (existingItem) {
          if (existingItem.quantity > 1) {
            return prevCart.map((item) =>
              item.name === "Dessert" ? { ...item, quantity: item.quantity - 1 } : item
            );
          } else {
            // Remove item if quantity reaches 0
            return prevCart.filter((item) => item.name !== "Dessert");
          }
        }
        return prevCart;
      });
    }
  };

  // Calculate total price based on cart items
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <>
      <h1 style={{ paddingLeft: "105px" }}>Desserts</h1>
      <div
        className="shop"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="cards" style={{ }}>
          {/* card-1 */}
          <div
            className="card-1"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              className="image"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <img
                src="./images/image-tiramisu-desktop.jpg"
                alt=""
                style={{
                  width: "50%",
                  border: "5px solid #ca3700",
                  borderRadius: "10px",
                }}
              />
            </div>
            {/* buttons */}
            <div
              className="buttons"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                bottom: -17,
                left: 135,
              }}
            >
              <button
                onClick={decrement}
                style={{
                  backgroundColor: "#ca3700",
                  padding: "5px 10px",
                  borderRadius: "0px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  color: "white",
                }}
              >
                -
              </button>
              <input
                type="text"
                value={count}
                style={{
                  textAlign: "center",
                  width: "20%",
                  backgroundColor: "#ca3700",
                  color: "white",
                }}
              />
              <button
                onClick={increment}
                style={{
                  backgroundColor: "#ca3700",
                  padding: "5px 10px",
                  borderRadius: "0px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  color: "white",
                }}
              >
                +
              </button>
            </div>
          </div>


          {/* Cart component displaying cart items and total */}
        </div>
        <div className="cart">
          <h2>Your Cart</h2>
          <div className="items">
            {cart.map((item) => (
              <div key={item.id}>
                {item.name} x {item.quantity}
              </div>
            ))}
          </div>
          <div className="total-order">
            <b>Order Total: ${total}</b>
          </div>
          <div>
            <button style={{
                  backgroundColor: "#ca3700"}}>Confirm Order</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
