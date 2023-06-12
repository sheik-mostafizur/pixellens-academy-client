import Container from "../../../components/Container";
import LoaderSpinner from "../../../components/LoaderSpinner";
import ClassCard from "../../../components/ClassCard";
import {uesAuthContext} from "../../../context/AuthContext";
import {useEffect, useState} from "react";
import axiosURL from "../../../axios/axiosURL";

const PopularClasses = () => {
  const {user} = uesAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axiosURL
      .get("/classes/popular", {params: {email: user?.email}})
      .then(({data}) => {
        setCourses(data);
        setIsLoading(false);
      });
  }, [user?.email]);

  return (
    <section className="py-8 md:py-20">
      <Container>
        <h2 className="mb-6 text-center text-3xl font-bold text-primary-900 md:mb-12 md:text-5xl">
          Popular Classes
        </h2>
        {isLoading ? <LoaderSpinner /> : ""}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses &&
            courses.map((popularCls) => (
              <ClassCard key={popularCls._id} cls={popularCls} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularClasses;
