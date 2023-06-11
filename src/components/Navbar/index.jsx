import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {uesAuthContext} from "../../context/AuthContext";
import {LogoLightMode} from "../../assets/images";
import {BsFillCartCheckFill} from "react-icons/bs";
import useFetchData from "../../hooks/useFetchData";

const Navbar = () => {
  const {user, logOutUser, theme, handleTheme} = uesAuthContext();
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [userDetails, setUserDetails] = useState(false);
  const {data: carts} = useFetchData(`/carts/${user?.email}`);

  const handleLoggedOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };
  const toggleUserDetails = () => {
    setUserDetails(!userDetails);
  };
  const navItemStyle = `block py-2 pl-3 pr-4 ${
    theme == "dark" ? "text-primary-900" : "text-primary-100"
  }  rounded hover:bg-primary-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-primary-700 dark:hover:text-white md:dark:hover:bg-transparent`;

  const navItemActiveStyle =
    "block py-2 pl-3 pr-4 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500";

  return (
    <nav
      className={`${
        theme == "dark" ? "bg-primary-50" : ""
      } left-0 top-0 z-20 w-full  shadow dark:border-primary-600 dark:bg-primary-900`}>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-1">
        <Link to="/" className="flex items-center">
          <img
            src={LogoLightMode}
            className="mr-3 h-12 md:h-16"
            alt="PixelLens Academy"
          />
          <span className="self-center whitespace-nowrap font-semibold dark:text-white md:text-2xl">
            PixelLensAcademy
          </span>
        </Link>

        {/* right side start */}
        {user?.email && (
          <div className="relative flex items-center md:order-2">
            <button
              onClick={toggleUserDetails}
              type="button"
              data-tip={"Dashboard: " + user?.displayName}
              className="tooltip tooltip-left mr-3 flex rounded-full bg-primary-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </button>
            <div
              // toggle hidden
              className={`${
                userDetails ? "" : "hidden"
              } absolute right-0 top-11 z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-primary-700`}
              id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {user?.displayName}
                </span>
                <span className="block truncate  text-sm text-gray-500 dark:text-gray-400">
                  {user?.email}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li className=" flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-primary-100 dark:text-gray-200 dark:hover:bg-primary-600 dark:hover:text-white">
                  <span className="capitalize">{theme}</span>
                  <input
                    type="checkbox"
                    onClick={handleTheme}
                    className="toggle"
                    checked={theme == "dark" ? false : true}
                    readOnly
                  />
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-100 dark:text-gray-200 dark:hover:bg-primary-600 dark:hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLoggedOut}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-primary-100 dark:text-gray-200 dark:hover:bg-primary-600 dark:hover:text-white">
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* right side end */}

        <button
          onClick={toggleMobileMenu}
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-primary-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="mobile-menu-2"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        <div
          className={`${
            isMobileMenu ? "" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="mobile-menu-2">
          <ul
            className={`${
              theme == "dark" ? "bg-primary-50 md:bg-primary-50" : ""
            } mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium dark:border-gray-700 dark:bg-primary-800 md:mt-0 md:flex-row md:items-center md:space-x-8 md:border-0  md:p-0 md:dark:bg-primary-900`}>
            <li>
              <NavLink
                to="/"
                className={({isActive}) =>
                  isActive ? navItemActiveStyle : navItemStyle
                }
                aria-current="page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className={({isActive}) =>
                  isActive ? navItemActiveStyle : navItemStyle
                }>
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className={({isActive}) =>
                  isActive ? navItemActiveStyle : navItemStyle
                }>
                Classes
              </NavLink>
            </li>
            {carts?.length > 0 && (
              <li>
                <Link to="/dashboard/selected-classes">
                  <span className="relative inline-block">
                    <BsFillCartCheckFill className="text-3xl text-gray-600" />
                    <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
                      {carts?.length}
                    </span>
                  </span>
                </Link>
              </li>
            )}
            <li>
              {user?.email ? (
                <></>
              ) : (
                <Link to="/login">
                  <button className="btn">Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
