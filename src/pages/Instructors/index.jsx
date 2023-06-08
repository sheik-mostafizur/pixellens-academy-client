import {Helmet} from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const instructorsData = [
    {
      _id: "64807827da2ff4c027ef2ba3",
      name: "Md. Hasan Ahmed",
      email: "hasanahmed@gmail.com",
      photoURL:
        "https://media.licdn.com/dms/image/C5603AQFMPTOD6qOkWw/profile-displayphoto-shrink_800_800/0/1641989950711?e=2147483647&v=beta&t=dPJ6muAFyzaat_KEd_jaUt_hiyYkphbCdF9L1hv48X8",
      userType: "instructor",
    },
    {
      _id: "648078c6da2ff4c027ef2ba4",
      name: "MD Admonish",
      email: "admin@gmail.com",
      photoURL: "https://cdn-icons-png.flaticon.com/512/2206/2206248.png",
      userType: "admin",
    },
    {
      _id: "64815b0096502a3335e2e1e6",
      name: "Fatima Khanom",
      email: "atimakhanom@gmail.com",
      photoURL:
        "https://cdn.codechef.com/sites/default/files/uploads/pictures/9c63a15fe4ace0e7ab936c6a1b81f326.jpg",
      userType: "instructor",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Instructors| PixelLens Academy</title>
      </Helmet>
      <header>
        <Navbar />
      </header>

      <Container>
        <div className="my-8 grid rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          {instructorsData &&
            instructorsData.map((instructor) => (
              <InstructorCard key={instructor._id} instructor={instructor} />
            ))}
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Instructors;
