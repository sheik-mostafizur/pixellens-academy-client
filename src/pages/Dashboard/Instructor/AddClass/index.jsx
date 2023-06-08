import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {uesAuthContext} from "../../../../context/AuthContext";
import LoaderSpinner from "../../../../components/LoaderSpinner";
import Swal from "sweetalert2";
import axiosURL from "../../../axios/axiosURL";

const imgHostingToken = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const [userFromDB, setUserFromDB] = useState({});
  const {user} = uesAuthContext();
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const imgHostingURL = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;

  useEffect(() => {
    axiosURL.get(`/users/${user?.email}`).then((response) => {
      setUserFromDB(response.data);
      setLoading(false);
    });
  }, [user?.email]);

  const onSubmit = (data) => {
    data.instructorId = userFromDB?._id;
    data.enrolled = 0;
    data.status = "pending";
    data.price = parseFloat(data.price);
    data.availableSeats = parseInt(data.availableSeats);

    const formData = new FormData();
    formData.append("image", data.imageURL[0]);

    fetch(imgHostingURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          data.imageURL = imgResponse.data.display_url;
          axiosURL.post(`/classes`, data).then(() => {
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class add success",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        }
      });
  };

  const labelStyle =
    "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500";
  const inputStyle =
    "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500";
  return (
    <div>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="group relative z-0 mb-6 w-full">
              <input
                type="text"
                id="instructor_name"
                defaultValue={userFromDB?.name}
                disabled
                className={inputStyle}
              />
              <label htmlFor="instructor_name" className={labelStyle}>
                Instructor Name
              </label>
            </div>
            <div className="group relative z-0 mb-6 w-full">
              <input
                type="email"
                id="instructor_email"
                defaultValue={userFromDB?.email}
                disabled
                className={inputStyle}
                placeholder=" "
              />
              <label htmlFor="instructor_email" className={labelStyle}>
                Instructor Email
              </label>
            </div>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              id="className"
              className={inputStyle}
              {...register("className", {required: "Class Name is required"})}
              placeholder=" "
            />
            <label htmlFor="className" className={labelStyle}>
              Class Name
            </label>
            {errors?.className && (
              <span className="text-red-600">{errors?.className?.message}</span>
            )}
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="group relative z-0 mb-6 w-full">
              <input
                type="text"
                id="availableSeats"
                className={inputStyle}
                {...register("availableSeats", {
                  required: "Available Seats is required",
                })}
                placeholder=" "
              />
              <label htmlFor="availableSeats" className={labelStyle}>
                Available Seats
              </label>
              {errors?.availableSeats && (
                <span className="text-red-600">
                  {errors?.availableSeats?.message}
                </span>
              )}
            </div>
            <div className="group relative z-0 mb-6 w-full">
              <input
                type="text"
                id="price"
                className={inputStyle}
                {...register("price", {required: "Price is required"})}
                placeholder=" "
              />
              <label htmlFor="price" className={labelStyle}>
                Price
              </label>
              {errors?.price && (
                <span className="text-red-600">{errors?.price?.message}</span>
              )}
            </div>
          </div>
          <div className="mb-6">
            <input
              type="file"
              className="file-input-bordered file-input w-full cursor-pointer"
              {...register("imageURL", {required: "Image URL is required"})}
            />
          </div>
          <button type="submit" className="btn">
            Add a Class
          </button>
        </form>
      )}
    </div>
  );
};

export default AddClass;
