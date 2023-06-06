import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {uesAuthContext} from "../../context/AuthContext";
import {LogoLightMode} from "../../assets/images";

const Navbar = () => {
  const {user, logOutUser} = uesAuthContext();
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [userDetails, setUserDetails] = useState(false);

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
  const navItemStyle =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  const navItemActiveStyle =
    "block py-2 pl-3 pr-4 text-white bg-primary-700 rounded md:bg-transparent md:text-primary-700 md:p-0 dark:text-white md:dark:text-primary-500";

  return (
    <nav className="left-0 top-0 z-20 w-full shadow dark:border-primary-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img
            src={LogoLightMode}
            className="mr-3 h-16"
            alt="PixelLens Academy"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            PixelLensAcademy
          </span>
        </Link>

        {/* right side start */}
        {user?.email && (
          <div className="relative flex items-center md:order-2">
            <button
              onClick={toggleUserDetails}
              type="button"
              className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
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
              // TODO: toggle hidden
              className={`${
                userDetails ? "" : "hidden"
              } absolute right-0 top-11 z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700`}
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
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLoggedOut}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
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
          className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
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
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:items-center md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
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
                to="/about"
                className={({isActive}) =>
                  isActive ? navItemActiveStyle : navItemStyle
                }>
                About
              </NavLink>
            </li>
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
