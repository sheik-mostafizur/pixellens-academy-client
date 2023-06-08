import {MdPostAdd} from "react-icons/md";
import {SiGoogleclassroom} from "react-icons/si";
import {Link} from "react-router-dom";

const InstructorMenu = () => {
  return (
    <>
      <li>
        <Link
          to="add-class"
          className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <MdPostAdd className="text-2xl text-primary-900" />
          <span className="ml-3 flex-1 whitespace-nowrap">Add Class</span>
        </Link>
      </li>
      <li>
        <Link
          to="my-classes"
          className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <SiGoogleclassroom className="text-2xl text-primary-900" />
          <span className="ml-3 flex-1 whitespace-nowrap">My Classes</span>
        </Link>
      </li>
    </>
  );
};

export default InstructorMenu;
