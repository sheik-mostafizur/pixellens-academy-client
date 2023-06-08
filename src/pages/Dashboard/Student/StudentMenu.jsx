import {Link} from "react-router-dom";
import EnrollImg from "../../../assets/icons/enroll.png";
const StudentMenu = () => {
  return (
    <>
      <li>
        <Link
          to="enrolled"
          className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <img className="w-6" src={EnrollImg} alt="enrolled" />
          <span className="ml-3 flex-1 whitespace-nowrap">Enrolled</span>
        </Link>
      </li>
    </>
  );
};

export default StudentMenu;
