import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function RouteProvider() {
  const routes = createBrowserRouter(createRoutesFromElements(<></>));
  return <RouterProvider router={routes}></RouterProvider>;
}

export default RouteProvider;
