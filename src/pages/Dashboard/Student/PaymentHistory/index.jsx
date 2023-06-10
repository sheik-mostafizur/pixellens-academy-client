import {useEffect, useState} from "react";
import useFetchUserDB from "../../../../hooks/useFetchUserDB";
import axiosURL from "../../../../axios/axiosURL";
import LoaderSpinner from "../../../../components/LoaderSpinner";

const PaymentHistory = () => {
  const [userDB, isUserDBLoading] = useFetchUserDB();
  const [paymentHistory, setPaymentHistory] = useState([]);
  useEffect(() => {
    axiosURL(`/payment-history/${userDB?._id}`).then(({data}) => {
      setPaymentHistory(data);
    });
  }, [userDB?._id]);

  return (
    <div>
      <h1>PaymentHistory</h1>
      {isUserDBLoading ? (
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
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Cart IDs
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
                      {payment?.status}
                    </th>
                    <th scope="row" className="px-6 py-4">
                      {payment?.cartId.map((id) => (
                        <span key={payment._id + id}>
                          {id} <br />
                        </span>
                      ))}
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
