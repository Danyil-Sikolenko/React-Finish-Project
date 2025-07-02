import { createBrowserRouter, } from "react-router";
import { RouterProvider } from "react-router";

import Layout from "./components/Layout";
import PrivateRoute from "./components/privateRout/index.jsx";

import { HotelLoader } from "./loader/hotelLoader.jsx";
import Home from "./pages/home/components/HomeList.jsx";
import HotelsDataList from "./pages/hotels/components/HotelsDataList";
import Hotel from "./pages/hotel/components/Hotel.jsx";
import MorePage from "./pages/more/components/index.jsx";
import MyHotels from "./pages/my-hotels/components/index.jsx";
import Login from "./pages/login/components/index.jsx";
import SignUp from "./pages/signup/components/index.jsx";
import AboutProject from "./pages/about-us/components/index.jsx";
import NotFoundPage from "./pages/Error-404/components/index.jsx";

import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutProject /> },
      { path: 'hotels', element: <HotelsDataList />},
      { path: 'hotel/:id', element: <Hotel />, loader: HotelLoader },
      { path: 'more', element: <MorePage /> },
      {
        path: 'myHotels', element:
          <PrivateRoute >
            <MyHotels />
          </PrivateRoute>
      },
    ]
  },
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
  { path: '*', element: <NotFoundPage /> }
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
