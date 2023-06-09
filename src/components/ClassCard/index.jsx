import {motion} from "framer-motion";
import Swal from "sweetalert2";
import useUserType from "../../hooks/useUserType";
import useFetchUserDB from "../../hooks/useFetchUserDB";
import axiosURL from "../../axios/axiosURL";
const ClassCard = ({cls}) => {
  const [userType] = useUserType();
  const [userDB, isUserDBLoading] = useFetchUserDB();
  const bookingUserId = userDB?._id;
  const isBooked = userDB?.selectedClasses;
  const {_id, className, imageURL, price, availableSeats, instructorName} = cls;

  const handleEnroll = () => {
    if (!userType) {
      return Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please Login!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    axiosURL
      .patch(`/selected-classes/${bookingUserId}`, {selectedClass: _id})
      .then(({data}) => {
        if (data.matchedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Booked go to dashboard and pay now!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const variants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className={`card shadow-xl ${
        availableSeats === 0 ? "bg-red-200" : "bg-base-100"
      }`}>
      <figure>
        <img src={imageURL} alt={className} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <h3>
          <b>Instructor: </b>
          {instructorName}
        </h3>
        <h3>
          <b>Available seats: </b>
          {availableSeats}
        </h3>
        <h3>
          <b>Price: </b>
          {price}
        </h3>
        <div className="card-actions justify-end">
          <button
            onClick={handleEnroll}
            disabled={
              userType === "admin" ||
              userType === "instructor" ||
              availableSeats === 0 ||
              isUserDBLoading ||
              (isBooked && isBooked.includes(_id))
            }
            className="btn">
            {isBooked && isBooked.includes(_id) ? "Booked" : "Book Now"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassCard;