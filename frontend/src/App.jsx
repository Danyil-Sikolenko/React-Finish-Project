import { createBrowserRouter,  } from "react-router";
import Layout from "./components/Layout";
import { RouterProvider } from 'react-router'
import Home from "./pages/home/components/HomeList.jsx";
import HotelsDataList from "./pages/hotels/components/HotelsDataList";
import './App.css'




 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home />},
      { path: 'about', element: <div>About Us</div>},
      { path: 'hotels', element: <HotelsDataList /> },
      { path: 'more', element: <div>More</div>},
    ]
  },
]);




function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
