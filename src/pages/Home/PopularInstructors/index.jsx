import {motion} from "framer-motion";
import Container from "../../../components/Container";
import LoaderSpinner from "../../../components/LoaderSpinner";
import useFetchData from "../../../hooks/useFetchData";

const PopularInstructors = () => {
  const {data: instructors, loading} = useFetchData("/instructors/popular");
  return (
    <section className="py-8 md:py-20">
      <Container>
        <h2 className="mb-6 text-center text-3xl font-bold text-primary-900 md:mb-12 md:text-5xl">
          Popular Instructors
        </h2>
        {loading ? (
          <LoaderSpinner />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {instructors &&
              instructors.slice(0, 6).map((instruct) => {
                return (
                  <motion.div
                    whileHover={{scale: 1.1}}
                    variants={{
                      hidden: {opacity: 0, scale: 0.8},
                      visible: {opacity: 1, scale: 1},
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.5}}
                    key={instruct._id}
                    className="rounded-xl bg-primary-100 px-4 pb-4 pt-8 shadow">
                    <div className="mb-4">
                      <img
                        src={instruct.photoURL}
                        alt={instruct.name}
                        className="mx-auto h-[320px] w-[320px] rounded-full object-cover"
                      />
                    </div>
                    <div className="mb-4 text-center">
                      <h3 className="mb-2 text-2xl font-bold text-primary-900">
                        {instruct.name}
                      </h3>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          readOnly
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          readOnly
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          readOnly
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          readOnly
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          readOnly
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        )}
      </Container>
    </section>
  );
};

export default PopularInstructors;
