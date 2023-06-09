import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import {uesAuthContext} from "../../context/AuthContext";
import useFetchData from "../../hooks/useFetchData";

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {
  const {user} = uesAuthContext();
  const email = user && user?.email;
  
  const {data: carts} = useFetchData(`/carts/${email}`);

  // get price in selected carts
  const totalPrice = carts.reduce((acc, sum) => {
    acc += sum.price;
    return acc;
  }, 0);
  return (
    <div className="payment w-96">
      <Elements stripe={stripePromise}>
        <CheckoutForm carts={carts} price={totalPrice} user={user} />
      </Elements>
    </div>
  );
};

export default Payment;
