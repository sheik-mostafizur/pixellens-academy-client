import {Link} from "react-router-dom";
import EnrollImg from "../../../assets/icons/enroll.png";
import SelectedImg from "../../../assets/icons/selected.png";
const StudentMenu = () => {
  return (
    <>
      <li>
        <Link
          to="selected-classes"
          className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <img className="w-6" src={SelectedImg} alt="enrolled" />
          <span className="ml-3 flex-1 whitespace-nowrap">
            Selected Classes
          </span>
        </Link>
      </li>
      <li>
        <Link
          to="enrolled-classes"
          className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <img className="w-6" src={EnrollImg} alt="enrolled" />
          <span className="ml-3 flex-1 whitespace-nowrap">
            Enrolled Classes
          </span>
        </Link>
      </li>
    </>
  );
};

export default StudentMenu;
