import {useState} from "react";
import {AiFillHome} from "react-icons/ai";
import {HiUsers} from "react-icons/hi";
import {Link} from "react-router-dom";

const DashboardMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <>
      <button
        onClick={handleToggleMenu}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className={`${
          toggleMenu ? "ml-auto block" : "inline-flex"
        }  ml-3 mt-2 items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden`}>
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className={`fixed left-0 top-0 z-40 h-screen w-64 ${
          toggleMenu ? "" : "-translate-x-full"
        } transition-transform sm:translate-x-0`}
        aria-label="Sidebar">
        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <AiFillHome className="text-2xl text-primary-900" />
                <span className="ml-3">Home</span>
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
          </ul>
        </div>
      </aside>
    </>
  );
};

export default DashboardMenu;
