import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useFetchData from "../../hooks/useFetchData";
import useFetchUserDB from "../../hooks/useFetchUserDB";

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {
  const [userDB, isUserDBLoading] = useFetchUserDB();
  const email = userDB && userDB?.email;

  const {data: carts} = useFetchData(`/carts/${email}`);
  
  // get price in selected carts
  const totalPrice = carts.reduce((acc, sum) => {
    acc += sum.price;
    return acc;
  }, 0);
  return (
    <div className="payment w-96">
      {!isUserDBLoading && (
        <Elements stripe={stripePromise}>
          <CheckoutForm carts={carts} price={totalPrice} user={userDB} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
