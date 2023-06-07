import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Container>
          <Banner />
        </Container>
      </header>
      <h1 className="my-24 text-center text-5xl font-bold">Home</h1>

      <Footer/>
    </>
  );
};

export default Home;
