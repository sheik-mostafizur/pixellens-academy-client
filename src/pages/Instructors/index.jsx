import {Helmet} from "react-helmet-async";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import InstructorCard from "./InstructorCard";
import {useEffect, useState} from "react";
import LoaderSpinner from "../../components/LoaderSpinner";

const Instructors = () => {
  const [loading, setLoading] = useState(false);

  const [instructorsData, setInstructorsData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios.get("/users/instructors").then(({data}) => {
      setInstructorsData(data);
      setLoading(false);
    });
  }, []);

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
