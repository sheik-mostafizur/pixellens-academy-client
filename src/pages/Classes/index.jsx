import {Helmet} from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import LoaderSpinner from "../../components/LoaderSpinner";
import ClassCard from "../../components/ClassCard";
import {uesAuthContext} from "../../context/AuthContext";
import {useEffect, useState} from "react";
import axiosURL from "../../axios/axiosURL";
const Classes = () => {
  const {user} = uesAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axiosURL.get("/classes", {params: {email: user?.email}}).then(({data}) => {
      setCourses(data);
      setIsLoading(false);
    });
  }, [user?.email]);
  return (
    <div>
      <Helmet>
        <title>Classes| PixelLens Academy</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <Container>
        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses &&
              courses.map((cls) => <ClassCard key={cls._id} cls={cls} />)}
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Classes;
