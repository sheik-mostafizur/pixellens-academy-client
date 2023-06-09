import Container from "../../../components/Container";
import useFetchData from "../../../hooks/useFetchData";
import LoaderSpinner from "../../../components/LoaderSpinner";
import ClassCard from "../../../components/ClassCard";

const PopularClasses = () => {
  const {data: users} = useFetchData(`/users`);
  const {data: loadedClasses, loading} = useFetchData("/popular-classes");
  const popularClasses = loadedClasses.reduce((acc, cls) => {
    const matchingUser = users.find((user) => user._id === cls.instructorId);
    if (matchingUser) {
      cls.instructorName = matchingUser.name;
      cls.instructorEmail = matchingUser.email;
    }
    acc.push(cls);
    return acc;
  }, []);
  return (
    <section className="py-8 md:py-24">
      <Container>
        <h2 className="mb-6 text-center text-3xl font-bold text-primary-900 md:mb-12 md:text-5xl">
          Popular Classes
        </h2>
        {loading ? <LoaderSpinner /> : ""}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {popularClasses &&
            popularClasses.map((popularCls) => (
              <ClassCard key={popularCls._id} cls={popularCls} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularClasses;
