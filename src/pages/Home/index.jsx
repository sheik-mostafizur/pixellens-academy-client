import {Helmet} from "react-helmet-async";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import PhotographyGallery from "./PhotographyGallery";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | PixelLens Academy</title>
      </Helmet>
      <header>
        <Navbar />
        <Container>
          <Banner />
        </Container>
      </header>

      <PopularClasses />
      <PopularInstructors />
      <PhotographyGallery />
      <Footer />
    </>
  );
};

export default Home;
