import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = ({classData}) => {
  return (
    <div className="w-96">
      <Elements stripe={stripePromise}>
        <CheckoutForm classData={classData} />
      </Elements>
    </div>
  );
};

export default Payment;
