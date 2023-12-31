import {useState} from "react";
import {Helmet} from "react-helmet-async";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import Swal from "sweetalert2";

import {uesAuthContext} from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {useForm} from "react-hook-form";
const Login = () => {
  const {logInUser, logInUserWithGoogle} = uesAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isShowPass, setIsShowPass] = useState(false);
  const {register, handleSubmit, reset} = useForm();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = ({email, password}) => {
    setError("");
    // login using email and password
    logInUser(email, password)
      .then(() => {
        setError("");
        reset();
        navigate(from, {replace: true});
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged In successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => setError(error.message));
  };

  // google authentication handle
  const handleLoginWithGoogle = () => {
    logInUserWithGoogle()
      .then(() => {
        setError("");
        navigate(from, {replace: true});
      })
      .catch((error) => setError(error.message));
  };
  const handleIsShowPassword = () => {
    setIsShowPass(!isShowPass);
  };
  return (
    <>
      <Helmet>
        <title>Login Your Account | PixelLens Academy</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <section className="flex min-h-[800px] items-center justify-center">
        <div className="relative rounded-lg border border-primary-100 p-8 shadow md:w-[450px]">
          <h2 className="text-center text-2xl font-bold">
            Log In Your Account
          </h2>
          <div className="mt-4 flex items-center justify-center">
            <button
              onClick={handleLoginWithGoogle}
              type="button"
              className="hover:text-primary mb-2 mr-2 rounded-lg border border-gray-200 bg-white py-1 pe-4 ps-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="google"
                className="inline-block h-8 w-8"
              />
              Continue with Google
            </button>
          </div>
          <div className="inline-flex w-full items-center justify-center">
            <hr className="my-4 h-px w-full border-0 bg-gray-200 dark:bg-gray-700" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white">
              or
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                {...register("email")}
                className="focus:ring-primary focus:border-primary dark:focus:ring-primary dark:focus:border-primary block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="relative mb-6">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <input
                type={isShowPass ? "text" : "password"}
                {...register("password")}
                className="focus:ring-primary focus:border-primary dark:focus:ring-primary dark:focus:border-primary block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="********"
                required
              />
              {isShowPass ? (
                <AiFillEye
                  onClick={handleIsShowPassword}
                  className="absolute right-2 top-1/2 cursor-pointer text-2xl text-primary-900"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={handleIsShowPassword}
                  className="absolute right-2 top-1/2 cursor-pointer text-2xl text-primary-900"
                />
              )}
            </div>
            {error && <p className="mb-4 text-red-600">{error}</p>}
            <button type="submit" className="btn mb-4 w-full">
              Login
            </button>
            <p>
              Don{`'`}t have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-primary-600 hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
