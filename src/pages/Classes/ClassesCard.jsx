import {motion} from "framer-motion";
import useUserType from "../../hooks/useUserType";
const ClassesCard = ({cls}) => {
  const [userType] = useUserType();
  const {className, imageURL, price, availableSeats, instructorName} = cls;
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
            disabled={
              userType === "admin" ||
              userType === "instructor" ||
              availableSeats === 0
            }
            className="btn-primary btn">
            Enrol Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassesCard;
