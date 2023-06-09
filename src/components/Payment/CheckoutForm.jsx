import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import {useEffect, useState} from "react";
import axiosURL from "../../axios/axiosURL";

const CheckoutForm = ({classData}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const {price} = classData;

  useEffect(() => {
    if (price) {
      axiosURL.post("/create-payment-intent", {price}).then(({data}) => {
        setClientSecret(data.clientSecret);
      });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error); // TODO you can show this error your UI.
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);
    const {paymentIntent, error: confirmError} =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: classData?.name,
            email: classData?.email,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError); // TODO you can show this error your UI.
    }
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn w-full"
        disabled={!stripe || !clientSecret || processing}>
        Pay Now
      </button>
      {transactionId && (
        <p className="text-green-400">Transaction ID: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
