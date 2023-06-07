import Container from "../../../components/Container";
import ClassCard from "./ClassCard";
import popularClasses from "./TemporaryData";

const PopularClasses = () => {
  return (
    <section className="py-8 md:py-24">
      <Container>
        <h2 className="mb-6 text-center text-3xl font-bold text-primary-900 md:mb-12 md:text-5xl">
          Popular Classes
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {popularClasses &&
            popularClasses.map((popularCls) => (
              <ClassCard key={popularCls.id} popularCls={popularCls} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularClasses;
