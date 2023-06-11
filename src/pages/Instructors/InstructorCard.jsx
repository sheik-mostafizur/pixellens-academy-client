import {motion} from "framer-motion";
const InstructorCard = ({instructor}) => {
  const {name, email, photoURL} = instructor;
  return (
    <motion.figure
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5}}
      className="flex flex-col items-center justify-center rounded-t-lg border-b border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:rounded-t-none md:rounded-tl-lg md:border-r">
      <figcaption className="space-x-3">
        <img
          className="mx-auto h-[150px] w-[150px] rounded-full object-cover"
          src={photoURL}
          alt="profile picture"
        />
        <div className="space-y-0.5 text-center font-medium dark:text-white">
          <div>{name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {email}
          </div>
        </div>
      </figcaption>
    </motion.figure>
  );
};

export default InstructorCard;
