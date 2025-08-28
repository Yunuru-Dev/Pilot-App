import ReactDOM from "react-dom/client"
import { createBrowserRouter ,RouterProvider} from "react-router-dom";

import { Dashboard } from "./components/Dashboard";
import OnBoarding from "./components/OnBoarding";
import ForgotPassword from "./components/ForgotPassword";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/signUp";
import ResetPassword from "./components/ResetPassword";
import DataFecch from "./components/DataFecch";

function App() {
  
  return (
    <>
    <SignIn></SignIn>
   
    </>
  );
}
const appRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/dashboard",element: <Dashboard />},
  {path:"/onboarding",element:<OnBoarding />},
   { path:"/datafetch",element:<DataFecch />},
  {path:"/forgot-password",element:<ForgotPassword />},
  {path:"/reset-password",element:<ResetPassword/>}
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);
export default App;
