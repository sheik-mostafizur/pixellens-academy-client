import {motion} from "framer-motion";
import Swal from "sweetalert2";
import useUserType from "../../hooks/useUserType";
import useFetchUserDB from "../../hooks/useFetchUserDB";
import axiosURL from "../../axios/axiosURL";
import useFetchEnrolledClassesDB from "../../hooks/useFetchEnrolledClassesDB";
import useFetchData from "../../hooks/useFetchData";
const ClassCard = ({cls}) => {
  const [userType] = useUserType();
  const [userDB] = useFetchUserDB();
  const {data: cartsData, refetch} = useFetchData(`/carts/${userDB?.email}`);
  const {
    _id,
    className,
    imageURL,
    price,
    availableSeats,
    enrolled,
    instructorName,
  } = cls;

  // get enrolled Classes and collect classes ids
  const [enrolledClassesDB] = useFetchEnrolledClassesDB();
  const bookedIds = enrolledClassesDB?.map((ids) => ids._id);
  const cartIds = cartsData?.map((ids) => ids.classId);

  const handleEnroll = () => {
    if (!userType || bookedIds?.includes(_id) || cartIds?.includes(_id)) {
      return Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please Login!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (userDB) {
      const cart = {
        classId: _id,
        name: className,
        imageURL: imageURL,
        price: price,
        instructorName: instructorName,
        email: userDB.email,
      };

      axiosURL.post(`/carts`, cart).then(({data}) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Booked go to dashboard and pay now!",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    }
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
      whileHover={{scale: 1.05}}
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
          <b>Enrolled: </b>
          {enrolled}
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
              bookedIds?.includes(_id) ||
              cartIds?.includes(_id)
            }
            className="btn">
            {bookedIds?.includes(_id) || cartIds?.includes(_id)
              ? "Booked"
              : "Book Now"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassCard;
