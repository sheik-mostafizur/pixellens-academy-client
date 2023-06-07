const ClassCard = ({popularCls}) => {
  const {
    className,
    classImage,
    instructorName,
    instructorEmail,
    availableSeats,
    enrolled,
    price,
  } = popularCls;
  return (
    <div className="rounded border border-white bg-primary-50 p-3 shadow-lg">
      <img className="w-full" src={classImage} alt={className} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{className}</div>
        <p className="mb-2 text-base text-gray-700">
          Instructor: {instructorName}
        </p>
        <p className="mb-2 text-base text-gray-700">Email: {instructorEmail}</p>
        <p className="mb-2 text-base text-gray-700">Enrolled: {enrolled}</p>
        <p className="mb-2 text-base text-gray-700">
          Available Seats: {availableSeats}
        </p>
        <p className="text-base text-gray-700">Price: ${price}</p>
        <button className="btn mt-4 w-full">Enrol Now</button>
      </div>
    </div>
  );
};

export default ClassCard;
