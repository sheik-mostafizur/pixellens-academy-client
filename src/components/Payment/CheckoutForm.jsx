import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import {useEffect, useState} from "react";
import axiosURL from "../../axios/axiosURL";
import Swal from "sweetalert2";

const CheckoutForm = ({carts, price, user}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

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
    const {error} = await stripe.createPaymentMethod({
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
            name: user?.name,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError); // TODO you can show this error your UI.
    }
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);

      const payment = {
        studentId: user?._id,
        transactionId,
        paymentDate: new Date(),
        status: "pending",
        price,
        cartId: carts.map((cart) => cart._id),
        classId: carts.map((cart) => cart.classId),
      };
      axiosURL.post("/payments", payment).then(({data}) => {
        if (data.insertResult.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setProcessing(false);
        }
      });
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
