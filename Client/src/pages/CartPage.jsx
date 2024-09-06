import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart items from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Function to remove item from the cart
  const removeCartItem = (pid) => {
    try {
      let updatedCart = [...cart];
      const index = updatedCart.findIndex((item) => item._id === pid);
      if (index !== -1) {
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // Function to calculate total price
  const totalPrice = () => {
    try {
      let total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const makePayment = async () => {
    setIsLoading(true);

    try {
      // Load Stripe.js with your public key
      const stripe = await loadStripe(
        "pk_test_51PqeVc2LqkxsWBYXF73CVowl48Rg4Ru6JIwwqvmL7Mi16sir5UOZGsB7m4ewtKZ2C1zC78vKaRpuSSo6goYleYSF00CQLNpBdx"
      );

      const body = { products: cart }; // Replace 'cart' with your state containing products
      const headers = { "Content-Type": "application/json" };

      // Make a POST request to your server to create a Stripe session
      const response = await fetch(
        "http://localhost:8000/api/v1/product/payments",
        {
          // Adjust URL to match your server
          method: "POST",
          headers,
          body: JSON.stringify(body),
        }
      );

      const session = await response.json();

      // Check if the session was created successfully
      if (!session.id) {
        throw new Error("Failed to create Stripe session");
      }

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      // Handle any errors from redirecting to checkout
      if (result.error) {
        console.error("Stripe checkout error:", result.error.message);
      }
    } catch (error) {
      console.error("Payment error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeCartItem(item._id)}>Remove</button>
            </div>
          ))}
          <h2>Total: {totalPrice()}</h2>
          <button
            onClick={makePayment}
            disabled={isLoading}
            className="btn btn-success"
          >
            {isLoading ? "Processing..." : "Checkout"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
