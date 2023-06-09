import Swal from "sweetalert2";
import {motion} from "framer-motion";
import {uesAuthContext} from "../../../../context/AuthContext";
import axiosURL from "../../../../axios/axiosURL";
const ShowInstructorData = ({instructorClasses, refetch}) => {
  const {user} = uesAuthContext();
  // **Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback)**.
  const handleStatus = (_id, status) => {
    Swal.fire({
      title: "Are you sure?",
      input: "text",
      inputPlaceholder: "FeedBack here...",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: status,
      showLoaderOnConfirm: true,
      preConfirm: (inputValue) => {
        return axiosURL
          .patch(`/admin/${user?.email}/classes/${_id}`, {
            status: status,
            feedback: inputValue,
          })
          .catch((error) => {
            Swal.showValidationMessage(
              `Please provide FeedBack or Request failed: ${error}`
            );
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Approved successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        return refetch();
      }
    });
  };
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {instructorClasses.map((instCls) => {
        const isPending = instCls.status === "pending" ? false : true;
        const cardBgColor =
          instCls.status === "pending"
            ? "bg-orange-100"
            : instCls.status === "denied"
            ? "bg-red-200"
            : "bg-green-100";

        return (
          <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            key={instCls._id}
            className={`shadow ${cardBgColor}`}>
            <img src={instCls.imageURL} alt="" />
            <div className="p-4">
              <h3>
                <b>Class Name: </b>
                {instCls.className}
              </h3>
              <h4>
                <b>Available Seats: </b>
                {instCls.availableSeats}
              </h4>
              <h4>
                <b>Price: </b>
                {instCls.price}
              </h4>
              <h4>
                <b>Status: </b>
                <span
                  className={
                    instCls.status === "pending"
                      ? "mr-2 rounded bg-yellow-100 px-2.5 py-0.5 font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                      : ""
                  }>
                  {instCls.status}
                </span>
              </h4>
              <h4>
                <b>Name: </b>
                {instCls.instructorName}
              </h4>
              <h4>
                <b>Email: </b>
                {instCls.instructorEmail}
              </h4>
              <div className="my-4">
                <button
                  onClick={() => handleStatus(instCls._id, "approved")}
                  disabled={isPending}
                  className={
                    isPending
                      ? "btn"
                      : "mb-2 mr-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  }>
                  Approve
                </button>
                <button
                  onClick={() => handleStatus(instCls._id, "denied")}
                  disabled={isPending}
                  className={
                    isPending
                      ? "btn"
                      : "mb-2 mr-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  }>
                  Deny
                </button>
              </div>
              {instCls?.feedback && (
                <h4>
                  <b>Feedback: </b>
                  {instCls?.feedback}
                </h4>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ShowInstructorData;
