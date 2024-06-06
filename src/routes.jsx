import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "",
    path: "/",
    element: <Home />,
  },
  {
    name: "about",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
