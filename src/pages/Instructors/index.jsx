import {Helmet} from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import InstructorCard from "./InstructorCard";
import LoaderSpinner from "../../components/LoaderSpinner";
import useFetchData from "../../hooks/useFetchData";

const Instructors = () => {
  const {data: instructorsData, loading} = useFetchData("/Instructors")



  return (
    <div>
      <Helmet>
        <title>Instructors| PixelLens Academy</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <Container>
          <div className="my-8 grid rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            {instructorsData &&
              instructorsData.map((instructor) => (
                <InstructorCard key={instructor._id} instructor={instructor} />
              ))}
          </div>
        </Container>
      )}

      <Footer />
    </div>
  );
};

export default Instructors;
