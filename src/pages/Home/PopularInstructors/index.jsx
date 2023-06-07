import Container from "../../../components/Container";

const PopularInstructors = () => {
  return (
    <section className="py-8 md:py-24">
      <Container>
        <h2 className="mb-6 text-center text-3xl font-bold text-primary-900 md:mb-12 md:text-5xl">
          Popular Instructors
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>
      </Container>
    </section>
  );
};

export default PopularInstructors;
