import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//LAYOUTS
import RootLayout from "../Layouts/RootLayout";

//PAGES
import Home from "../Pages/Home";
import SearchResult from "../Pages/SearchResult";
import DoctorProfile from "../Pages/DoctorProfile";

function RouteProvider() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search/:searchTerm" element={<SearchResult />}></Route>
          <Route path="/profile/:doctorId" element={<DoctorProfile />}></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={routes}></RouterProvider>;
}

export default RouteProvider;
