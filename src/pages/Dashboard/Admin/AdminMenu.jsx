import {HiUsers} from "react-icons/hi";
import {SiGoogleclassroom} from "react-icons/si";
import {Link} from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <li>
        <Link
          to="classes"
          className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <SiGoogleclassroom className="text-2xl text-primary-900" />
          <span className="ml-3 flex-1 whitespace-nowrap">Classes</span>
        </Link>
      </li>
      <li>
        <Link
          to="users"
          className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          <HiUsers className="text-2xl text-primary-900" />
          <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
        </Link>
      </li>
    </>
  );
};

export default AdminMenu;
