import {useEffect, useState} from "react";
import useFetchUserDB from "../../../../hooks/useFetchUserDB";
import axiosURL from "../../../../axios/axiosURL";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import {Helmet} from "react-helmet-async";

const PaymentHistory = () => {
  const [userDB] = useFetchUserDB();
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axiosURL(`/payment-history/${userDB?._id}`).then(({data}) => {
      setPaymentHistory(data);
      setIsLoading(false);
    });
  }, [userDB?._id]);
  if (!paymentHistory?.length > 0)
    return (
      <>
        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <>
            <h1 className="py-8 text-center text-3xl font-bold text-red-600 md:text-5xl">
              Payment History Empty!
            </h1>
            <Helmet>
              <title>Payment History Empty | PixelLens Academy</title>
            </Helmet>
          </>
        )}
      </>
    );
  return (
    <div>
      <Helmet>
        <title>Payment History | PixelLens Academy</title>
      </Helmet>
      <h1 className="mb-8 flex items-center justify-between gap-4 text-3xl font-bold text-primary-800">
        PaymentHistory
      </h1>
      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase text-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Class IDs
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory &&
                paymentHistory.map((payment) => (
                  <tr
                    key={payment._id}
                    className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4">
                      {payment?.transactionId}
                    </th>
                    <th scope="row" className="min-w-[155px] px-6 py-4">
                      {new Date(payment?.paymentDate).toDateString()}
                      <br />
                      {new Date(payment?.paymentDate).toLocaleTimeString()}
                    </th>
                    <th scope="row" className="px-6 py-4">
                      {payment?.price}
                    </th>
                    <th scope="row" className="px-6 py-4">
                      {payment?.status}
                    </th>
                    <th scope="row" className="px-6 py-4">
                      {payment?.classId.map((id) => (
                        <span key={payment._id + id}>
                          {id} <br />
                        </span>
                      ))}
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
