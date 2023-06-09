import {Helmet} from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import useFetchData from "../../hooks/useFetchData";
import LoaderSpinner from "../../components/LoaderSpinner";
import ClassCard from "../../components/ClassCard";
const Classes = () => {
  const {data: users} = useFetchData(`/users`);
  const {data: loadedClasses, loading} = useFetchData(`/classes`);
  const classData = loadedClasses.reduce((acc, cls) => {
    const matchingUser = users.find((user) => user._id === cls.instructorId);
    if (matchingUser) {
      cls.instructorName = matchingUser.name;
    }
    acc.push(cls);
    return acc;
  }, []);
  return (
    <div>
      <Helmet>
        <title>Instructors| PixelLens Academy</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <Container>
        {loading ? (
          <LoaderSpinner />
        ) : (
          <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {classData &&
              classData.map((cls) => <ClassCard key={cls._id} cls={cls} />)}
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Classes;
