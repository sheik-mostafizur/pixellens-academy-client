import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";
import PopularClasses from "./PopularClasses";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Container>
          <Banner />
        </Container>
      </header>

      <PopularClasses />

      <Footer />
    </>
  );
};

export default Home;
