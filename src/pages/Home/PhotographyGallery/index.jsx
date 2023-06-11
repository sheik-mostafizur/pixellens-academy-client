import Container from "../../../components/Container";
import Gallery from "react-photo-gallery";
import {photos} from "./photos";
const PhotographyGallery = () => {
  return (
    <section className="py-8 md:py-20">
      <Container>
        <h2 className="mb-6 text-center text-3xl font-bold text-primary-900 md:mb-12 md:text-5xl">
          Popular Photography
        </h2>
      </Container>
      <Gallery photos={photos} />
    </section>
  );
};

export default PhotographyGallery;
