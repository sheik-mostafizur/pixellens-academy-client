import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {useLoaderData} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import LoaderSpinner from "../../components/LoaderSpinner";

const Enroll = () => {
  const {data} = useLoaderData();
  const {className, imageURL, availableSeats, price, enrolled, instructorId} =
    data[0];
  const {data: instructor, loading} = useFetchData(`/users/id/${instructorId}`);
  /*
"_id": "6481c8251925ac46464aba8d",
"className": "Studio Lighting Techniques",
"availableSeats": 15,
"price": 150,
"imageURL": "https://i.ibb.co/QYJt4Bn/1562594120-depositphotos-166507128-l-2015.jpg",
"instructorId": "64815b0096502a3335e2e1e6",
"enrolled": 0,
"status": "approved",
"feedback": "Great job for this class"
  */
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Container>
        {loading ? (
          <LoaderSpinner />
        ) : (
          <div className="my-24 space-y-4 ">
            <h1 className="my-8 text-3xl font-bold md:text-5xl">{className}</h1>
            <img src={imageURL} alt={className} />
            <div className="text-xl">
              <h2>
                <b>Available Seats: </b>
                {availableSeats}
              </h2>
              <h2>
                <b>Price: </b>
                {price}
              </h2>
              <h2>
                <b>Enrolled: </b>
                {enrolled}
              </h2>
              <div className="mt-4 max-w-sm border p-4">
                <img
                  className="mb-4 w-28"
                  src={instructor.photoURL}
                  alt={instructor.name}
                />
                <h2>
                  <b>Instructor: </b>
                  {instructor.name}
                </h2>
                <h2>
                  <b>Email: </b>
                  {instructor.email}
                </h2>
              </div>
            </div>
            <button className="btn">Pay Now</button>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Enroll;
