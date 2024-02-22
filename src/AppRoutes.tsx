import { Routes, Route, Navigate } from "react-router-dom";
import {
  AdminDashboard,
  AllRequest,
  Bookmark,
  Cards,
  Deck,
  Feedback,
  Games,
  GlobalNotification,
  Invitation,
  MyAccount,
  Notification,
  Quiz,
  Sets,
  StudentDashboard,
  UserDetails,
} from "./pages";
// import { useAtom } from "jotai";
// import { meUser } from "./store";

const PrivateRoute = ({ element, authority }: any) => {
  // const [loggedInUser] = useAtom(meUser);

  //* Roles-> "creator", "instructor", "student" */
  const userRole = "student";

  if (authority.includes(userRole)) {
    return element;
  } else {
    return <Navigate to="/auth/login" />;
  }
};

const commonRoutes = [
  // STUDENT ROUTES
  {
    path: "dashboard",
    element: (
      <PrivateRoute element={<StudentDashboard />} authority={["student"]} />
    ),
  },
  {
    path: "all-requests",
    element: (
      <PrivateRoute element={<AllRequest />} authority={["student"]} />
    ),
    children: [
      {
        path: "decks/:deckNo/:deckId",
        element: <PrivateRoute element={<Deck />} authority={["student"]} />,
      },
      {
        path: "decks/:deckNo/:deckId/sets/:setNo/:setId",
        element: <PrivateRoute element={<Sets />} authority={["student"]} />,
      },
      {
        path: "decks/:deckNo/:deckId/sets/:setNo/:setId/:cardId",
        element: <PrivateRoute element={<Cards />} authority={["student"]} />,
      },
    ],
  },
  {
    path: "quiz",
    element: <PrivateRoute element={<Quiz />} authority={["student"]} />,
  },
  {
    path: "games",
    element: <PrivateRoute element={<Games />} authority={["student"]} />,
  },
  {
    path: "feedback",
    element: <PrivateRoute element={<Feedback />} authority={["student"]} />,
  },
  {
    path: "bookmark",
    element: <PrivateRoute element={<Bookmark />} authority={["student"]} />,
  },
  {
    path: "my-account/:userId",
    element: (
      <PrivateRoute
        element={<MyAccount />}
        authority={["admin", "student", "creator", "instructor"]}
      />
    ),
  },
  {
    path: "notification",
    element: (
      <PrivateRoute
        element={<GlobalNotification />}
        authority={["admin", "student", "creator", "instructor"]}
      />
    ),
  },

  // ADMIN ROUTES
  {
    path: "adminDashboard",
    element: (
      <PrivateRoute element={<AdminDashboard />} authority={["admin"]} />
    ),
  },
  {
    path: "invitations",
    element: <PrivateRoute element={<Invitation />} authority={["admin"]} />,
  },
  {
    path: "userdetails",
    element: <PrivateRoute element={<UserDetails />} authority={["admin"]} />,
  },
  {
    path: "send-notification",
    element: <PrivateRoute element={<Notification />} authority={["admin"]} />,
  },
];

const AppRoutes = () => {
  const routeComponents = commonRoutes.map((route, index) => {
    return (
      <>
        {/* Routes */}
        <Route key={index} path={route.path} element={route.element} />
        {/* Nested Routes */}
        {route.children &&
          route.children.map((childRoute, childIndex) => (
            <Route
              key={childIndex}
              path={childRoute.path}
              element={childRoute.element}
            />
          ))}
      </>
    );
  });

  return <Routes>{routeComponents}</Routes>;
};

export default AppRoutes;
