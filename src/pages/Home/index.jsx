import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Container>
          <Banner />
        </Container>
      </header>
      <h1 className="mt-24 text-center text-5xl font-bold">Home</h1>
    </div>
  );
};

export default Home;
