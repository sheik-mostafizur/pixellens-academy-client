import PrivateForStudentRoutes from "./PrivateForStudentRoutes";

const RoutesForStudent = [
  {
    path: "/dashboard",
    element: (
      <PrivateForStudentRoutes>
        <>Student</>
      </PrivateForStudentRoutes>
    ),
  },
];

export default RoutesForStudent;
